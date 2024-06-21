var lagi = true;

while (lagi) {
	//komputer membangkitkan angka random
	var random = Math.floor(Math.random()*10)+1;

	//Pemain melakukan input (menebak)
	var p = prompt('Pilihlah angka antara 1-10!\n(Anda hanya memiliki tiga kali kesempatan)');

	//Alur permainan
	var hasil ='';
	for (var chance = 3; chance >= 1; chance--) {
		var kesem = chance-1;
		if (p == random) {
			hasil = 'Benar'
			alert('Angka tebakan Anda ' + hasil + '.');
			break;
		} else if (p != random && chance > 1) {
			hasil = p < random ? 'terlalu Rendah' : 'terlalu Tinggi';
			p = prompt('Angka tebakan Anda ' + hasil + '.\nKesempatan tersisa ' + kesem + 'x Coba tebak lagi..');}
			else if (p != random && chance == 1) {
				hasil = 'Salah';
				alert('Angka tebakan anda ' + hasil + '.\nKesempatan anda sudah habis.');
			} 
	}

lagi = confirm('Main Lagi ?');
}
alert('Terimakasih sudah bermain..');