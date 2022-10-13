function changeHeadline(event) {
    event.preventDefault();

    let getTheHeadline = document.querySelector("h1");
    getTheHeadline.classList.add("colorRed");
}

function resetHeadline(event) {
    event.preventDefault();

    let getTheHeadline = document.querySelector("h1");
    getTheHeadline.classList.remove("colorRed");
}

function toggleColor(event) {
    event.preventDefault();

    let getTheHeadline = document.querySelector("h1").classList.toggle("colorRed");
}