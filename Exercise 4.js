document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        // Get the delta between the mouse position and center point.
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + delta + 'px';

        // Adjust the top panel width.
        topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });
});

var bil1;
var bil2;
var hasil;
var opr;
var opr_seleksi = false;
function btn(angka) {
    var display = document.getElementById("output").value;
    if (display == "0") {
        display = angka; 
    } 
    else {
        display += angka;
    }
    document.getElementById("output").value = display;
}
 
function clr() {
    document.getElementById("output").value = "0";
    bil1 = 0;
    bil2 = 0;
    opr_seleksi = false;
}
 
function koma() {
    var display = document.getElementById("output").value;
    if (display.includes(".") == false) {
        display += ".";
    }
    document.getElementById("output").value = display;  
}
 
function btn_opr(o) {
    opr_seleksi = true;
    bil1 = parseFloat(document.getElementById("output").value);
    opr = o;
    document.getElementById("output").value = "0";
}
 
function hitung() {
    if (opr_seleksi == true) {
        bil2 = parseFloat(document.getElementById("output").value);
        switch(opr){
            case 1 :
                hasil = bil1 * bil2;
                document.getElementById("output").value = hasil;            
                break;
            case 2 :
                hasil = bil1 / bil2;
                document.getElementById("output").value = hasil;
                break;
            case 3 :
                hasil = bil1 - bil2;
                document.getElementById("output").value = hasil;
                break;
            case 4 :
                hasil = bil1 + bil2;
                document.getElementById("output").value = hasil;
                break;
        }
        opr_seleksi = false
        hasil = 0;
        bil1 = 0;
        bil2 = 0;
    }
}

