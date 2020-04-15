// SIMON Says
// Un alert espone 5 numeri casuali (univoci).
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
// Assicuratevi di saper fare correttamente l’ esercizio con output base (alert() , prompt() , console.log() )

var difficolta = parseInt( prompt('Con quanti numeri vuoi giocare?').trim());

for (var i = 0; i < 1; i++) {
  if (isNaN(difficolta)) {
    difficolta = parseInt( prompt('Devi inserire un numero').trim());
    i--;
  }
}

var numeriCasuali = [];

for (var i = 0; i < difficolta; i++) {
  var numRandom = Math.floor( Math.random() * 100) + 1;
    if (numeriCasuali.includes(numRandom)) {
    i--;
    } else {
    numeriCasuali.push(numRandom);
    }
}

var seconds = 30;

var display = document.getElementById('timer');

var timerDisplay = setInterval(function() {

  display.innerHTML = seconds;

  if (seconds == 0) {
    clearInterval(timerDisplay)
  } else {
    seconds--;
  }

}, 1000);

alert('Numeri da ricordare: ' + numeriCasuali);

setTimeout(timer, 30000);

function timer() {
  var arrayNum = [];
  var score = 0;
  for (var i = 0; i < difficolta; i++) {
    var numeriGioco = parseInt ( prompt('Simon dice di riscrivere i numeri che hai visto').trim());
      if (numeriCasuali.includes(numeriGioco)) {
        arrayNum.push(numeriGioco);
        score++;
        alert('Corretto!');
      } else {
        alert('Sbagliato!');
      }
  }
  alert('Hai indovinato: ' + arrayNum + ' per un punteggio di ' + score);
  console.log('Hai indovinato: ' + arrayNum + ' per un punteggio di ' + score);
}
