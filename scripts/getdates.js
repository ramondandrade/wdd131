const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = document.lastModified