var data =  
[
    {
        "name": "Alderaan", 
        "rotation_period": "24", 
        "orbital_period": "364", 
        "diameter": "12500", 
        "climate": "temperate", 
        "gravity": "1 standard", 
        "terrain": "grasslands, mountains", 
        "surface_water": "40", 
        "population": "2000000000", 
        "residents": [
            "https://swapi.co/api/people/5/", 
            "https://swapi.co/api/people/68/", 
            "https://swapi.co/api/people/81/"
        ], 
        "films": 
        [
            "https://swapi.co/api/films/6/", 
            "https://swapi.co/api/films/1/"
        ], 
        "created": "2014-12-10T11:35:48.479000Z", 
        "edited": "2014-12-20T20:58:18.420000Z", 
        "url": "https://swapi.co/api/planets/2/"
    }, 
    {
        "name": "Yavin IV", 
        "rotation_period": "24", 
        "orbital_period": "4818", 
        "diameter": "10200", 
        "climate": "temperate, tropical", 
        "gravity": "1 standard", 
        "terrain": "jungle, rainforests", 
        "surface_water": "8", 
        "population": "1000", 
        "residents": 
        [
        ], 
        "films": 
        [
            "https://swapi.co/api/films/1/"
        ], 
        "created": "2014-12-10T11:37:19.144000Z", 
        "edited": "2014-12-20T20:58:18.421000Z", 
        "url": "https://swapi.co/api/planets/3/"
    }, 
    {
        "name": "Hoth", 
        "rotation_period": "23", 
        "orbital_period": "549", 
        "diameter": "7200", 
        "climate": "frozen", 
        "gravity": "1.1 standard", 
        "terrain": "tundra, ice caves, mountain ranges", 
        "surface_water": "100", 
        "population": "unknown", 
        "residents": 
        [
        ], 
        "films": 
        [
            "https://swapi.co/api/films/2/"
        ], 
        "created": "2014-12-10T11:39:13.934000Z", 
        "edited": "2014-12-20T20:58:18.423000Z", 
        "url": "https://swapi.co/api/planets/4/"
    }, 
    {
        "name": "Dagobah", 
        "rotation_period": "23", 
        "orbital_period": "341", 
        "diameter": "8900", 
        "climate": "murky", 
        "gravity": "N/A", 
        "terrain": "swamp, jungles", 
        "surface_water": "8", 
        "population": "unknown", 
        "residents": 
        [
        ], 
        "films": 
        [
            "https://swapi.co/api/films/2/", 
            "https://swapi.co/api/films/6/", 
            "https://swapi.co/api/films/3/"
        ], 
        "created": "2014-12-10T11:42:22.590000Z", 
        "edited": "2014-12-20T20:58:18.425000Z", 
        "url": "https://swapi.co/api/planets/5/"
    }, 
    {
        "name": "Bespin", 
        "rotation_period": "12", 
        "orbital_period": "5110", 
        "diameter": "118000", 
        "climate": "temperate", 
        "gravity": "1.5 (surface), 1 standard (Cloud City)", 
        "terrain": "gas giant", 
        "surface_water": "0", 
        "population": "6000000", 
        "residents": 
        [
            "https://swapi.co/api/people/26/"
        ], 
        "films": 
        [
            "https://swapi.co/api/films/2/"
        ], 
        "created": "2014-12-10T11:43:55.240000Z", 
        "edited": "2014-12-20T20:58:18.427000Z", 
        "url": "https://swapi.co/api/planets/6/"
    }, 
    {
        "name": "Endor", 
        "rotation_period": "18", 
        "orbital_period": "402", 
        "diameter": "4900", 
        "climate": "temperate", 
        "gravity": "0.85 standard", 
        "terrain": "forests, mountains, lakes", 
        "surface_water": "8", 
        "population": "30000000", 
        "residents": 
        [
            "https://swapi.co/api/people/30/"
        ], 
        "films": [
            "https://swapi.co/api/films/3/"
        ], 
        "created": "2014-12-10T11:50:29.349000Z", 
        "edited": "2014-12-20T20:58:18.429000Z", 
        "url": "https://swapi.co/api/planets/7/"
    }, 
    {
        "name": "Naboo", 
        "rotation_period": "26", 
        "orbital_period": "312", 
        "diameter": "12120", 
        "climate": "temperate", 
        "gravity": "1 standard", 
        "terrain": "grassy hills, swamps, forests, mountains", 
        "surface_water": "12", 
        "population": "4500000000", 
        "residents": 
        [
            "https://swapi.co/api/people/3/", 
            "https://swapi.co/api/people/21/", 
            "https://swapi.co/api/people/36/", 
            "https://swapi.co/api/people/37/", 
            "https://swapi.co/api/people/38/", 
            "https://swapi.co/api/people/39/", 
            "https://swapi.co/api/people/42/", 
            "https://swapi.co/api/people/60/", 
            "https://swapi.co/api/people/61/", 
            "https://swapi.co/api/people/66/", 
            "https://swapi.co/api/people/35/"
        ], 
        "films": 
        [
            "https://swapi.co/api/films/5/", 
            "https://swapi.co/api/films/4/", 
            "https://swapi.co/api/films/6/", 
            "https://swapi.co/api/films/3/"
        ], 
        "created": "2014-12-10T11:52:31.066000Z", 
        "edited": "2014-12-20T20:58:18.430000Z", 
        "url": "https://swapi.co/api/planets/8/"
    }, 
    {
        "name": "Coruscant", 
        "rotation_period": "24", 
        "orbital_period": "368", 
        "diameter": "12240", 
        "climate": "temperate", 
        "gravity": "1 standard", 
        "terrain": "cityscape, mountains", 
        "surface_water": "unknown", 
        "population": "1000000000000", 
        "residents": 
        [
            "https://swapi.co/api/people/34/", 
            "https://swapi.co/api/people/55/", 
            "https://swapi.co/api/people/74/"
        ], 
        "films": 
        [
            "https://swapi.co/api/films/5/", 
            "https://swapi.co/api/films/4/", 
            "https://swapi.co/api/films/6/", 
            "https://swapi.co/api/films/3/"
        ], 
        "created": "2014-12-10T11:54:13.921000Z", 
        "edited": "2014-12-20T20:58:18.432000Z", 
        "url": "https://swapi.co/api/planets/9/"
    }, 
    {
        "name": "Kamino", 
        "rotation_period": "27", 
        "orbital_period": "463", 
        "diameter": "19720", 
        "climate": "temperate", 
        "gravity": "1 standard", 
        "terrain": "ocean", 
        "surface_water": "100", 
        "population": "1000000000", 
        "residents": 
        [
            "https://swapi.co/api/people/22/", 
            "https://swapi.co/api/people/72/", 
            "https://swapi.co/api/people/73/"
        ], 
        "films": 
        [
            "https://swapi.co/api/films/5/"
        ], 
        "created": "2014-12-10T12:45:06.577000Z", 
        "edited": "2014-12-20T20:58:18.434000Z", 
        "url": "https://swapi.co/api/planets/10/"
    }, 
    {
        "name": "Geonosis", 
        "rotation_period": "30", 
        "orbital_period": "256", 
        "diameter": "11370", 
        "climate": "temperate, arid", 
        "gravity": "0.9 standard", 
        "terrain": "rock, desert, mountain, barren", 
        "surface_water": "5", 
        "population": "100000000000", 
        "residents": 
        [
            "https://swapi.co/api/people/63/"
        ], 
        "films": 
        [
            "https://swapi.co/api/films/5/"
        ], 
        "created": "2014-12-10T12:47:22.350000Z", 
        "edited": "2014-12-20T20:58:18.437000Z", 
        "url": "https://swapi.co/api/planets/11/"
    }
]; 

var table = document.getElementById('dataPlanet');
data.forEach(function(object) {
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>' + object.name + '</td>' +
        '<td>' + object.rotation_period + '</td>' +
        '<td>' + object.orbital_period + '</td>' +
        '<td>' + object.diameter + '</td>' +
        '<td>' + object.climate + '</td>' +
        '<td>' + object.gravity + '</td>' +
        '<td>' + object.terrain + '</td>' +
        '<td>' + object.surface_water + '</td>' +
        '<td>' + object.population + '</td>';
    table.appendChild(tr);
});

function searchPlanet() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("planetInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("dataPlanet");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}