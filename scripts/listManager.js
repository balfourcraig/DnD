function applyListFromURL(){
	const urlVars = getUrlVars();
	if(urlVars['list'] && window[urlVars['list']]){
		const list = window[urlVars['list']];
		populateList(list);
	}
	else{
		console.log('no list');
	}
}

function populateList(list){
	document.getElementById('pageHeader').innerHTML = list.name;
	const fullListEl = document.getElementById('fullList');
	for(let i of list.items){
		const li = document.createElement('li');
		li.innerHTML = i;
		fullListEl.appendChild(li);
	}
	document.getElementById('randomListEl').innerHTML = arrayRandom(list.items);
	document.getElementById('rollBtn').addEventListener('click', () => {
		document.getElementById('randomListEl').innerHTML = arrayRandom(list.items);
	});
}

window.addEventListener('DOMContentLoaded', () => {
	applyListFromURL();
});
