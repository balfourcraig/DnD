let npcContext = {
	characters: []
};

window.addEventListener('DOMContentLoaded', () => {
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
	return items;
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
	
	charBlock.appendChild(buildLine(c.gender, 'Gender', () => Math.random() > 0.5 ? 'M' : 'F',
		(e) => {
			c.gender = e;
			c.profile =  '../images/' + arrayRandom(c.gender === 'M' ? npcPicLocationsM.items : npcPicLocationsF.items);
			pic.src = c.profile;
		})
	);
	charBlock.appendChild(buildLine(c.voice, 'Voice', () => arrayRandom(voices.items), (e) => c.voice = e));
	charBlock.appendChild(buildBlock(c.loot, 'Loot', generateLoot, (e) => c.loot = e));
	charBlock.appendChild(buildBlock(c.action, 'Doing', generateAction, (e) => c.action = e));
	charBlock.appendChild(buildLine(c.flavor, 'Detail', () => arrayRandom(npcFlavor.items), (e) => c.flavor = e));
	charBlock.appendChild(buildLine(c.secret, 'Secret', () => arrayRandom(npcSecrets.items), (e) => c.secret = e));
	charBlock.appendChild(buildBlock(c.notes, 'Notes', () => '', (e) => c.notes = e));
	
	const btnArea = document.createElement('div');
	
	const delBtn = document.createElement('button');
	delBtn.innerText = 'DELETE';
	const saveBtn = document.createElement('button');
	saveBtn.innerText = 'SAVE';
	btnArea.appendChild(delBtn);
	btnArea.appendChild(saveBtn);
	
	//charBlock.appendChild(btnArea);
	document.getElementById('charArea').appendChild(charBlock);
}

let lineUniquifier = 1;

function buildBlock(content, name, randFunc, updateFunc){
	const lineArea = document.createElement('div');
	lineArea.setAttribute('class', 'lineArea');
	const randBtn = document.createElement('button');
	randBtn.innerHTML = '&#127922;';
	randBtn.setAttribute('class', 'randBtn');
	const inp = document.createElement('textarea');
	inp.placeholder = name;
	inp.addEventListener('input', () => updateFunc(inp.value));
	inp.value = content;
	inp.id = 'line' + lineUniquifier;
	inp.setAttribute('spellcheck', 'false');
	lineUniquifier++;
	const label = document.createElement('label');
	label.innerHTML = name;
	label.htmlFor = inp.id;
	randBtn.addEventListener('click', () => {
		inp.value = randFunc();
		updateFunc(inp.value);
	});
	
	lineArea.appendChild(label);
	lineArea.appendChild(inp);
	lineArea.appendChild(randBtn);
	
	return lineArea;
}

function buildLine(content, name, randFunc, updateFunc){
	const lineArea = document.createElement('div');
	lineArea.setAttribute('class', 'lineArea');
	const randBtn = document.createElement('button');
	randBtn.innerHTML = '&#127922;';
	randBtn.setAttribute('class', 'randBtn');
	const inp = document.createElement('input');
	inp.type = 'text';
	inp.placeholder = name;
	inp.addEventListener('input', () => updateFunc(inp.value));
	inp.value = content;
	inp.id = 'line' + lineUniquifier;
	lineUniquifier++;
	const label = document.createElement('label');
	label.innerHTML = name;
	label.htmlFor = inp.id;
	randBtn.addEventListener('click', () => {
		inp.value = randFunc();
		updateFunc(inp.value);
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
