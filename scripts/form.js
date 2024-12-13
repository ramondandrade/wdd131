const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

try {
    var select = document.getElementById('product-name');

    for (const [key, value] of Object.entries(products)) {
        var opt = document.createElement('option');
        opt.value = value.id;
        opt.innerHTML = value.name;
        select.appendChild(opt);
    }

} catch (error) {
}

function countSubmit(){

    var counter = localStorage.getItem("counter");
    if(counter==null){
        counter = 1;
    }else{
        counter = parseInt(counter) + 1;
    }

    localStorage.setItem("counter", counter);

}
