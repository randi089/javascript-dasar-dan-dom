var jmlAngkot = 10;
var	angkotBeroperasi = 6;

for (var angkot = 1; angkot <= jmlAngkot; angkot++) {
	if (angkot <=angkotBeroperasi) {
		console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
	}
	else if (angkot === 8) {
	console.log('Angkot No. ' + angkot + ' sedang lembur.');	
	}
	else{
	console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
	}
}