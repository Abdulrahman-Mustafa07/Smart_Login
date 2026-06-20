let s_up = document.getElementById("s-up");
let l_in = document.getElementById("l-in");
let login = document.querySelector(".log-in");
let signUp = document.querySelector(".sign-up");
let main = document.querySelector(".main");
let h1 = document.getElementById("h1");


if (localStorage.getItem("active") == "main") {
    login.classList.add("close");
    signUp.classList.add("close");   
    main.classList.remove("close");

    let user = localStorage.getItem("user");
    let arr = user.split(",");

    h1.innerHTML = "Welcome " + arr[0];
}

if (localStorage.getItem("active") == "sign") {
    login.classList.add("close");
    signUp.classList.remove("close");   
    main.classList.add("close");   
}

if (localStorage.getItem("active") == "login") {
    login.classList.remove("close");
    signUp.classList.add("close");
    main.classList.add("close");
}

s_up.onclick = function() {
    login.classList.add("close");
    signUp.classList.remove("close");
    if (localStorage.getItem("active") != null) localStorage.removeItem("active");
    localStorage.setItem("active", "sign");
}

l_in.onclick = function() {
    login.classList.remove("close");
    signUp.classList.add("close");
    if (localStorage.getItem("active") != null) localStorage.removeItem("active");
    localStorage.setItem("active", "login");
}

/////////////////////////////////////////////////////////////////////////////////////////

let name = document.getElementById("sName");
let email = document.getElementById("sEmail");
let pass = document.getElementById("sPass");
let signButton = document.getElementById("sign-up");
let suc = document.getElementById("suc")

signButton.onclick = function() {
    if (name.value.length < 4) alert("Name must be up to 3 letters");
    else if (email.value.substr(email.value.length - 10) != "@gmail.com" || email.value.length <= 10)
        alert("Enter a valid Email");
    else if (pass.value.length < 8) alert("Passworg must be up to 7 letters");
    else {
        localStorage.setItem("user", [name.value, email.value, pass.value]);
        suc.style.display = "inline-block";
    }
}

////////////////////////////////////////////////////////////////////////////////////////

email2 = document.getElementById("lEmail");
pass2 = document.getElementById("lPass");
let loginButton = document.getElementById("log-in");

loginButton.onclick = function() {
    if (email2.value.substr(email2.value.length - 10) != "@gmail.com" || email2.value.length <= 10)
        alert("Enter a valid Email");
    else if (pass2.value.length < 8) alert("Passworg must be up to 7 letters");
    else {
        let user = localStorage.getItem("user");
        if (user == null) alert("Sign Up first");
        else {
            let arr = user.split(",");
            let e = arr[1];
            let p = arr[2];
 
            if (email2.value != e || pass2.value != p) alert("Sign Up first");
            else {
                if (localStorage.getItem("active") != null) localStorage.removeItem("active");
                localStorage.setItem("active", "main");
                login.classList.add("close");
                main.classList.remove("close");
            }
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////

let out = document.getElementById("logout");

out.onclick = function() {
    if (localStorage.getItem("active") != null) localStorage.removeItem("active");
    localStorage.setItem("active", "login");
    login.classList.remove("close");
    main.classList.add("close");
}