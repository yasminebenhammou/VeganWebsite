
fetch(`http://localhost:3000/api/restaurants`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const restaurant = data[data.length - 1];
        console.log('here is the dataaaaa ' + JSON.stringify(restaurant))
        console.log('here is the dataaaaa ' + restaurant.rating)


        document.getElementById('card-review').innerHTML = reviewPrint(restaurant);

        feather.replace();


    })
    .catch(error => {
        console.error('Fetch error:', error);
    });




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

function reviewPrint(data) {
    return `
    <div id="card-review">
    <img src="img/restaurantExample.jpg" />
    <div class="container-heart"><i class="heart" data-feather="heart"></i></div>
    <div id="card-review-detail">
      <span class="text-medium">${data.name}</span>
      <div id="star-rating">
      ${stars(data.rating)}
      </div>
    </div>
  </div>
    `;
}
