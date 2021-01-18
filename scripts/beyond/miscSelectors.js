let uniquifier = 1;

const languages = [
	'Common',
	'Dwarvish',
	'Elvish',
	'Giant',
	'Gnomish',
	'Goblin',
	'Halfling',
	'Orc',
	'Abyssal',
	'Celestial',
	'Draconic',
	'Deep Speech',
	'Infernal',
	'Primordial',
	'Sylvan',
	'Undercommon',
];

const skills = [
	{name: 'Acrobatics', atr: 'DEX'},
	{name: 'Animal Handling', atr: 'WIS'},
	{name: 'Arcana', atr: 'INT'},
	{name: 'Athletics', atr: 'STR'},
	{name: 'Deception', atr: 'CHA'},
	{name: 'History', atr: 'INT'},
	{name: 'Insight', atr: 'WIS'},
	{name: 'Intimidation', atr: 'CHA'},
	{name: 'Investigation', atr: 'INT'},
	{name: 'Medicine', atr: 'WIS'},
	{name: 'Nature', atr: 'INT'},
	{name: 'Perception', atr: 'WIS'},
	{name: 'Performance', atr: 'CHA'},
	{name: 'Persuasion', atr: 'CHA'},
	{name: 'Religion', atr: 'INT'},
	{name: 'Sleight of Hand', atr: 'DEX'},
	{name: 'Stealth', atr: 'DEX'},
	{name: 'Survival', atr: 'WIS'},
];

const atrNames = [
	'STR',
	'DEX',
	'CON',
	'INT',
	'WIS',
	'CHA'
];

function resetByTag(player, tag){
	player.asi = filterOutTag(player.asi, tag);
	player.skillProficiencies = filterOutTag(player.skillProficiencies, tag);
	player.toolProficiencies = filterOutTag(player.toolProficiencies, tag);
	player.armorProficiencies = filterOutTag(player.armorProficiencies, tag);
	player.weaponProficiencies = filterOutTag(player.weaponProficiencies, tag);
	player.languages = filterOutTag(player.languages, tag);
}

function filterOutTag(arr, tag){
	const newArr = [];
	for(let i of arr){
		if(i.tag !== tag)
			newArr.push(i);
	}
	return newArr;
}

function languageSelector(player, num, tag){
	const holder = document.createElement('div');
	const title = document.createElement('h4');
	title.innerText = '+' + num + ' Language' + (num === 1 ? '' : 's');
	holder.appendChild(title);
	for(let i = 0; i < num; i++){
		const s = document.createElement('select');
		s.id = 'lang' + uniquifier++;
		const none = document.createElement('option');
		none.innerText = '-';
		none.value = '-';
		s.appendChild(none);
		
		for(let a of languages){
			const o = document.createElement('option');
			o.innerText = a;
			o.value = a;
			s.appendChild(o);
		}
		
		s.addEventListener('change', () => {
			removeLang(s.id, player);
			if(s.value !== '-')
				player.languages.push({id: s.id, value: s.value, tag:tag});
			updateSheet();
		});
		holder.appendChild(s);
	}
	return holder;
}

function skillSelectorLimited(player, num, tag, availableSkillNames){
	const holder = document.createElement('div');
	const title = document.createElement('h4');
	title.innerText = '+' + num + ' Skill' + (num === 1 ? '' : 's');
	holder.appendChild(title);
	for(let i = 0; i < num; i++){
		const s = document.createElement('select');
		s.id = 'skill' + uniquifier++;
		const none = document.createElement('option');
		none.innerText = '-';
		none.value = '-';
		s.appendChild(none);
		
		for(let a of skills){
			if(availableSkillNames.includes(a.name)){
				const o = element('option', a.name);
				o.value = a.name;
				s.appendChild(o);
			}
		}
		s.addEventListener('change', () => {
			removeSkill(s.id, player);
			if(s.value !== '-')
				player.skillProficiencies.push({id: s.id, value: s.value, tag:tag});
			updateSheet();
		});
		holder.appendChild(s);
	}
	return holder;
}

