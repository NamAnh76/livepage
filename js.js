function sigin(){
// event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username : username,
        email : email,
        password: password
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Dang ki thanh cong");
}

function login(){
// event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username)
    var data = JSON.parse(user);
    if(username == data.username && email == data.email && password == data.password){
        window.location.replace("../Home/home.html");
    }
    
    else {
        alert("dang nhap that bai");
    }
}