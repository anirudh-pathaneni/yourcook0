import { orderedCooks } from "../../main/script/YourCook.js";

console.log(orderedCooks);

function reviewOrder () {
  let orderedCooksHTML = ``;

  orderedCooks.forEach((cook) => {
    orderedCooksHTML += `
      <img src="${cook.photo}">
      <div>Name: ${cook.name}</div>
      <div>Style: ${cook.style}</div>
      <div>Average Rating: ${cook.avgRating}/5</div>
    `
  })
  
  document.querySelector('.chef-summary').innerHTML = orderedCooksHTML;
}

reviewOrder();