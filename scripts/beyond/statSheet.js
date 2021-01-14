let player = null;

function loadContextFromLocalStorage() {
	console.log('reading');
    if (typeof (Storage) === "undefined") 
        console.warn('Browser does not support Web Storage.');
    else {
		if(localStorage.savedPlayer){
			player = JSON.parse(localStorage.savedPlayer);
			return;
		}
    }
	player = null;
}

window.addEventListener('DOMContentLoaded', () => {
	const sheet = document.getElementById('sheetHolder');
	sheet.innerHTML = '';
	loadContextFromLocalStorage();
	if(player === null)
		sheet.innerText = 'ERROR. No player saved';
	else
		updateSheet();
});

function updateSheet(){
	const sheet = document.getElementById('sheetHolder');
	sheet.innerHTML = '';
	sheet.appendChild(element('h3', 'Attributes'));
	sheet.appendChild(atrArea());
	
	sheet.appendChild(element('h3', 'Skills'));
	sheet.appendChild(skillsArea());
	
	sheet.appendChild(element('h3', 'Proficiency Bonus'));
	sheet.appendChild(element('p', getProficiencyBonus(player.level)));
	
	const langList = document.createElement('ul');
	sheet.appendChild(element('h3','Languages'));
	for(let lang of player.languages){
		const li = document.createElement('li');
		li.innerText = lang.value;
		langList.appendChild(li);
	}
	sheet.appendChild(langList);
	saveToLocalStorage();
}

function skillsArea(){
	const skillsTable = element('table');
	const profBonus = getProficiencyBonus(player.level);
	const titleRow = element('tr');
	titleRow.appendChild(element('th', 'Prof'));
	titleRow.appendChild(element('th', 'Skill'));
	titleRow.appendChild(element('th', 'Atr'));
	titleRow.appendChild(element('th', 'Mod'));
	skillsTable.appendChild(titleRow);
	for(let s of skills){
		const row = element('tr');
		const prof = playerSkillProficient(s.name);
		row.appendChild(element('td', prof ? '&#x2714;' : ''));
		row.appendChild(element('td', s.name));
		row.appendChild(element('td', s.atr));
		row.appendChild(element('td', getAtrMod(player.atr[s.atr]) + (prof ? profBonus : 0)));
		skillsTable.appendChild(row);
	}
	return skillsTable;
}

function atrArea(){
	const atrTable = element('table','','atrTable');
	const modRow = element('tr','','modRow');
	const valRow = element('tr','','valRow');
	const statRow = element('tr','','statRow');
	
	for(let a of atrNames){
		const atr = player.atr[a];
		const modEl = document.createElement('td');
		const mod = getAtrMod(atr);
		if(mod > 0)
			modEl.innerText = '+' + mod;
		else
			modEl.innerText = mod;
		modRow.appendChild(modEl);
		valRow.appendChild(element('td', '(' + getAtrTotal(atr) + ')'));
		statRow.appendChild(element('td', a));
	}
	
	atrTable.appendChild(modRow);
	atrTable.appendChild(valRow);
	atrTable.appendChild(statRow);
	return atrTable;
}

function getAtrTotal(atr){
	let asiMod = 0;
	for(let i of player.asi){
		if(i.stat === atr.name)
			asiMod += i.value;
	}
	return atr.base + atr.racial + asiMod + atr.misc;
}

function getAtrMod(atr){
	return ~~((getAtrTotal(atr) - 10) / 2)
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