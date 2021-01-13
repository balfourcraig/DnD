function createRaceHolder(title, description, traits){
	const holder = document.createElement('div');
	const titleEl = document.createElement('h3');
	titleEl.innerHTML = title;
	const descEl = document.createElement('p');
	descEl.innerHTML = description;
	const traitsTitle = document.createElement('h4');
	traitsTitle.innerText = 'Racial Traits';
	const traitsEl = document.createElement('p');
	traitsEl.innerHTML = traits;
	holder.appendChild(titleEl);
	holder.appendChild(descEl);
	holder.appendChild(traitsTitle);
	holder.appendChild(traitsEl);
	holder.appendChild(document.createElement('hr'));
	return holder;
}