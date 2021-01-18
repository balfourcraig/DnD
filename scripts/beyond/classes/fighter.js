const armorProficiencies = ['Light Armor', 'Medium Armor', 'Heavy Armor', 'Shields'];
const weaponProficiencies = ['Simple Weapons', 'Martial Weapons'];
const fighterSkills = ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'];

function buildFighter(player){
	const title = 'Fighter';
	holder = createClassHolder(title);
	
	let armor = 'Armour Proficient in: ';
	for(let a of armorProficiencies){
		player.armorProficiencies.push({id: 'class', tag: 'class', value: a});
		armor += a + ',';
	}
	holder.appendChild(element('p', armor));
	
	let weapons = 'Weapons proficient in: ';
	for(let a of weaponProficiencies){
		player.weaponProficiencies.push({id: 'class', tag: 'class', value: a});
		weapons += a + ',';
	}
	holder.appendChild(element('p', weapons));
	
	holder.appendChild(skillSelectorLimited(player, 2, 'class', fighterSkills));
	
	return holder;
}