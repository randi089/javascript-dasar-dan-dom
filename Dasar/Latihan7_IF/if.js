for ( var i = true; i;)
 {
var angka = prompt('Masukkan Angka :');
if (angka %2 == 0) {
	alert (angka + ' adalah bilangan Genap.');
	i = confirm (' Ulangi ?');
}
else if (angka %2 == 1) {
	alert (angka + ' adalah bilangan Ganjil.');
	i = confirm ('Ulangi ?');}
else {
	alert ('Yang anda masukkan bukan angka..');
	i = confirm ('Ulangi ?');
}
}