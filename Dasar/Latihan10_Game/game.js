var tanya = true;
while( tanya ){
	// menangkap pilihan player
	var p = prompt('Pilih : Gajah, Semut, Orang');

	// menangkap pilihan computer
	// membangkitkan bilangan random
	var comp = Math.random();

	if (comp < 0.34) {
		comp = 'gajah';
	} else if( comp >=0.34 && comp <0.67){
		comp = 'orang';
	} else {
		comp = 'semut';
	}

	var hasil = '';
	//menentukan rules
	if ( p == comp) {
		hasil = 'Seri';
	} else if ( p == 'gajah') {
		hasil = ( comp	== 'orang') ? 'Menang' : 'Kalah';
	} else if ( p == 'orang') {
		hasil = ( comp	== 'gajah') ? 'Kalah' : 'Menang';
	} else	if ( p == 'semut'){
		hasil = ( comp	== 'orang') ? 'Kalah' : 'Menang';
	} else {
		hasil = 'Memasukkan pilihan yang salah!!';
	}

	//tampilkan hasil
	alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);
tanya = confirm('Lagi ?');
}

alert('Terimakasih Sudah Bermain..');