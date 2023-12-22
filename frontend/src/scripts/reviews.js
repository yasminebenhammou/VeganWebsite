

const YOUR_APP_ID = '2cb280cd';
const YOUR_APP_KEY = '5996a4b27890afada3aefcc975ca1262';

const query = 'b';
const recipesLimit = 40;


window.onload = function () {
    getReviews();
  };
  

function getReviews() {
 
    const container = document.getElementById('container');
    container.innerHTML = '';    

fetch(`http://localhost:3000/api/restaurants`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('here is the data '+JSON.stringify(data))
        data.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'card-review';
        
                itemDiv.innerHTML = displayReviews(item);

                container.appendChild(itemDiv);
                feather.replace();

        })
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}


function stars(data){
    const maxStars = 5; 
  
    let filledValue = data; 
    let emptyValue = maxStars - filledValue;
  
    let filledString = '';
    for (let i = 0; i < filledValue; i++) {
      filledString += `<i class="filled-star" data-feather="star"></i>`;
    }
  
    // Generate HTML for empty stars
    let emptyString = '';
    for (let i = 0; i < emptyValue; i++) {
       emptyString += `<i class="empty-star" data-feather="star"></i>`;
    }
    return `${filledString}${emptyString}`;
  
  
  }
  
    function displayReviews(data) {        
        return `
      <img src='${data.image}' />
        <div class="card-recipe-detail">
        <div>${data.name}</div>
        <p class="detail-light-text">${data.name}</p>
        <p class="detail-light-text">${data.description}</p>
        <div id="star-rating">
        ${stars(data.rating)}
        </div>
        </div>
        `;
      }



    

