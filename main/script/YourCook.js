// import { orderedCooks } from "../../data/chefs.js";
export let orderedCooks = [];

const cooks = [{
  id: 1,
  name: 'Gordon Ramsay',
  photo: '../images/Gordon-Ramsay-removebg-preview.png',
  style: 'Scottish',
  avgRating: '6',
  availability: 'No, you idiot sandwhich',
  price: '500'
}, {
  id: 2,
  name: 'Salt Bae',
  photo: '../images/Salt-Bae-removebg-preview.png',
  style: 'American',
  avgRating: '2.42',
  availability: 'Always',
  price: '1500'
}, {
  id: 3,
  name: 'Prof. Muralidhara',
  photo: '../images/Muralidhara-removebg-preview.png',
  style: '<strong>D</strong>utch <strong>S</strong>panish <strong>A</strong>merican',
  avgRating: '4.69',
  availability: 'Surprise',
  price: '10'
}, {
  id: 4,
  name: 'Jamie Oliver',
  photo: '../images/Jamie-Oliver.png',
  style: 'British',
  avgRating: '4.6',
  availability: 'Tomorrow',
  price: '300'
}, {
  id: 5,
  name: 'David Chang',
  photo: '../images/David-Chang.png',
  style: 'Chineese',
  avgRating: '4.7',
  availability: 'Today',
  price: '400'
}, {
  id: 6,
  name: 'Sanjeev Kapoor',
  photo: '../images/Sanjeev-Kapoor.png',
  style: 'Indian',
  avgRating: '4.6',
  availability: 'Not Available',
  price: '800'
}]

function loadChefsRecommended() {
  let cooksHTML = '';

  cooks.forEach((cook) => {
    cooksHTML += `
      <div class="chef-details-container">
        <img src="${cook.photo}">
        <div>Name: ${cook.name}</div>
        <div>Style: ${cook.style}</div>
        <div>Average Rating: ${cook.avgRating}/5</div>
        <div>Availability: ${cook.availability}</div>
        <div class = 'book-cook book-cook-${cook.id}'>
          <button data-cook-id = "${cook.id}" class = 'book-button'>Book</button>
        </div>
      </div>
    `
  });

  document.querySelector('.chef-recommended-grid').innerHTML = cooksHTML;
  bookChef();
}

loadChefsRecommended();

function bookChef() {
  document.querySelectorAll('.book-button').forEach((book) => {
    let bookHTML = ``;
    book.addEventListener('click', () => {
      bookHTML = `
        <input type='date' class = "input-date">
        <button class = "book-now-button" data-cook-id = "${book.dataset.cookId}">Book Now</button>
      `
      document.querySelector(`.book-cook-${book.dataset.cookId}`).innerHTML = bookHTML;
      bookNowChef();
    })
  })
}

function bookNowChef() {
  document.querySelectorAll('.book-now-button').forEach((book) => {
    book.addEventListener('click', () => {
      const orderedCookId = book.dataset.cookId;
      cooks.forEach((cook) => {
        if (cook.id == orderedCookId){
          orderedCooks.push(cook);
          console.log(orderedCooks);
        }
      })
      const bookedHTML = `<a href = "../../checkout/MyCook.html">Checkout</a>`;
      book.innerHTML = bookedHTML; 
    })
  })
}