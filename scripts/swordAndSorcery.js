function generateSnSStory(){
	document.getElementById('SnSTitle').innerText = buildSnSTitle();
	document.getElementById('missionBlock').innerText = 'Mission: ' + buildSnSMission();
	document.getElementById('hookBlock').innerText = 'Hook: ' + arrayRandom(snSHook);
	document.getElementById('antagonistBlock').innerText = 'Antagonist: ' + arrayRandom(snSAntagonist);
	document.getElementById('potentialAllyBlock').innerText = 'Potential Ally: ' + arrayRandom(snSPotentialAlly);
	document.getElementById('complicationBlock').innerText = 'Complication: ' + arrayRandom(snSComplication);
	document.getElementById('obstacleBlock').innerText = 'Obstacle: ' + arrayRandom(snSObstacle);
	document.getElementById('twistBlock').innerText = 'Twist: ' + arrayRandom(snSTwist);
	document.getElementById('rewardBlock').innerText = 'Reward: ' + arrayRandom(snSReward);
}

function buildSnSTitle(){
	const p1 = arrayRandom(snSTitle1.items);
	const p2 = arrayRandom(snSTitle2.items);
	return p1 + ' of ' + p2;
}

function buildSnSMission(){
	const m = arrayRandom(snSMission);
	const mText = m.mission + ' the ';
	if(m.targetType === 'person'){
		return mText + arrayRandom(snSPerson);
	}
	else if(m.targetType === 'place'){
		return mText + arrayRandom(snSPlace);
	}
	else if(m.targetType === 'thing'){
		return mText + arrayRandom(snSThing);
	}
	return mText;
}

window.addEventListener('DOMContentLoaded', () => {
	generateSnSStory();
});