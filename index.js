let form = document.querySelector("form");

let name = document.getElementById('name');
let email = document.getElementById('email');
let female = document.getElementById('female');
let number = document.getElementById('number');
form.addEventListener('submit', e =>  {
    e.preventDefault();
    if (!name.value) {
        console.log("empty")
    } else if (name.value.length <= 2) {
        console.log("too short ");
        name.style.border = "3px solid red";
    }
    console.log(name.value.length)
    if (!female.value) {
        console.log("empty")
    } else if (female.value.length <= 2) {
        console.log("too short ");
        female.style.border = "3px solid red";
    }
    console.log(female.value.length)
    if (!email.value) {
        console.log("empty")
    } else if (female.value.length <= 2) {
        console.log("too short");
        email.style.border = "3px solid red";
    }
    console.log(email.value.length)
    if (!number.value) {
        console.log("empty")
    } else if (email.value.length <= 0) {
        email.style.border = "3px solid red";
    }
    console.log(number.value.length)
    return true;
})