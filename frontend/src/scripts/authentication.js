

async function submitLoginForm(event) {
    event.preventDefault();
    
    var errorLoginDiv = document.getElementById('error-login');
    errorLoginDiv.innerHTML =" ";

    const loginData = {
        email: document.getElementById('emailLoginInput').value,
        password: document.getElementById('passwordLoginInput').value
    }

    let result = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
    });

    result = await result.json();

    if (result.error) {
         errorLoginDiv.innerHTML = result.message;
        throw new Error(`HTTP error! Status: ${result.status} ` + result.id);
    }
    else{
        errorLoginDiv.innerHTML = result.message;
       console.log('Succesfully logged in')
       sessionStorage.setItem('userId', result.id);
       window.location.href = "../dist/index.html";
   }
   

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
  
    
    if (result.error) {
        errorRegisterDiv.innerHTML = result.message;
       throw new Error(`HTTP error! Status: ${result.status} ` + result.id);
   }
   else{
    errorRegisterDiv.innerHTML = result.message;
      console.log('Succesfully created account')
      sessionStorage.setItem('userId', result.id);
    //   location.replace("http://127.0.0.1:5500/dist/index.html")
    window.location.href = "../dist/index.html";

    }

}

document.getElementById('loginForm').onsubmit = submitLoginForm;
document.getElementById('registerForm').onsubmit = submitRegisterForm;
