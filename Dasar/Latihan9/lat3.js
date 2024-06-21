var s = '';

for (var a = 1; a <= 9; a++) {
	for (var d = 1; d <= 10-a; d++) {
	s += ' ';
	}
	for (var e = 1; e <= a; e++) {
	s += '*';
	}
	for (var b = 1; b <= a-1; b++) {
	s += '*';
	}
	s += '\n';
} console.log(s);