let app = document.querySelector('#app');

let number = 0;
while (number < 10) {
  app.innerHTML += `<div>Number: ${number}</div>`;
  number++;
}

for (let i = 0; i < 10; i++) {
  // console.log('for i: ' + i);
}

let poeNimekiri = [
  'piim',
  'sai',
  'leib',
  'munad',
  'vorstid',
  'banaan',
  'õunad',
  'patareid'
];

console.log('Poest on vaja ' + poeNimekiri[0]);
for (let i = 1; i < poeNimekiri.length; i++) {
  if (poeNimekiri[i] === 'leib') {
    console.log('ja ka ühe korraliku pätsi musta Eesti leiba');
  } else {
    console.log('ja ka ' + poeNimekiri[i]);
  }
}

let inimene1 = {
  nimi: 'mihkel',
  vanus: 10,
  kool: 'asdf',
  kasJaksabKükkeTeha: true,
  vanemad: ['peeter', 'oleg'],
}

let inimene2 = {
  nimi: 'kairi',
  vanus: 12,
  kool: 'llkj',
  kasJaksabKükkeTeha: true,
  vanemad: ['tuuli', 'oleg'],
}

let opilased = [inimene1, inimene2];
console.log(opilased);









/*
let kasNoustus = false;

while (kasNoustus === false) {
  let vastus = prompt('Sisesta parool:');

  if (vastus === 'mihkel') {
    kasNoustus = true;
  } else if (vastus === 'peeter' || vastus === 'kalev') {
    console.log('tere sõber!');
    kasNoustus = true;
  } else if (vastus === 'andres') {
    console.log('andresed ei ole lubatud');
  } else {
    console.log('vale parool!');
  }
}
*/

