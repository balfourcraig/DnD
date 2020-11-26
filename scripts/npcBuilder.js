let npcContext = {
	characters: []
};

window.addEventListener('DOMContentLoaded', () => {
	document.getElementById('printBtn').addEventListener('click', () => {
		window.print();
	});
	npcContext = loadContextFromLocalStorage();
	if(npcContext.characters.length > 0){
		for(let c of npcContext.characters){
			appendCharacter(c);
		}
	}
	else{
		appendCharacter(buildRandomCharacter());
	}
	document.getElementById('newCharBtn').addEventListener('click', () => appendCharacter(buildRandomCharacter()));
});

function buildRandomCharacter(){
	const c = {};
	c.gender = Math.random() > 0.5 ? 'M' : 'F';
	c.firstname = arrayRandom(c.gender === 'M' ? npcFirstnameM.items : npcFirstnameF.items);
	c.surname = arrayRandom(npcSurname.items);
	c.loot = generateLoot();//source from normal loot and gut wrench
	c.flavor = arrayRandom(npcFlavor.items);
	c.secret = arrayRandom(npcSecrets.items);
	c.voice = arrayRandom(voices.items);
	c.clothing = randomNPCOutfit(c.gender);
	c.action = generateAction();
	c.notes = '';
	c.profile = '../images/' + arrayRandom(c.gender === 'M' ? npcPicLocationsM.items : npcPicLocationsF.items);
	
	return c;
}

function generateAction(){
	const r = Math.random();
	if(r < 0.25)
		return arrayRandom(actions.items)
	else if(r < 0.5)
		return 'Saying: "' + arrayRandom(overheard.items) + '"';
	else if(r < 0.75)
		return 'Praying: "' + arrayRandom(prayers.items) + '"';
	else
		return 'Joking: "...' + arrayRandom(punchlines.items) + '"';
}

function generateLoot(){
	const numItems = ~~(Math.random() * 4) + 1;
	let items = '';
	for(let i = 0; i < numItems; i++){
		const r = Math.random();
		if(r < 0.1)
			items += arrayRandom(gutWrench.items) + '\n';
		else
			items += arrayRandom(clutter.items) + '\n';
	}
	return items.trim();
}

function appendCharacter(c){
	const charBlock = document.createElement('div');
	charBlock.setAttribute('class','charBlock');

	const pic = document.createElement('img');
	pic.src = c.profile;
	pic.setAttribute('class','profilePic');
	
	const headerBlock = document.createElement('div');
	headerBlock.setAttribute('class','charHeader');
	headerBlock.appendChild(pic);
	const nameBlock = document.createElement('div');
	nameBlock.setAttribute('class', 'nameBlock');
	nameBlock.appendChild(buildLine(c.firstname, 'Firstname', () => arrayRandom(c.gender === 'M' ? npcFirstnameM.items : npcFirstnameF.items), (e) => c.firstname = e));
	nameBlock.appendChild(buildLine(c.surname, 'Surname', () => arrayRandom(npcSurname.items), (e) => c.surname = e));
	
	headerBlock.appendChild(nameBlock);
	charBlock.appendChild(headerBlock);
	
	const detailsTbl = document.createElement('table');
	detailsTbl.setAttribute('class','detailsTable');
	detailsTbl.appendChild(buildRowBlock(c.gender, 'Gender', () => Math.random() > 0.5 ? 'M' : 'F',
		(e) => {
			c.gender = e;
			c.profile =  '../images/' + arrayRandom(c.gender === 'M' ? npcPicLocationsM.items : npcPicLocationsF.items);
			pic.src = c.profile;
		})
	);
	detailsTbl.appendChild(buildRowBlock(c.voice, 'Voice', () => arrayRandom(voices.items), (e) => c.voice = e));
	detailsTbl.appendChild(buildRowBlock(c.clothing, 'Clothing', () => randomNPCOutfit(c.gender), (e) => c.clothing = e));
	detailsTbl.appendChild(buildRowBlock(c.loot, 'Loot', generateLoot, (e) => c.loot = e));
	detailsTbl.appendChild(buildRowBlock(c.action, 'Doing', generateAction, (e) => c.action = e));
	detailsTbl.appendChild(buildRowBlock(c.flavor, 'Detail', () => arrayRandom(npcFlavor.items), (e) => c.flavor = e));
	detailsTbl.appendChild(buildRowBlock(c.secret, 'Secret', () => arrayRandom(npcSecrets.items), (e) => c.secret = e));
	detailsTbl.appendChild(buildRowBlock(c.notes, 'Notes', () => '', (e) => c.notes = e));
	
	charBlock.appendChild(detailsTbl);
	
	const btnArea = document.createElement('div');
	
	const delBtn = document.createElement('button');
	delBtn.setAttribute('class', 'delBtn');
	delBtn.innerText = 'X';
	delBtn.addEventListener('click',() => {
		charBlock.parentElement.removeChild(charBlock);
	});
	const saveBtn = document.createElement('button');
	saveBtn.innerText = 'SAVE';
	btnArea.appendChild(delBtn);
	//btnArea.appendChild(saveBtn);
	
	charBlock.appendChild(btnArea);
	document.getElementById('charArea').appendChild(charBlock);
}