function skillSelector(player, num, tag){
	const holder = document.createElement('div');
	const title = document.createElement('h4');
	title.innerText = '+' + num + ' Skill' + (num === 1 ? '' : 's');
	holder.appendChild(title);
	for(let i = 0; i < num; i++){
		const s = document.createElement('select');
		s.id = 'skill' + uniquifier++;
		const none = document.createElement('option');
		none.innerText = '-';
		none.value = '-';
		s.appendChild(none);
		
		for(let a of skills){
			const o = element('option', a.name);
			o.value = a.name;
			s.appendChild(o);
		}
		s.addEventListener('change', () => {
			removeSkill(s.id, player);
			if(s.value !== '-')
				player.skillProficiencies.push({id: s.id, value: s.value, tag:tag});
			updateSheet();
		});
		holder.appendChild(s);
	}
	return holder;
}

function asi(player, tag){
	const holder = document.createElement('div');
	const title = document.createElement('h4');
	title.innerText = 'Ability Score Improvement';
	holder.appendChild(title);

	const s1 = asiSelect(player, tag);
	holder.appendChild(s1);
	const s2 = asiSelect(player, tag);
	holder.appendChild(s2);
	
	return holder;
}

function removeSkill(id, player){
	let lineIndex = -1;
	for(let i = 0; i < player.skillProficiencies.length; i++){
		if(player.skillProficiencies[i].id === id){
			lineIndex = i;
			break;
		}
	}
	if(lineIndex != -1)
		player.skillProficiencies.splice(lineIndex, 1);
}

function removeLang(id, player){
	let lineIndex = -1;
	for(let i = 0; i < player.languages.length; i++){
		if(player.languages[i].id === id){
			lineIndex = i;
			break;
		}
	}
	if(lineIndex != -1)
		player.languages.splice(lineIndex, 1);
}

function removeAsi(id, player){
	let lineIndex = -1;
	for(let i = 0; i < player.asi.length; i++){
		if(player.asi[i].id === id){
			lineIndex = i;
			break;
		}
	}
	if(lineIndex != -1)
		player.asi.splice(lineIndex, 1);
}

function asiSelect(player, tag){
	const s = document.createElement('select');
	s.id = 'asi' + uniquifier++;
	const none = document.createElement('option');
	none.innerText = '-';
	none.value = '-';
	s.appendChild(none);
	
	for(let a of atrNames){
		const o = document.createElement('option');
		o.innerText = a;
		o.value = a;
		s.appendChild(o);
	}
	
	s.addEventListener('change', () => {
		removeAsi(s.id, player);
		if(s.value !== '-')
			player.asi.push({id: s.id, value: 1, stat: s.value, tag:tag});
		updateSheet();
	});
	
	return s;
}

function playerSkillProficient(player, skill){
	for(let s of player.skillProficiencies){
		if(s.value === skill)
			return true;
	}
	return false;
}

function getAtrTotal(player, atr){
	let asiMod = 0;
	for(let i of player.asi){
		if(i.stat === atr.name)
			asiMod += i.value;
	}
	return atr.base + atr.racial + asiMod + atr.misc;
}

function getAtrMod(player, atr){
	return ~~((getAtrTotal(player, atr) - 10) / 2)
}

function getProficiencyBonus(level){
	if(level < 5)
		return 2;
	else if (level < 9)
		return 3;
	else if (level < 13)
		return 4;
	else if (level < 17)
		return 5;
	else
		return 6;
}

function createBlankPlayer(){
	return {
		name: '',
		race: '',
		level: 1,
		atr: {
			STR: {name: 'STR', base: 10, racial: 0, misc: 0},
			DEX: {name: 'DEX', base: 10, racial: 0, misc: 0},
			CON: {name: 'CON', base: 10, racial: 0, misc: 0},
			INT: {name: 'INT', base: 10, racial: 0, misc: 0},
			WIS: {name: 'WIS', base: 10, racial: 0, misc: 0},
			CHA: {name: 'CHA', base: 10, racial: 0, misc: 0}
		},
		asi: [],
		speed: {
			walk: 0,
			swim: 0,
			fly: 0
		},
		AC: 0,
		inititive: 0,
		darkvision: 0,
		skillProficiencies: [],
		toolProficiencies: [],
		armorProficiencies: [],
		weaponProficiencies: [],
		languages: [
			{id: 'base', value: 'Common'}
		],
	};
}

function emptyFunc(){
	return false;
}