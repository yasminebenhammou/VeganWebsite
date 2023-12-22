console.log('loaded bitch')
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }

  const user = sessionStorage.getItem('userId');

if (!user) {
    // window.location.href = "frontend/login.html";
}

// fetch('http://localhost:3000/auth/login', {
//     method: "POST",
//     headers: {'Content-Type': 'application/json'}, 
//     body: JSON.stringify({ uuid: uuid })
    
// }).then(response => response.json())
// .then((result) => {
//     if (!result.username) {
//         window.location.href = "frontend/login.html";
//     }
    
//     console.log('User is logged in!');
// });


  function openLoginPopup() {
    document.getElementById("popup_login").style.display  =  "flex";
  }

  function closeRegisterPopup()  {
    document.getElementById("popup_register").style.display  =  "none";
  }

  function closeLoginPopup()  {
    document.getElementById("popup_login").style.display  =  "none";
  }


  function openRegisterPopup() {
    document.getElementById("popup_register") 
    .style.display  =  "flex";
  }


  feather.replace();

  document.body.appendChild(component());