let lineUniquifier = 1;

function buildRowBlock(content, name, randFunc, updateFunc){
	const row = document.createElement('tr');
	row.setAttribute('class', 'lineArea');
	const randBtn = document.createElement('button');
	randBtn.innerHTML = '&#127922;';
	randBtn.setAttribute('class', 'randBtn');
	const inp = document.createElement('div');
	inp.setAttribute('contentEditable','true');
	inp.addEventListener('input', () => updateFunc(inp.innerText));
	inp.innerText = content;
	inp.id = 'line' + lineUniquifier;
	inp.setAttribute('spellcheck', 'false');

	lineUniquifier++;
	const label = document.createElement('label');
	label.innerHTML = name;
	label.htmlFor = inp.id;
	randBtn.addEventListener('click', () => {
		inp.innerText = randFunc();
		updateFunc(inp.innerText);
	});
	
	const labelTd = document.createElement('td');
	labelTd.setAttribute('class','tblLabel');
	const randTd = document.createElement('td');
	randTd.setAttribute('class','tblRand');
	const inpTd = document.createElement('td');
	inpTd.setAttribute('class','tblInp');
	
	labelTd.appendChild(label);
	randTd.appendChild(randBtn);
	inpTd.appendChild(inp);
	row.appendChild(labelTd);
	row.appendChild(inpTd);
	row.appendChild(randTd);
	
	return row;
}

function buildLine(content, name, randFunc, updateFunc){
	const lineArea = document.createElement('div');
	lineArea.setAttribute('class', 'lineArea');
	const randBtn = document.createElement('button');
	randBtn.innerHTML = '&#127922;';
	randBtn.setAttribute('class', 'randBtn');
	const inp = document.createElement('div');
	inp.setAttribute('contentEditable','true');
	inp.setAttribute('spellcheck', 'false');
	inp.addEventListener('input', () => updateFunc(inp.innerText));
	inp.innerText = content;
	inp.id = 'line' + lineUniquifier;
	lineUniquifier++;
	const label = document.createElement('label');
	label.innerHTML = name;
	label.htmlFor = inp.id;
	randBtn.addEventListener('click', () => {
		inp.innerText = randFunc();
		updateFunc(inp.innerText);
	});
	
	lineArea.appendChild(label);
	lineArea.appendChild(inp);
	lineArea.appendChild(randBtn);
	
	return lineArea;
}

function loadContextFromLocalStorage() {
    if (typeof (Storage) === "undefined") 
        console.warn('Browser does not support Web Storage.');
    else {
		if(localStorage.npcContext)
			return JSON.parse(localStorage.npcContext);
    }
	return {
		characters: []
	};
}

function saveContextToLocalStorage(context) {
    if (typeof (Storage) === "undefined") 
        console.warn('Browser does not support Web Storage. Chatbot info not saved');
    else {
		localStorage.npcContext = JSON.stringify(context);
    }
}
