// membuat Object
// var mhs = {
// 	nama : "Randi Febriadi",
// 	umur : 24,
// 	ips : [3.00, 2.50, 3.20],
// 	alamat : {
// 		jalan : "Jl. abc No. 123",
// 		kota : "Pariaman",
// 		provinsi : "Sumatera Barat"
// 	}
// };


// Object Literal
// var mhs1 = {
// 	nama : 'Randi Febriadi',
// 	nobp : 18101152620064,
// 	email : 'randifebriadi@gmail.com',
// 	jurusan : 'Sistem Komputer'
// };
// var mhs2 = {
// 	nama : 'Muhammad Fauzan',
// 	nobp : 18101152620060,
// 	email : 'muhammadfauzan@gmail.com',
// 	jurusan : 'Sistem Informasi'
// };


// Function Declaration
// function buatObjectMahasiswa(nama, nobp, email, jurusan) {
// 	var mhs = {};
// 	mhs.nama = nama;
// 	mhs.nobp = nobp;
// 	mhs.email = email;
// 	mhs.jurusan = jurusan;
// 	return mhs;
// }

// var mhs3 = buatObjectMahasiswa('Khairul Fatwa', '18101152620054', 'khairulfatwa@gmail.com', 'Teknik Informatika');


// // Constructor
// function Mahasiswa(nama, nobp, email, jurusan) {
// 	// var this = {};
// 	this.nama = nama;
// 	this.nobp = nobp;
// 	this.email = email;
// 	this.jurusan = jurusan;
// 	// return this
// }

// var mhs4 = new Mahasiswa('Tito Yanul Fikri', '18101152620070', 'titoyanulfikri@gmail.com', 'Manajemen Informatika');


//This = window
// var a = 10;
// console.log(this.a);

//Cara 1 this dengan function declaration
// function halo() {
// 	console.log(this);
// 	console.log('halo');
// }
// this.halo();
// this mengembalikan object Global

// Cara 2 this dengan object literal
// var obj = {a : 10, nama : 'Randi'};
// obj.halo = function () {
// 	console.log(this);
// 	console.log('halo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// Cara 3 this dengan constructor
function Halo() {
	console.log(this);
	console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat