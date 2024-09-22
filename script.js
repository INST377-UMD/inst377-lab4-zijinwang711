function alertMe() {
    var name = document.getElementById("name").value;
    if (name) {
        alert("Hi " + name + "!");
    }
}


let isBlue = true;

function changeColor() {
    if (isBlue) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "blue";
    }
    isBlue = !isBlue;
}

function validateText() {
    var text = document.getElementById("text-input").value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?]+/;
    if (validation.test(text)) {
        alert("Text contains special characters!");
    } else {
        alert("Text is valid!");
    }
}

function addText() {
    var heading = document.getElementById("page-heading");
    heading.textContent += " Add Text";
}