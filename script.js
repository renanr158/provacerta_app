let popup = document.getElementById("popup");
let popup2 = document.getElementById("popup2");
let backgroundblack = document.getElementById("backgroundblack");
let backgroundblack2 = document.getElementById("backgroundblack2");

function openPopup() {
    popup.classList.add("open-popup");
    backgroundblack.style.visibility = "visible";
}

function closePopup() {
    popup.classList.remove("open-popup");
    backgroundblack.style.visibility = "hidden"; 
}

function openPopup2() {
    popup2.classList.add("open-popup2");
    backgroundblack2.style.visibility = "visible"; 
}

function closePopup2() {
    popup2.classList.remove("open-popup2");
     backgroundblack2.style.visibility = "hidden"; 
}

