// DOM Selection
// document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.fontStyle = 'italic';
// judul.style.backgroundColor = '#CCC';
// judul.innerHTML = 'Randi Febriadi';

// document.getElementsByTagName() -> HTMLCollections
// const h1 = document.getElementsByTagName('h1')[0];
// const p = document.getElementsByTagName('p');

// h1.style.fontSize = '50px';
// for(let i = 0; i < p.length; i++){
// 	p[i].style.backgroundColor = 'lightblue';
// }

// document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini diubah dari javascript';

// document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';
// li2.innerHTML = 'Baru';

// document.querySelectorAll()
const p = document.querySelectorAll('p');
for (let i=0; i<p.length; i++){
p[i].style.backgroundColor = 'red';
}

// const p4 = document.getElementsByTagName('p')[3];
// p4.style.backgroundColor = 'red';

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.innerHTML = 'hahahaha';