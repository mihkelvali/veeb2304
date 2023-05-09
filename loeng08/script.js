setTimeout(function() {
  document.querySelector('#mingiDiv').innerHTML = 'tere tere';
  document.querySelector('#mingiDiv').style.background = 'peachpuff';
  document.querySelector('#mingiDiv').style.color = 'seagreen';
  document.querySelector('#mingiDiv').style.fontWeight = 900;
}, 1000);

document.querySelector('#kirjutaLogisse').addEventListener('click', kirjutaLogisse);

window.addEventListener('resize', function () {
  document.querySelector('#aknaSuurus').innerHTML = `
    Akna laius: ${window.innerWidth}
    Akna kõrgus: ${window.innerHeight}
  `
});

function generateRandom(min, max) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
}

function muudaVarvi() {
  let red = generateRandom(0, 255);
  let green = generateRandom(0, 255);
  let blue = generateRandom(0, 255);
  console.log('rgb(' + red + ',' + green + ',' + blue + ')');
  document.querySelector('#mingiDiv').style.background = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function kirjutaLogisse() {
  let sisendiVaartus = document.querySelector('#sisend').value;
  console.log(sisendiVaartus);
}
