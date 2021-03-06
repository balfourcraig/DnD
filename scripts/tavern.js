function setup(){
	const fullListEl = document.getElementById('fullList');
	for(let i = 0; i < Math.min(tavern1.length, tavern2.length); i++){
		const row = document.createElement('tr');
		const num = document.createElement('td');
		num.innerText = i;
		const t1 = document.createElement('td');
		t1.innerText = tavern1[i];
		const t2 = document.createElement('td');
		t2.innerText = tavern2[i];
		row.appendChild(num);
		row.appendChild(t1);
		row.appendChild(t2);
		fullListEl.appendChild(row);
	}
	
	const el = document.getElementById('randomListEl');
	el.innerHTML = randomTavernName();
	el.setAttribute('class', 'signpost ' + arrayRandom(signStyles) + ' ' + arrayRandom(signColors));
	document.getElementById('rollBtn').addEventListener('click', () => {
		el.innerHTML = randomTavernName();
		el.setAttribute('class', 'signpost ' + arrayRandom(signStyles) + ' ' + arrayRandom(signColors));
	});
}

function randomTavernName(){
	return 'The ' + arrayRandom(tavern1) + ' ' + arrayRandom(tavern2);
}

window.addEventListener('DOMContentLoaded', () => {
	setup();
});

const signStyles = [
	'signFont01',
	'signFont02',
	'signFont03',
	'signFont04',
	'signFont05',
	'signFont06',
];

const signColors = [
	'signColor01',
	'signColor02',
	'signColor03',
	'signColor04',
	'signColor05',
];

const tavern1 = [
	'Stout',
	'Bloody',
	'Slow',
	'Dull',
	'Soaked',
	'Drunken',
	'Crooked',
	'Dark',
	'Fabulous',
	'Noble',
	'Soft',
	'Red',
	'Green',
	'White',
	'Black',
	'Yellow',
	'Blue',
	'Burning',
	'Broken',
	'Shattered',
	'Mighty',
	'Strong',
	'Lonely',
	'Poor',
	'Old',
	'Generous',
	'Lanky',
	'Hapless',
	'Tall',
	'Remarkable',
	'Frugal',
	'Prudent',
	'Foul',
	'Evil',
	'Good',
	'Rotten',
	'Shining',
	'Fragile',
	'Hungry',
	'Tired',
	'Patient',
	'Merciful',
	'Immortal',
	'Faithful',
	'Friendly',
	'Forlorn',
	'Adoring',
	'Brittle',
	'Floating',
	'Sharp',
	'Worn',
	'Cursed',
	'Beautiful',
	'Beloved',
	'Quiet',
	'Happy',
	'Courageous',
	'Wounded',
	'Blind',
	'Clairvoyant',
	'Blushing',
	'Calm',
	'Wary',
	'Cheerful',
	'Wise',
	'Clumsy',
	'Boorish',
	'Boastful',
	'Sly',
	'Daring',
	'Rebellious',
	'Diligent',
	'Disguised',
	'Ominous',
	'Determined',
	'Reliable',
	'Loyal',
	'Raging',
	'Excited',
	'Shy',
	'Magical',
	'Trecherous',
	'False',
	'Foolhardy',
	'Golden',
	'Frozen',
	'Gracious',
	'Hairy',
	'Hidden',
	'Hoarse',
	'Honest',
	'Humble',
	'Limping',
	'Lively',
	'Lucky',
	'Lean',
	'Nefarious',
	'Ogling',
	'Subtle',
	'Crazy',
];

const tavern2 = [
	'Rooster',
	'Raven',
	'Crow',
	'Toad',
	'Hound',
	'Fox',
	'Bull',
	'Boar',
	'Clam',
	'Hawk',
	'Eagle',
	'Mouse',
	'Rat',
	'Frog',
	'Elk',
	'Cat',
	'Guardian',
	'Hunter',
	'Barbarian',
	'Witch',
	'Troll',
	'Sword',
	'Shield',
	'Bow',
	'Dagger',
	'Hammer',
	'Helm',
	'Acrobat',
	'Lion',
	'Ghoul',
	'Druid',
	'Master',
	'King',
	'Queen',
	'Prince',
	'Princess',
	'Shrub',
	'Tree',
	'Bear',
	'Smile',
	'Eye',
	'Tongue',
	'Flounder',
	'Whale',
	'Man',
	'Woman',
	'Steer',
	'Stallion',
	'Mare',
	'Wish',
	'Hoof',
	'Goat',
	'Tower',
	'Fist',
	'Monk',
	'Sleep',
	'Fool',
	'Knight',
	'Lady',
	'Sir',
	'Poet',
	'Nightingale',
	'Thrush',
	'Diamond',
	'Ruby',
	'Emerald',
	'Lute',
	'Drum',
	'Flute',
	'Worker',
	'Farmer',
	'Songbird',
	'Mother',
	'Father',
	'Sister',
	'Brother',
	'Protector',
	'Soldier',
	'Sailor',
	'Guest',
	'Brewer',
	'Hornet',
	'Donkey',
	'Hare',
	'Twig',
	'Barrel',
	'Wyrm',
	'Warlock',
	'Thief',
	'Boot',
	'Fang',
	'Skull',
	'Tankard',
	'Rogue',
	'Cannoneer',
	'Cricket',
	'Snail',
	'Beetle',
	'Axe',
	'Quartermaster',
];