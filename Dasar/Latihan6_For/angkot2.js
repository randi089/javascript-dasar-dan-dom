var jmlAngkot = 10;
var	angkotBeroperasi = 6;
var angkot = 1;
while (angkot <=angkotBeroperasi) {
	console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
	angkot++;
}
for (angkot = angkotBeroperasi + 1; angkot <= jmlAngkot; angkot++) {
	console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
}