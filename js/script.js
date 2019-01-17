var bigbutton = document.querySelector (".main-button");
var modalwindow = document.querySelector (".main-hotelsearch-form");

if (bigbutton) {
    modalwindow.classList.add ("close-modalwindow")
}

bigbutton.addEventListener ("click", function (evt) {
    evt.preventDefault();
    modalwindow.classList.toggle ("show-modalwindow");
    modalwindow.classList.toggle ("close-modalwindow");
});