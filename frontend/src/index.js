const userId = sessionStorage.getItem('userId');
console.log('loaded bitch ' + userId)

if (!userId) {
  navbar()
} else {
  navbarLogged()

  fetch('http://localhost:3000/api/users/'+userId, {
    method: "GET",
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json())
    .then((result) => {
      console.log('you are logged in ' + JSON.stringify(result))
    });
    }

function navbarLogged() {
  document.getElementById("navbar").innerHTML = 
  `<ul>
  <li><a href="#home" id="logo-home">VegiGuide</a></li>
  <li class="active-nav"><a href="#home">Home</a></li>
  <li><a href="#nesws">Restaurants</a></li>
  <li><a href="#contact">Recipes</a></li>
  <li><a href="#search"> <i data-feather="search"></i></a></li>
  <div class="button-group-right">
    <li>Profile</li>
    <button onclick="logout()">logout</button>
  </div>
  </ul>`
}

function navbar() {
  document.getElementById("navbar").innerHTML = 
  `<ul>
  <li><a href="#home" id="logo-home">VegiGuide</a></li>
  <li class="active-nav"><a href="#home">Home</a></li>
  <li><a href="#nesws">Restaurants</a></li>
  <li><a href="#contact">Recipes</a></li>
  <li><a href="#search"> <i data-feather="search"></i></a></li>
  <div class="button-group-right">
    <li><button class="outline-button text-button" onclick="openLoginPopup()">login</button></li>
    <li><button class="fill-button text-button" onclick="openRegisterPopup()">sign in</button></li>
  </div>
  </ul>`
}

function logout(){
  sessionStorage.removeItem("userId")
  window.location.href = "../dist/index.html";
}


function openLoginPopup() {
  document.getElementById("popup_login").style.display = "flex";
}

function closeRegisterPopup() {
  document.getElementById("popup_register").style.display = "none";
}

function closeLoginPopup() {
  document.getElementById("popup_login").style.display = "none";
}


function openRegisterPopup() {
  document.getElementById("popup_register")
    .style.display = "flex";
}


feather.replace();


