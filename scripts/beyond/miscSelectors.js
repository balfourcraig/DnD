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

function languageSelector(player, num){
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
				player.languages.push({id: s.id, value: s.value});
			updateSheet();
		});
		holder.appendChild(s);
	}
	return holder;
}

function skillSelector(player, num){
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
				player.skillProficiencies.push({id: s.id, value: s.value});
			updateSheet();
		});
		holder.appendChild(s);
	}
	return holder;
}

function asi(player){
	const holder = document.createElement('div');
	const title = document.createElement('h4');
	title.innerText = 'Ability Score Improvement';
	holder.appendChild(title);

	const s1 = asiSelect(player);
	holder.appendChild(s1);
	const s2 = asiSelect(player);
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

function asiSelect(player){
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
			player.asi.push({id: s.id, value: 1, stat: s.value});
		updateSheet();
	});
	
	return s;
}