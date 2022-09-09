// import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import render from "./modules/dLikes.js";
import "./modules/likesAPI.js";

const content = document.querySelector('.main-container')

function component() {
  // const element = document.createElement('div');

  // // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('icon');

  const elem = document.getElementById('logo');
  elem.classList.add('logo');
  elem.appendChild(myIcon);

fetch("https://api.tvmaze.com/seasons/1/episodes")
  .then((data) => {
    return data.json();
  })

  .then((completedata) => {
    let data1 = "";
    completedata.map((values) => {
      data1 += `
        <div class="main" id="main">
        <img src=${values.image.medium} alt="img">
        <div class="list-movies">
            <h2 class="title">${values.name}</h2>
            <img class='heart' src="../src/assets/images/love.png" alt='heart'>
            <button type="button" class="like">like</button></div>
        <button>comments</button>
        <button>Reservation</button>
      </div>`;
    });
    document.getElementById("popup").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });

render();

  // return element;
}

document.body.appendChild(component());

export default content;