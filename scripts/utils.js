const golden_ratio= 1.618033988749895;
const goldenAngleRad = 2.39996322972865332;

let randh = Math.random();

function arrayRandom(arr){
	return arr[Math.floor(Math.random() * arr.length)];
}

function removeFromArray(arr, item){
	let index = arr.indexOf(item);
	if(index !== -1)
		arr.splice(index, 1);
}

function round(num){
	return ~~(num + 0.5);
}

function nextGoldenRand(){
	randh += golden_ratio;
	randh %= 1;
	return randh;
}

function sumOffsets(el) {
    let sum = 0;
    while (el) {
        sum += el.offsetTop;
        el = el.offsetParent;
    }
    return sum;
}

function smoothMin(dstA, dstB, k){
	const h = Math.max(k - Math.abs(dstA-dstB), 0) / k;
	return Math.min(dstA, dstB) - h*h*h*k*1/6.0;//wut
}

function bias(x, biasAmount){
	const k = Math.pow(1-biasAmount, 3);
	return (x * k) / (x * k - x + 1);
}

function clamp(val, min, max){
	return Math.max(min, Math.min(val, max));
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function stringHash(s, seed){
	const phi = 0.618033988749895;
	let hash = seed / phi;
	for (let i = s.length - 1; i >= 0; i--) {
		hash += phi * (phi / (i + 1)) * s.charCodeAt(i);
	}
	return hash % 1;
}

function radToDeg(rad){
	return rad * (180 / Math.PI);
}

function cosineInterpolate(start, end, position){
	const mapped = 0.5 * (-Math.cos(Math.PI * position)) + 0.5;
	return (mapped * (end - start)) + start;
}

function nextGoldenColor(sat, light){
	const num = nextGoldenRand();
	return 'hsl(' + (num * 360) + ', ' + sat + '%, ' + light + '%)';
}

function roundToPrecision(val, precision){
	const multiplier = Math.pow(10, precision || 0);
	return Math.round(val * multiplier) / multiplier;
}

function shuffleInplace(arr){
	let n = arr.length;
	while(n > 0){
		const r = Math.floor(Math.random() * n);
		const temp = arr[r];
		arr[r] = arr[n-1];
		arr[n-1] = temp;
		n--;
	}
}

function randomColor() {
	var letters = '0123456789ABC';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * letters.length)];
	}
	return color;
}

function pointReflect(origin, point, multiplier){
	const xDiff = origin.x - point.x;
	const yDiff = origin.y - point.y;

	const x = origin.x + xDiff * multiplier;
	const y = origin.y + yDiff * multiplier;
	return {x:x, y:y};
}

function pointByAngle(center, radius, angle){
	const x = Math.sin(angle) * radius + center.x;
	const y = Math.cos(angle) * radius + center.y;
	return {x:x, y:y};
}

function pointOnCircle(center, radius, totalPoints, pointNum){
	const angle = pointNum / totalPoints * Math.PI * 2;
	const x = Math.sin(angle) * radius + center.x;
	const y = Math.cos(angle) * radius + center.y;
	return {x:x, y:y};
}

function distance(p1, p2){
	const xDiff = p1.x - p2.x;
	const yDiff = p1.y - p2.y;
	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

function midpoint(p1, p2){
	const x = (p1.x + p2.x) / 2;
	const y = (p1.y + p2.y) / 2;
	return {x:x, y:y};
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function boundedRandom(min, max) {
	//min = Math.ceil(min);
	//max = Math.floor(max);
	let num = (Math.random() * (max - min)) + min;
	return num;
}

function subdivideLine(p1, p2, totalSegments, seg){
	const xDiff = p2.x - p1.x;
	const yDiff = p2.y - p1.y;
	
	const ratio = (1/totalSegments) * seg;
	
	const x = xDiff * ratio + p1.x;
	const y = yDiff * ratio + p1.y;
	
	return {x:x, y:y};
}

function gcd(a, b){
	if(b == 0)
		return a;
	else
		return gcd(b, a % b);
}

function mapLinear(val, fromStart, fromEnd, toStart, toEnd){
	let fromDiff = fromEnd - fromStart;
	let toDiff = toEnd - toStart;

	let mapped = val - fromStart;
	mapped = mapped / fromDiff * toDiff;
	mapped += toStart;

	return mapped;
}

function MapPointSpace(point, xFromStart, xFromEnd, xToStart, xToEnd, yFromStart, yFromEnd, yToStart, yToEnd){
	return {
		x: mapLinear(point.x, xFromStart, xFromEnd, xToStart, xToEnd),
		y: mapLinear(point.y, yFromStart, yFromEnd, yToStart, yToEnd),
	};
}

function capitalize(s){
	return s[0] + s.toLowerCase().substring(1);
}

function fullMod(lhs, rhs) {
	const r = lhs % rhs;
	return r < 0 ? r + rhs : r;
}