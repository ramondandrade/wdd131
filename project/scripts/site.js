const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const nav_bar = document.querySelector('.nav_bar');
const tourSelector = document.querySelector('#tour-name');
const priceSelector = document.querySelector('#price');

hamButton.addEventListener('click', () => {
    nav_bar.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const rides_list = [
    {
        id: 1,
        rideName: "Buggy Tour North Coast",
        description: "Experience an exhilarating buggy ride along the stunning north coast, exploring breathtaking beaches and dunes.",
        price: 150,
        imageUrl: "images/buggylitoralnorte7-1024x678.jpg.webp"
    },
    {
        id: 2,
        rideName: "Pipa Beach",
        description: "Discover the beauty of Pipa Beach, renowned for its golden sands, cliffs, and vibrant coastal atmosphere.",
        price: 100,
        imageUrl: "images/pipa13-1024x681.jpg.webp"
    },
    {
        id: 3,
        rideName: "Maracajaú Diving",
        description: "Dive into the crystal-clear waters of Maracajaú, exploring its vibrant marine life and coral reefs.",
        price: 200,
        imageUrl: "images/buggylitoralnorte7-1024x678.jpg.webp"
    },
    {
        id: 4,
        rideName: "Diving Perobas",
        description: "Enjoy an unforgettable diving experience in Perobas, known for its clear waters and stunning underwater views.",
        price: 150,
        imageUrl: "images/perobas11-1024x678.jpg.webp"
    },
    {
        id: 5,
        rideName: "Galinhos Beach",
        description: "Relax at Galinhos Beach, a tranquil paradise featuring calm waters and a charming fishing village atmosphere.",
        price: 100,
        imageUrl: "images/galinhos30-1024x768.jpeg.webp"
    },
    {
        id: 6,
        rideName: "VIP 4x4 Off Road Tour",
        description: "Embark on an adventurous 4x4 off-road journey, exploring the rugged beauty of the region in style.",
        price: 250,
        imageUrl: "images/litoralsuloffroad13-1024x683.jpg.webp"
    },
    {
        id: 7,
        rideName: "South Coast + Arituba Lagoon",
        description: "Explore the picturesque South Coast and unwind at the serene Arituba Lagoon, a perfect getaway spot.",
        price: 200,
        imageUrl: "images/litoralsularituba3-1024x731.jpg.webp"
    },
    {
        id: 8,
        rideName: "São Miguel do Gostoso",
        description: "Visit São Miguel do Gostoso, a charming coastal town offering pristine beaches and a relaxing vibe.",
        price: 150,
        imageUrl: "images/saomigueldogostoso13-1024x684.jpg.webp"
    },
    {
        id: 0,
        rideName: "Quad Bike Ride",
        description: "Rev up the excitement with a thrilling quad bike ride through scenic trails and rugged terrain.",
        price: 150,
        imageUrl: "images/quadriciclo18-1024x768.jpg.webp"
    }     
];

function setRidesAlbum(max = 3, show_details = true) {

    count = 0;
    var html = "";
    for (const [key, value] of Object.entries(rides_list)) {

        var details =  `
        <br><span class='info_key'>Description: </span><span class='info_value'>${value.description}</span>
        <br><span class='info_key'>Price: </span><span class='info_value'>$ ${value.price}</span>
        `;

        if(show_details==false){
            details = "";
        }

        html += `<div class="temple_info"><figure>
                <img loading="lazy" src="${value.imageUrl}" alt="${value.rideName}">
                <figcaption>
                    <h3>${value.rideName}</h3>
                    ${details}
                    <br> <br> <br><a class="contact_us_button" href="contact.html">Book now</a>
                </figcaption>
            </figure></div>`;

        count++;
        if(count >= max){
            break;
        }

    }

    document.getElementById("rides_list").innerHTML = html;

}

function setMenu(e) {

    var elems = document.querySelectorAll(".nav-link");
    for (let elem of elems) {
        elem.classList.remove('active');
    }

    e.classList.add("active");

}

function setOptionsTour(){
    var select = document.getElementById('tour-name');

    for (const [key, value] of Object.entries(rides_list)) {
        var opt = document.createElement('option');
        opt.value = value.id;
        opt.innerHTML = value.rideName;
        select.appendChild(opt);
    }

}

function setTourPrice(){
    var selectedPrice = document.getElementById('tour-name').value;

    if(selectedPrice!=""){
        var optPrice = "";
        for (const [key, value] of Object.entries(rides_list)) {
            if(value.id == selectedPrice){
                optPrice = value.price;
            }
        }

        priceSelector.innerHTML = ' (Price: $ '+optPrice + ")";
    }else{
        priceSelector.innerHTML = '';
    }
    

}