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
}

for (var i = 10; i >= 1; i--) {
	for (var c = 9; c >= 0+i; c--) {
	s += ' ';
	}
	for (var z = 1; z <= i; z++) {
	s += '*';
	}
	for (var b = 1; b <= i-1; b++) {
	s += '*';
	}
	s += '\n';
}
 console.log(s);