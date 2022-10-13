
function multiplication(event) {
    //Das Event braucht man jetzt nur um die Seite am Neuladen zu hindern
    event.preventDefault();

    // Holt den eingegebenen Wert vom Input-Element
    let valueInput = document.querySelector("input").value;
    let ValueInputDouble = valueInput * 2;
    console.log(ValueInputDouble);
    document.querySelector("p").innerHTML = ValueInputDouble;
}