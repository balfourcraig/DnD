let player = createBlankPlayer();
let raceBuilder = emptyFunc;
let classBuilder = emptyFunc;

const races = [
	{name: 'None', builder: emptyFunc},
	{name: 'Varient Human', builder: buildVarientHuman},
];

const classes = [
	{name: 'None', builder: emptyFunc},
	{name: 'Fighter', builder: buildFighter},
];

window.addEventListener('DOMContentLoaded', () => {
	setup();
});


function setup(){
	const raceSelect = document.getElementById('raceSelect');
	for(let i = 0; i < races.length; i++){
		const r = races[i];
		const op = element('option', r.name);
		op.value = i;
		raceSelect.appendChild(op);
	}
	raceSelect.addEventListener('change', () => {
		resetByTag(player, 'race');
		const index = parseInt(raceSelect.value);
		raceArea = document.getElementById('raceArea');
		raceArea.innerHTML = '';
		if(index !== null && index >= 1){
			raceBuilder = races[index].builder;
			if(raceBuilder != null){
				raceArea.appendChild(raceBuilder(player));
			}
		}
	});
	
	const classSelect = document.getElementById('classSelect');
	for(let i = 0; i < classes.length; i++){
		const r = classes[i];
		const op = element('option', r.name);
		op.value = i;
		classSelect.appendChild(op);
	}
	classSelect.addEventListener('change', () => {
		resetByTag(player, 'class');
		const index = parseInt(classSelect.value);
		classArea = document.getElementById('classArea');
		classArea.innerHTML = '';
		if(index !== null && index >= 1){
			classBuilder = classes[index].builder;
			if(classBuilder != null){
				classArea.appendChild(classBuilder(player));
			}
		}
	});
	
	const levelSelect = document.getElementById('levelSelect');
	for(let i = 1; i <= 20; i++){
		const o = element('option', i);
		o.value = i;
		levelSelect.appendChild(o);
	}
	levelSelect.addEventListener('change', () => {
		player.level = levelSelect.value;
		updateSheet();
	});
	updateSheet();
}

function updateSheet(){
	saveToLocalStorage();
}

function saveToLocalStorage() {
    if (typeof (Storage) === "undefined") 
        console.warn('Browser does not support Web Storage. Not saved');
    else {
		localStorage.savedPlayer = JSON.stringify(player);
    }
}

