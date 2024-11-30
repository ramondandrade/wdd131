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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Recife",
        location: "Recife, Brazil",
        dedicated: "2000, December, 15",
        area: 37200,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
    },

    {
        templeName: "Sao Paulo City",
        location: "Sao Paulo, Brazil",
        dedicated: "1978, November, 2",
        area: 59246,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },

    {
        templeName: "Madrid City",
        location: "Madrid City, Spain",
        dedicated: "1999, March, 21",
        area: 45800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    },

];

function setTemplesAlbum(filter = "") {

    var filtered = temples;
    if (filter == "old") {
        filtered = temples.filter((temples) => parseInt(temples.dedicated.split(",")[0]) < 1900);
    }
    else if (filter == "new") {
        filtered = temples.filter((temples) => parseInt(temples.dedicated.split(",")[0]) > 2000);
    }
    else if (filter == "large") {
        filtered = temples.filter((temples) => temples.area > 90000);
    }
    else if (filter == "small") {
        filtered = temples.filter((temples) => temples.area < 10000);
    }

    var html = "";
    for (const [key, value] of Object.entries(filtered)) {
        html += `<div class="temple_info"><figure>
                <figcaption>
                    <h2>${value.templeName}</h2>
                    <br><span class='temple_info_key'>LOCATION: </span><span class='temple_info_value'>${value.location}</span>
                    <br><span class='temple_info_key'>DEDICATED: </span><span class='temple_info_value'>${value.dedicated}</span>
                    <br><span class='temple_info_key'>SIZE: </span><span class='temple_info_value'>${value.area} sq ft</span
                </figcaption>
                <img loading="lazy" src="${value.imageUrl}" alt="${value.templeName}">
            </figure></div>`;
    }

    document.getElementById("temples_images").innerHTML = html;

}

function setMenu(e) {

    var elems = document.querySelectorAll(".nav-link");
    for (let elem of elems) {
        elem.classList.remove('active');
    }

    e.classList.add("active");

}

setTemplesAlbum();