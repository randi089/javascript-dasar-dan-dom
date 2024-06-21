// DOM Manipulation
// Memasukkan menggunakan appendChild
// buat elemen baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// Memasukkan menggunakan insertBefore
const liBaru = document.createElement('li');
const teksliBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksliBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-Child(2)');

ul.insertBefore(liBaru, li2);

// Contoh removeChild
// const link = document.getElementsByTagName('a')[0];

// sectionA.removeChild(link);

// Contoh replaceChild
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);


pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';