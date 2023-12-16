document.getElementById("form-login").addEventListener("submit", function(event) {
    event.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if (email == "" && password == "") {
        console.log("Login Successfuly")
    } else {
        console.log("Login Failed!")
    }

    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
})