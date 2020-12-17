const houseDescriptions = [
	'large',
	'small',
	'crumbling',
	'stately',
	'squat',
	'tall',
	'tidy',
	'dirty',
	'faded',
	'fresh',
	'painted',
	'aged',
	'old',
	'overgrown',
	'moss-covered',
	'well kept',
	'detailed',
	'decorative',
];

const houseMaterials = [
	'brick',
	'wooden',
	'stone',
	'clay brick',
	'boarded',
	'tiled',
	'draughty',
	'red brick',
	'wood board',
	'mud brick',
	'adobe',
];

const houseTypes = [
	'house',
	'hovel',
	'shack',
	'home',
	'manor',
	'shed',
	'building',
	'apartment',
	'dwelling',
	'mansion',
	'cave',
	'shanty',
	'tent',
	'cabin',
	'cottage',
	'farm',
	'hut',
	'place',
	'shelter',
	'bungalow',
	'homestead',
	'lodge',
];

const houseSingleFeatures = [
	'roof',
	'garden',
	'porch',
	'veranda',
	'planter box',
	'entrance',
	'hall',
];

const houseMultipleFeatures = [
	'windows',
	'eves',
	'doors',
	'fittings',
];

const houseLife = [
	'smoke rising from the chimney',
	'lit windows',
];

function addArticle(s){
	return (isVowel(s) ? 'an ' : 'a ') + s;
}

function isVowel(s){
	if(s && s.length > 0){
		s = s.toUpperCase();
		return s[0] === 'A' || s[0] === 'E' || s[0] === 'I' || s[0] === 'O' || s[0] === 'U';
	}
	else
		return false;
}

function buildHouse(){
	let h = "";
	h += capitalize(addArticle(arrayRandom(houseDescriptions))) + ' ';
	if(Math.random() < 0.2){
		h += arrayRandom(houseMaterials) + ' ';
	}
	h += arrayRandom(houseTypes);
	const featureIndex = Math.random();
	if(featureIndex < 0.3){
		h += ' with ';
		let desc = arrayRandom(houseDescriptions);
		while(h.includes(desc))
			desc = arrayRandom(houseDescriptions);
		h += addArticle(desc) + ' ';
		h += arrayRandom(houseSingleFeatures);
	}
	else if(featureIndex < 0.6){
		h += ' with ';
		let desc = arrayRandom(houseDescriptions);
		while(h.includes(desc))
			desc = arrayRandom(houseDescriptions);
		h += desc + ' ';
		h += arrayRandom(houseMultipleFeatures);
	}
	else if(featureIndex < 0.75){
		h += ' with ';
		h += arrayRandom(houseLife);
	}
	return h + '.';
}