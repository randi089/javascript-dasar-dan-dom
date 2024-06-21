var jmlAngkot = 10;
var	angkotBeroperasi = 6;

for (var angkot = 1; angkot <= jmlAngkot; angkot++) {
	if (angkot <=angkotBeroperasi && angkot !== 5) {
		console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
	}
	else if (angkot === 8 || angkot === 10 || angkot === 5) {
	console.log('Angkot No. ' + angkot + ' sedang lembur.');	
	}
	else{
	console.log('Angkot No. ' + angkot + ' sedang tidak dapat beroperasi.');
	}
}