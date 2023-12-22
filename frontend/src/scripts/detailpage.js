

const YOUR_APP_ID = '2cb280cd';
const YOUR_APP_KEY = '5996a4b27890afada3aefcc975ca1262';
const baseUrl = 'https://api.edamam.com/search';

const query = 'b';
const recipesLimit = 40;


window.onload = function () {
    const queryString = window.location.href.split('/').reverse()[0]
  console.log('query '+queryString)
    getRecipeById(queryString);
};


function getRecipeById(recipeId) {
    const container = document.getElementById('container');

    const appId = 'YOUR_APP_ID';
    const appKey = 'YOUR_APP_KEY';
    const baseUrl = 'https://api.edamam.com/search';
 
    const uri = encodeURIComponent("http://www.edamam.com/ontologies/"+recipeId);

    fetch(`https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${uri}&app_id=2cb280cd&app_key=5996a4b27890afada3aefcc975ca1262`).then(response => {
        if (!response.ok) {
            console.log('the url '+response.data)
            const recipe = response.data.hits[0].recipe;
            console.log('Recipe ID:', recipe.uri);
            console.log('Recipe Label:', recipe.label);
        }
        return response.json();
    }).then(data => {
        const item = data.hits[0].recipe;
        console.log('the recipes ' + JSON.stringify(item))

        console.log('THE DETAILS ++++++ ')
        console.log('cal : '+item.calories)

        console.log('time : '+item.totalTime)

        console.log('ingredients : '+item.ingredientLines)
        console.log('instruction : '+item.instructionLines)

          const recipeItemDiv = document.createElement('div');
          recipeItemDiv.className = 'detail-recipe';
      
          recipeItemDiv.innerHTML = displayRecipes(item);

          container.appendChild(recipeItemDiv);
      
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}



function displayRecipes(data) {
    return `
  <img src='${data.images.LARGE.url}' ' onClick="detailpage('${data.uri}')"  />
    <div class="card-recipe-detail">
    <div>${data.label}</div>
    <div>${data.ingredientLines}</div>
    <div>${data.instructionLines}</div>
    <div>${data.summary}</div>
    <div>${data.cuisineType}</div>

    <div>${data.totalTime}</div>
    <div>${Math.round(data.calories)}</div>

    <p class="detail-light-text">${data.summary}</p>
    </div>
    `;
}





