var s = '';

for (var i = 1; i <= 9; i++) {
	for (var c = 1; c <= i; c++) {
	s += '*';
	}
	s += '\n';
}
for (var z = 10; z >= 1; z--) {
	for (var b = 1; b <= z; b++) {
	s += '*';
	}
	s += '\n';
}
 console.log(s);
