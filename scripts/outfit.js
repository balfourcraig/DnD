window.addEventListener('DOMContentLoaded', () => {
	populateOutfit();
	document.getElementById('rollBtn').addEventListener('click', populateOutfit);
});

function populateOutfit(){
	const gender = Math.random() < 0.5 ? 'M' : 'F';
	document.getElementById('gender').innerText = gender;
	const list = randomNPCOutfitList(gender);
	const ul = document.getElementById('outfitList');
	ul.innerHTML = '';
	for(let i of list){
		const li = document.createElement('li');
		li.innerText = i;
		ul.appendChild(li);
	}
}