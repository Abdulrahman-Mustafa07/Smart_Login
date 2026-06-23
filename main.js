let s_up = document.getElementById("s-up");
let l_in = document.getElementById("l-in");
let login = document.querySelector(".log-in");
let signUp = document.querySelector(".sign-up");
let main = document.querySelector(".main");
let h1 = document.getElementById("h1");
let suc = document.getElementById("suc")
let suc2 = document.getElementById("suc2")
let name = document.getElementById("sName");
let email = document.getElementById("sEmail");
let pass = document.getElementById("sPass");


if (localStorage.getItem("active") == "main") {
    login.classList.add("close");
    signUp.classList.add("close");   
    main.classList.remove("close");

    let user = localStorage.getItem(0);
    let arr = user.split(",");

    h1.innerHTML = "Welcome " + arr[0];
}

if (localStorage.getItem("active") == "sign") {
    suc.innerHTML = "";
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
    suc.innerHTML = ""; 
    login.classList.add("close");
    signUp.classList.remove("close");
    name.value = "";
    pass.value = "";
    email.value = "";

    if (localStorage.getItem("active") != null) localStorage.removeItem("active");
    localStorage.setItem("active", "sign");
}

l_in.onclick = function() {
    email2.value = "";
    pass2.value = "";
    login.classList.remove("close");
    signUp.classList.add("close");
    if (localStorage.getItem("active") != null) localStorage.removeItem("active");
    localStorage.setItem("active", "login");
}

/////////////////////////////////////////////////////////////////////////////////////////

let signButton = document.getElementById("sign-up");

signButton.onclick = function() {
    if (name.value.length < 4) {
        suc.style.color = "red";
        suc.innerHTML = "Name must be at least 4 letters";
    } 
    else if (email.value.substr(email.value.length - 10) != "@gmail.com" || email.value.length <= 10) {
        suc.style.color = "red";
        suc.innerHTML = "Enter a valid Email";
    }
    else if (pass.value.length < 8) {
        suc.style.color = "red";
        suc.innerHTML = "Passworg must be at least 8 letters";
    } 
    else {
        let used = false;
        for (let i = 0; i < localStorage.length; i++) {
            let user = localStorage.getItem(i);
            if (user == null) continue;
            let arr = user.split(",");
            if (email.value == arr[1]) used = true;
        } 

        if (used == true) {
            suc.style.color = "red";
            suc.innerHTML = "The email is already exist";
        }
        else {
            localStorage.setItem(localStorage.length, [name.value, email.value, pass.value]);
            suc.style.color = "green";
            suc.innerHTML = "Success";
            email2.value = "";
            pass2.value = "";
            setTimeout(() =>{
                login.classList.remove("close");
                signUp.classList.add("close");
                if (localStorage.getItem("active") != null) localStorage.removeItem("active");
                localStorage.setItem("active", "login");
            }, 1000)
        }

    }
}

////////////////////////////////////////////////////////////////////////////////////////

email2 = document.getElementById("lEmail");
pass2 = document.getElementById("lPass");
let loginButton = document.getElementById("log-in");

loginButton.onclick = function() {
    if (email2.value.substr(email2.value.length - 10) != "@gmail.com" || email2.value.length <= 10) {
        suc.style.color = "red";
        suc.innerHTML = "Enter a valid Email";
    }
    else if (pass2.value.length < 8) {
        suc.style.color = "red";
        suc.innerHTML = "Passworg must be at least 8 letters";
    }
    else {
        let nm = "";
        for (let i = 0; i < localStorage.length; i++) {
            let user = localStorage.getItem(i);
            if (user == null) continue;
            let arr = user.split(",");
            if (email2.value == arr[1]) {
                if (pass2.value == arr[2]) {
                    let user2 = localStorage.getItem(0);
                    if (user2 != null) localStorage.removeItem(0);
                    localStorage.removeItem(i);
                    localStorage.setItem(0, user);
                    if (user2 != null) localStorage.setItem(i, user2) 
                    nm = arr[0];
                }
                else nm = "wp";
                break;
            }
        } 
        if (nm == "") {
            suc2.style.color = "red";
            suc2.innerHTML = "Sign Up first";
        }
        else if (nm == "wp") {
            suc2.style.color = "red";
            suc2.innerHTML = "wrong password";
        }
        else {
            if (localStorage.getItem("active") != null) localStorage.removeItem("active");
            localStorage.setItem("active", "main");
            login.classList.add("close");
            main.classList.remove("close");
            h1.innerHTML = "Welcome " + nm;
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////

let out = document.getElementById("logout");

out.onclick = function() {
    if (localStorage.getItem("active") != null) localStorage.removeItem("active");
    localStorage.setItem("active", "login");
    email2.value = "";
    pass2.value = "";
    login.classList.remove("close");
    main.classList.add("close");
}