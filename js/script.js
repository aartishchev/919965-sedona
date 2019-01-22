var bigbutton = document.querySelector (".main-button");
var modalwindow = document.querySelector (".main-hotelsearch-form");
var form = document.querySelector (".main-hotelsearch-form");
var datetocome = document.querySelector ("[name=datearrival");
var datetoleave = document.querySelector ("[name=datedeparture");
var adults = document.querySelector ("[name=adultsnumber");


if (bigbutton) {
    modalwindow.classList.add ("close-modalwindow")
}

bigbutton.addEventListener ("click", function (evt) {
    evt.preventDefault();
    modalwindow.classList.toggle ("show-modalwindow");
    modalwindow.classList.toggle ("close-modalwindow")
    form.classList.remove ("error-modalwindow");
});

form.addEventListener ("submit", function (evt) {
    /* evt.preventDefault(); */
    if (!datetocome.value || !datetoleave.value || !adults.value) {
        evt.preventDefault();
        form.classList.add ("error-modalwindow");
      }
});

