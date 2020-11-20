window.addEventListener('DOMContentLoaded', () => {
	appendCharacter(buildRandomCharacter());
});

function buildRandomCharacter(){
	const c = {};
	c.gender = Math.random() > 0.5 ? 'M' : 'F';
	c.firstname = arrayRandom(c.gender === 'M' ? npcFirstnameM.items : npcFirstnameF.items);
	c.surname = arrayRandom(npcSurname.items);
	c.loot = arrayRandom(gutWrench.items);//source from normal loot and gut wrench
	c.flavor = arrayRandom(npcFlavor.items);
	c.secret = arrayRandom(npcSecrets.items);
	c.notes = '';
	c.profile = '../images/' + arrayRandom(npcPicLocations.items);
	
	return c;
}

function appendCharacter(c){
	const charBlock = document.createElement('div');
	charBlock.setAttribute('class','charBlock');
	
	charBlock.appendChild(buildLine(c.gender, 'Gender', () => Math.random() > 0.5 ? 'M' : 'F', (e) => c.gender = e));
	charBlock.appendChild(buildLine(c.firstname, 'Firstname', () => arrayRandom(c.gender === 'M' ? npcFirstnameM.items : npcFirstnameF.items), (e) => c.firstname = e));
	charBlock.appendChild(buildLine(c.surname, 'Surname', () => arrayRandom(npcSurname.items), (e) => c.surname = e));
	charBlock.appendChild(buildLine(c.loot, 'Loot', () => arrayRandom(gutWrench.items), (e) => c.loot = e));
	charBlock.appendChild(buildLine(c.flavor, 'Flavour', () => arrayRandom(npcFlavor.items), (e) => c.flavor = e));
	charBlock.appendChild(buildLine(c.secret, 'Secret', () => arrayRandom(npcSecrets.items), (e) => c.secret = e));
	charBlock.appendChild(buildLine(c.notes, 'Notes', () => '', (e) => c.notes = e));
	
	document.getElementById('charArea').appendChild(charBlock);
}

let lineUniquifier = 1;

function buildLine(content, name, randFunc, updateFunc){
	const lineArea = document.createElement('div');
	lineArea.setAttribute('class', 'lineArea');
	const randBtn = document.createElement('button');
	randBtn.innerHTML = '&#127922;';
	randBtn.setAttribute('class', 'randBtn');
	const inp = document.createElement('input');
	inp.type = 'text';
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