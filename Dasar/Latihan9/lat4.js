var s = '';

for (var i = 1; i <= 10; i++) {
	if ( i %2 == 1) {
		s += '# # # # #';
	} else {
		s += ' # # # # #';
	}
	s += '\n'
}
console.log(s);