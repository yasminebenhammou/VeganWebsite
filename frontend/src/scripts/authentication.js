

async function submitLoginForm(event) {
    event.preventDefault();
    
    var errorLoginDiv = document.getElementById('error-login');
    errorLoginDiv.innerHTML =" ";

    const loginData = {
        email: document.getElementById('emailLoginInput').value,
        password: document.getElementById('passwordLoginInput').value
    }
    console.log(loginData)


    let result = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
    });

    result = await result.json();

    if (!result.ok) {
         errorLoginDiv.innerHTML = result.message;
        throw new Error(`HTTP error! Status: ${result.status} ` + result.message);

    }

    sessionStorage.setItem('uuid', result._id);
    console.log("the rrrrrreees "+result);


}



async function submitRegisterForm(event) {
    event.preventDefault();

    var errorRegisterDiv = document.getElementById('error-register');
    errorRegisterDiv.innerHTML =" ";

    const registerData = {
        email: document.getElementById('emailRegisterInput').value,
        password: document.getElementById('passwordRegisterInput').value,
        username: document.getElementById('usernameInput').value,
        confirm_password: document.getElementById('confirmInput').value

    }

    console.log('registered submitted ' + JSON.stringify(registerData))
    let result = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData)
    });

    result = await result.json();

    if (!result.ok) {
        errorRegisterDiv.innerHTML = result.message;
        throw new Error(`HTTP error! Status: ${result.status} ` + result.message);

    }

    sessionStorage.setItem('userId', result._id);
    console.log(result);

}

document.getElementById('loginForm').onsubmit = submitLoginForm;
document.getElementById('registerForm').onsubmit = submitRegisterForm;
