const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
	// document.body.style.backgroundColor = 'red';
	// document.body.setAttribute('class', 'biru-muda');
	document.body.classList.toggle('biru-muda');
};

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

const lMerah = document.querySelector('div.merah label');
const lHijau = document.querySelector('div.hijau label');
const lBiru = document.querySelector('div.biru label');

sMerah.addEventListener('input', function() {
	const r = sMerah.value;
	document.body.style.backgroundColor = 'rgb(' + r + ', 0, 0)';
	lMerah.innerHTML = r;
});
sHijau.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ', 0)';
	lHijau.innerHTML = g;
});
sBiru.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	lBiru.innerHTML = b;
});

document.body.addEventListener('mousemove', function(event) {
	// posisi mouse
	// console.log(event.clientX);
	// ukuran browser
	// console.log(window.innerWidth);
	const xPos = Math.round((event.clientX / window.innerWidth)*255);
	const yPos = Math.round((event.clientY / window.innerHeight)*255);
	console.log(yPos);
	document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ', 100)';
});

// document.body.addEventListener('mousemove', function() {
// 	const r = Math.round(Math.random() * 255 + 1);
// 	const g = Math.round(Math.random() * 255 + 1);
// 	const b = Math.round(Math.random() * 255 + 1);
// 	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });