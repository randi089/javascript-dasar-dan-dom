var penumpang = ['randi', undefined, 'febriadi'];
var lagi = true;
while (lagi) {
var namaPenumpang = prompt('Silahkan masukkan nama penumpang :');
var tambahPenumpang = function (namaPenumpang, penumpang) {
	// jika angkot kosong
	if (penumpang.length == 0) {
		// tambahkan penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array & keluar dari function
		return penumpang;
	} else {
		// telusuri seluruh kursi dari awal
		for(var i = 0; i < penumpang.length; i++){
			// jika ada kursi kosong
			if (penumpang[i] == undefined) {
				// tambah penumpang di kursi tersebut
				penumpang[i] = namaPenumpang;
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			// jika sudah ada nama yang sama
			else if (penumpang[i] == namaPenumpang){
				// tampilkan pesan kesalahannya
				var pesan = namaPenumpang + ' sudah ada di dalam angkot!';
				// kembalikan isi array & keluar dari function
				return pesan;
			}
			// jika seluruh kursi terisi 
			else if(i == penumpang.length - 1) {
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}
}
alert(tambahPenumpang(namaPenumpang, penumpang));
lagi = confirm('Ada penumpang lagi ?');
}
alert('Terimakasih sudah menggunakan aplikasi ini..');