function myAge(event) {
    event.preventDefault();
    let getInputValue = document.querySelector("input").value;

    let calculateAge = 2022 - getInputValue;
    document.querySelector("p").innerHTML = calculateAge;
}