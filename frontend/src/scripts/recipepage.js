

const YOUR_APP_ID = '2cb280cd';
const YOUR_APP_KEY = '5996a4b27890afada3aefcc975ca1262';

const query = 'b';
const recipesLimit = 40;


window.onload = function () {
    sortRecipes();
  };
  

function sortRecipes() {
    const sortDropdown = document.getElementById('sortDropdown');
    const selectedOption = sortDropdown.value;
  
    const container = document.getElementById('item');
    container.innerHTML = '';    

    console.log('value options '+selectedOption)
    // https://api.edamam.com/api/recipes/v2?type=public&app_id=2cb280cd&app_key=5996a4b27890afada3aefcc975ca1262&health=vegan&mealType=Breakfast&imageSize=REGULAR

fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${selectedOption}&to=40&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const recipes = data.hits.map(hit => hit.recipe);
        console.log('the recipes '+JSON.stringify(recipes))

        recipes.forEach(item => {
            if (item.images) {
                const recipeItemDiv = document.createElement('div');
                recipeItemDiv.className = 'card-recipe';
            
                recipeItemDiv.innerHTML = displayRecipes(item);

                container.appendChild(recipeItemDiv);
            }
        })
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });


}
    function displayRecipes(data) {        
        return `
        <img src='${data.images.REGULAR.url}'/>
        <div class="card-recipe-detail">
        <div>${data.label}</div>
        <p class="detail-light-text">${data.summary}</p>
        </div>
        `;
      }



    

