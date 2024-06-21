// Manipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "Randi";
// arr[1] = "Febriadi";
// arr[2] = "Badu";
// arr[6] = "Budi";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Randi", "Febriadi", "Badu"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Randi", "Febriadi", "Badu"];

// for (var i = 0; i < arr.length; i++) {
// 	console.log('Mahasiswa Ke-' + (i+1) + ' : ' + arr[i]);
// }

// Method pada array
// 1. join
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Budi', 'Nana');
// arr.pop();
// arr.pop();

// 3. unshift & shift
// arr.unshift('Budi');
// arr.shift();

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru1, ...)
// arr.splice(1, 2, 'Budi', 'Nana');

// 5. slice
// slice(awal, akhir);
// var arr = ['Randi', 'Febriadi', 'Badu', 'Budi', 'Nana'];
// var arr2 = arr.slice(1,4);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Randi', 'Febriadi', 'Badu'];
// for (var i = 0; i < angka.length; i++) {
// 	console.log(angka[i]);
// }

// angka.forEach(function (e) {
// 	console.log(e);
// });

// nama.forEach(function (e, i) {
// 	console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// });

// 7. map
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function (e) {
// 	return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. sort
// var angka = [1,2,10,5,20,3,6,8,4];
// angka.sort(function (a,b) {
// 	return a-b
// });
// console.log(angka.join(' - '));

// 9. filter & find
var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.find(function (x) {
	return x > 5;
})
console.log(angka2);