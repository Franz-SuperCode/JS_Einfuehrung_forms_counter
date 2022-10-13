function addOne(event) {
    event.preventDefault();

    //hole das innere HTML vom <p>
    let getCounter = document.querySelector(".counter__result").innerHTML;
    //Das innere wird in eine Zahl umgewandelt
    let zahl = parseInt(getCounter);

    //zahl ist gleich zahl +1
    zahl += 1;
    console.log(zahl);
    //Hol das innere vom <p> und setze dort die Variable "zahl" ein
    document.querySelector(".counter__result").innerHTML = zahl;
}


function reduceOne(event) {
    event.preventDefault();

    let getCounter = document.querySelector(".counter__result").innerHTML;
    let zahl = parseInt(getCounter);
    zahl -= 1;
    console.log(zahl);
    document.querySelector(".counter__result").innerHTML = zahl;
}


function addTen(event) {
    event.preventDefault();

    let getCounter = document.querySelector(".counter__result").innerHTML;
    let zahl = parseInt(getCounter);
    zahl = zahl + 10;
    console.log(zahl);
    document.querySelector(".counter__result").innerHTML = zahl;
}

function reduceTen(event) {
    event.preventDefault();

    let getCounter = document.querySelector(".counter__result").innerHTML;
    let zahl = parseInt(getCounter);
    zahl = zahl - 10;
    console.log(zahl);
    document.querySelector(".counter__result").innerHTML = zahl;
}


function addHundred(event) {
    event.preventDefault();

    let getCounter = document.querySelector(".counter__result").innerHTML;
    let zahl = parseInt(getCounter);
    zahl = zahl + 100;
    console.log(zahl);
    document.querySelector(".counter__result").innerHTML = zahl;
}


function reduceHundred(event) {
    event.preventDefault();

    let getCounter = document.querySelector(".counter__result").innerHTML;
    let zahl = parseInt(getCounter);
    zahl = zahl - 100;
    console.log(zahl);
    document.querySelector(".counter__result").innerHTML = zahl;
}


function reset(event) {
    event.preventDefault();

    let getCounter = document.querySelector(".counter__result").innerHTML;
    let zahl = parseInt(getCounter);
    zahl = 0;
    console.log(zahl);
    document.querySelector(".counter__result").innerHTML = zahl;
}


function multiTwo(event) {
    event.preventDefault();

    let getCounter = document.querySelector(".counter__result").innerHTML;
    let zahl = parseInt(getCounter);
    zahl = zahl * 2;
    console.log(zahl);
    document.querySelector(".counter__result").innerHTML = zahl;
}