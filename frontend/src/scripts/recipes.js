const YOUR_APP_ID = '2cb280cd';
const YOUR_APP_KEY = '5996a4b27890afada3aefcc975ca1262';

const query = 'vegan';
const recipesLimit = 5;

const container = document.getElementById('item-wrap');

fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&to=${recipesLimit}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const recipes = data.hits.map(hit => hit.recipe);
        const slicedArray = recipes.slice(0, 2);

        slicedArray.forEach(item => {
            if (item.images) {
                const recipeItemDiv = document.createElement('div');
                recipeItemDiv.className = 'card-recipe';
                recipeItemDiv.innerHTML = Featured(item);
                container.appendChild(recipeItemDiv);
            }
        })
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });



function Featured(data) {
    return `
    <img src='${data.images.REGULAR.url}'/>
    <div class="card-recipe-detail">
    <div>${data.label}</div>
    <p class="detail-light-text">${data.summary}</p>
    </div>
    `;
}
