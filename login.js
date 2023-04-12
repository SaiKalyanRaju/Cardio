function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "project" && password === "srmist") {
        alert("Login Successful!");
        window.location.href = "Home.html";
    } else {
        alert("Invalid Username or Password!");
    }
}