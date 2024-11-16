const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = document.lastModified;


const hamButton = document.querySelector('#menu');
const nav_bar = document.querySelector('.nav_bar');

hamButton.addEventListener('click', () => {
    nav_bar.classList.toggle('open');
    hamButton.classList.toggle('open');
});
