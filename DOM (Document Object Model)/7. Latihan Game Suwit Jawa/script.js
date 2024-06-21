function getPilihanComputer() {
	const comp = Math.random();

	if (comp < 0.34) return 'gajah';
	if( comp >=0.34 && comp <0.67) return 'orang';
	return 'semut';
}

function getHasil(comp, player) {
	if ( player == comp) return 'Seri';
	if ( player == 'gajah') return ( comp	== 'orang') ? 'Menang' : 'Kalah';
	if ( player == 'orang') return ( comp	== 'gajah') ? 'Kalah' : 'Menang';
	if ( player == 'semut') return ( comp	== 'orang') ? 'Kalah' : 'Menang';
}
const iKomputer = document.querySelector('.img-komputer');
function putar() {
	const gambar = ['gajah', 'semut', 'orang'];
	i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function() {
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}
		iKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if (i == gambar.length) i=0;
	}, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
	pil.addEventListener('click', function() {
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);
		putar();

		setTimeout(function() {
		const info = document.querySelector('.info');
		info.innerHTML = hasil;
		iKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
		}, 1000);
	});
});

// const pGajah = document.querySelector('.gajah');
// const info = document.querySelector('.info');
// const iKomputer = document.querySelector('.img-komputer');
// pGajah.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pGajah.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	info.innerHTML = hasil;
// 	iKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
// });
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pOrang.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	info.innerHTML = hasil;
// 	iKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
// });
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pSemut.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	info.innerHTML = hasil;
// 	iKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
// });