function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";
    console.log(personName + sport);
    }
}

canPlay();

/* l'esercizio restituiva un errore in console perchè la variabile personName, essendo
dichiarata con "let", presente all'interno dello scope "block scope" di IF, non veniva 
riconosciuta al di fuori del suo blocco di appartenenza, necessitiamo di due opzioni
differenti per risolvere il problema, implementare la variabile "var", per poter richiamare
globalmente il valore di personName, oppure possiamo inserire il console.log direttamente
all'interno del block scope, completando così la funzione da richiamare poi successivamente
nel programma.
*/

