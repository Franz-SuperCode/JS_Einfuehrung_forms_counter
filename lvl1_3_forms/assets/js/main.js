function differenz(event) {
    event.preventDefault();

    let alter1 = document.querySelectorAll("input")[0].value;
    let alter2 = document.querySelectorAll("input")[1].value;
    console.log(alter1);
    console.log(alter2);
    let calculate = alter1 - alter2;
    document.querySelectorAll("p")[1].innerHTML = calculate;
}