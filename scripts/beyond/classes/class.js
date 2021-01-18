function createClassHolder(title){
	const holder = document.createElement('div');

	holder.appendChild(element('h3', title));

	holder.appendChild(document.createElement('hr'));
	return holder;
}