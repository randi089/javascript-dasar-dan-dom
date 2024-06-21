const thumbnail = document.querySelector('.thumbnail');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

thumbnail.addEventListener('click', function(thumb) {

	// cek apakah yang di-klik adalah thumb
	if ( thumb.target.className == 'thumb' ) {
		jumbo.src = thumb.target.src;
		jumbo.classList.add('fade');
		setTimeout(function() {
			jumbo.classList.remove('fade');
		}, 500);

		thumbs.forEach(function(e) {
			// if (e.classList.containts('active')) {
			// 	e.classList.remove('active');
			// }
			e.className = 'thumb';
		});

		thumb.target.classList.add('active');
		thumb.preventDefault();
		thumb.stopPropagation();
	}
});