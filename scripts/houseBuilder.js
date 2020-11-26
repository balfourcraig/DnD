window.addEventListener('DOMContentLoaded', () => {
	buildBuilding();
	document.getElementById('rollBtn').addEventListener('click', buildBuilding);
});

function buildBuilding(){
	container = document.getElementById('randomListEl');
	container.innerHTML = '';
	container.appendChild(buildHouse());
}

function buildHouse(){
	const holder = document.createElement('div');
	const houseLevels = Math.max(1, ~~(Math.random() * 2 + 0.5));
	
}