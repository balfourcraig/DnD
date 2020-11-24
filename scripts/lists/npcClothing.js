function randomNPCFootware(gender){
	if(gender === 'M' || Math.random() < 0.7)
		return arrayRandom(npcBoots.items);
	else
		return arrayRandom(npcBootsF.items);
}

function randomNPCPants(gender){
	if(gender === 'M' || Math.random() < 0.5)
		return arrayRandom(npcPants.items);
	else
		return arrayRandom(npcPantsF.items);
}

function randomNPCTop(gender){
	if(gender === 'M' || Math.random() < 0.8)
		return arrayRandom(npcTop.items);
	else
		return arrayRandom(npcTopF.items);
}

function randomNPCHair(gender){
	if(gender === 'M' || Math.random() < 0.2)
		return arrayRandom(npcHair.items);
	else
		return arrayRandom(npcHairF.items);
}

function randomNPCHeadgear(gender){
	if(gender === 'M' || Math.random() < 0.7)
		return arrayRandom(npcHeadgear.items);
	else
		return arrayRandom(npcHeadgearF.items);
}

function randomNPCFullLength(gender){
	if(gender === 'M' || Math.random() < 0.3)
		return arrayRandom(npcFullLength.items);
	else
		return arrayRandom(npcFullLength.items);
}

function randomNPCMiscClothing(gender){
	if(gender === 'M' || Math.random() < 0.5)
		return arrayRandom(npcMiscClothing.items);
	else
		return arrayRandom(npcMiscClothingF.items);
}

function randomNPCBackClothing(gender){
	return arrayRandom(npcBackClothing.items);
}

function randomNPCGloves(gender){
	return arrayRandom(npcGloves.items);
}

function randomNPCOutfitList(gender){
	let outfit = [];
	outfit.push(randomNPCHeadgear(gender));
	if(Math.random() < 0.2)
		outfit.push(randomNPCFullLength(gender));
	else{
		outfit.push(randomNPCTop(gender));
		outfit.push(randomNPCPants(gender));
	}
	if(Math.random() < 0.04)
		outfit.push(randomNPCGloves(gender));
	
	for(let i = 0; i < 3; i++){
		if(Math.random() < 0.1)
			outfit.push(randomNPCMiscClothing(gender));
	}
	if(Math.random() < 0.1)
		outfit.push(randomNPCBackClothing(gender));
	outfit.push(randomNPCFootware(gender));
	return outfit;
}

function randomNPCOutfit(gender){
	outfit = randomNPCOutfitList(gender);
	
	let outfitString = '';
	for(let i of outfit)
		outfitString += i + '\n';
	return outfitString.trim();
}

window.npcBoots = {
	name: 'Boots',
	items: [
		'High soft boots',
		'High hard boots',
		'Short soft boots',
		'Short hard boots',
		'Leather boots',
		'Studded boots',
		'Foot wraps',
		'Rope sandals',
		'Foot wraps',
		'Slippers',
		'Pointy shoes',
		'cloth sandals',
		'Barefoot',
		'Suede shoes',
		'Boots with spurs',
	]
}

window.npcBootsF = {
	name: 'Female Boots',
	items: [
		'knee high boots',
		'thigh high boots',
		'Heeled knee high boots',
		'Heeled thigh high boots',
		'Ballet flats',
		'Soft heeled boots',
		'Hard heeled boots',
	]
}

window.npcPants = {
	name: 'Pants',
	items: [
		'Leather pants',
		'Shiney leather pants',
		'Studded pants',
		'Shorts',
		'Breeches',
		'Cropped breeches',
		'Flared pants',
		'Ripped trousers',
		'Fine pants',
		'Tattered pants',
	]
}

window.npcPantsF = {
	name: 'Female Pants',
	items: [
		'Medium-length skirt',
		'Short skirt',
		'Ankle length skirt',
		'Tight leather pants',
		'Short shorts',
		'Flowing skirt',
		'Plain skirt',
		'Floral skirt',
	]
}

window.npcTop = {
	name: 'Tops',
	items: [
		'Shirt',
		'Traveller\'s shirt',
		'Fine shirt',
		'Tattered shirt',
		'Wool jumper',
		'Short-sleeved shirt',
		'shirt with coat',
	]
}

window.npcTopF = {
	name: 'Female Tops',
	items: [
		'Crop top',
		'Barmaid top',
		'Lace shirt',
		'Tavern wench top'
	]
}

window.npcHair = {
	name: 'Hair',
	items: [
		'bald',
		'Short hair',
		'Military cut hair',
		'Wavy mane',
		'Untamed mane',
	]
}

window.npcHairF = {
	name: 'Female Hair',
	items: [
		'Long wavy hair',
		'Short wavy hair',
		'Shoulder length wavy hair',
		'Long straight hair',
		'Short straight hair',
		'Shoulder length straight hair',
		'Long curly hair',
		'Short curly hair',
		'Shoulder length curly hair',
		'Wreath of flowers',
	]
}

window.npcHeadgear = {
	name: 'Headgear',
	items: [
		'Hood',
		'Cloth hat',
		'Farmer\'s cap',
		'Simple cap',
		'Wool hat',
		'Straw hat',
		'Feather cap',
	]
}

window.npcHeadgearF = {
	name: 'Female Headgear',
	items: [
		'Flower wreath',
	]
}

window.npcFullLength = {
	name: 'Full Length Clothes',
	items: [
		'Rough robe',
		'Ornate robe',
		'Robe',
		'Carnival costume',
		'Pyjamas',
		'Cold weather clothing',
		'Jerkin',
	]
}

window.npcFullLengthF = {
	name: 'Female Full Length Clothes',
	items: [
		'Dress',
		'Shawl',
		'Common gown',
		'Silk gown',
	]
}

window.npcBackClothing = {
	name: 'Back Clothing',
	items: [
		'Cloth backpack',
		'Leather backpack',
		'Leather bag',
		'Linen cloak',
		'Wool cloak',
		'Fur cloak',
		'Cloth cloak',
		'Linen cape',
		'Wool cape',
		'Fur cape',
		'Cloth cape',
		'Short linen cape',
		'Short wool cape',
		'Short fur cape',
		'Short cloth cape',
		'Great coat',
	]
}

window.npcMiscClothing = {
	name: 'MiscClothing',
	items: [
		'Eye patch',
		'Bronze amulet',
		'Silver amulet',
		'Gold amulet',
		'Jeweled amulet',
		'Bronze ring',
		'Silver ring',
		'Gold ring',
		'Jeweled ring',
		'Gold necklace',
		'Silver necklace',
		'Bronze necklace',
		'Earing',
		'Apron',
		'Belt',
		'Broad Girdle',
		'Girdle',
		'Scarf',
		'Large belt pouch',
		'Small belt pouch',
		'Purse',
	]
}

window.npcMiscClothingF = {
	name: 'Female MiscClothing',
	items: [
		'Flower behind ear',
	]
}

window.npcGloves = {
	name: 'Gloves',
	items: [
		'Cloth gloves',
		'Wool gloves',
		'Leather gloves',
		'Fingerless gloves',
	]
}