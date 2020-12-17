window.addEventListener('DOMContentLoaded', () => {
	buildBuilding();
	document.getElementById('rollBtn').addEventListener('click', buildBuilding);
});

function buildBuilding(){
	container = document.getElementById('randomListEl');
	container.innerText = buildHouse();
}

