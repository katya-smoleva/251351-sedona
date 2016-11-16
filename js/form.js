var link = document.querySelector(".panel");
var popup = document.querySelector(".form");
var form = popup.querySelector("form");
var dateinput = popup.querySelector("[name=date-input]");
var dateout = popup.querySelector("[name=date-out]");
var adults = popup.querySelector("[name=adults-number]");
var children = popup.querySelector("[name=children-number]");
var storage = localStorage.getItem("adults");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("form-show");
});

if (storage) {
    adults.value = storage;
    children.focus();
} else {
    adults.focus();
}

form.addEventListener("submit", function(event) {
    if (!dateinput.value || !dateout.value || !adults.value || !children.value) {
        event.preventDefault();
        console.log("Нужно ввести даты заезда и выезда и количество человек");
    } else {
        localStorage.setItem("adults", adults.value);
    }
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("form-show")) {
            popup.classList.remove("form-show");
        }
    }
});