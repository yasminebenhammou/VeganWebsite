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
  <div class="dropdown-container">
    <li>Profile</li>
    <div class="dropdown-content">
    <a href="#">favorite recipe</a>
    <a href="#">favorite restaurants</a>

    <button onclick="logout()">logout</button>
  </div>
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
var currentIndex;

var totalImages=document.getElementById("carousel-container").getElementsByTagName("img").length


var imgSlider = simpleslider.getSlider({
  container: document.getElementById('carousel-container'),
  prop: 'left',
  init: -612,
  show: 0,
  end: 612,
  unit: 'px',
  transitionTime:.5,
    delay:1.5,
    onChange: getCurrentIndex
    

});

function getCurrentIndex() {
  currentIndex = imgSlider.currentIndex();
  changeSlide(currentIndex);
}

function changeSlide(index) {
  const dotsall = document.querySelectorAll('.dot'); 
  dotsall.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  
}


for (let i = 0; i < totalImages; i++) {
  const dotsContainer = document.getElementById('dots-container');
  const newDot = document.createElement('div');
  newDot.classList.add('dot');
  dotsContainer.appendChild(newDot);
}




feather.replace();



