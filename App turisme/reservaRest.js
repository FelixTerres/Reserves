import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const urlParams = new URLSearchParams(window.location.search);
const nom = urlParams.get("titol")
const foto = urlParams.get("imatge");
const desc = urlParams.get("desc");


let con = document.getElementById("restaurant")

const appSettings = {
    databaseURL: "https://turisme-menorca-hf-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "reservaRestaurant")

let titol = document.createElement("h1")
titol.innerHTML = nom;

let imatge = document.createElement("img")
imatge.src = foto;

let descripcio = document.createElement("p")
descripcio.innerHTML = desc;


con.append(titol)
con.append(imatge)
con.append(descripcio)




// const ButtonForm = document.getElementById("add-button")
const addButtonEl = document.getElementById("add-button-add");

document.getElementById("Tornar").addEventListener("click", function(){
    window.location.href = "./index.html"
})

addButtonEl.addEventListener("click", function(){
    let formulariR = {
        nombre: document.getElementById("nombre").value,
        cognoms: document.getElementById("cognoms").value,
        dni: document.getElementById("dni").value,
        data: document.getElementById("data").value,
        hora: document.getElementById("hora").value,
        telefon: document.getElementById("telefon").value,
        persones: document.getElementById("persones").value,
        altres: document.getElementById("altres").value
    }

    push(itemsInDB,formulariR)

    clearInput()
})

function clearInput(){
    document.getElementById("nombre").value = ""
    document.getElementById("cognoms").value = ""
    document.getElementById("dni").value = ""
    document.getElementById("data").value = ""
    document.getElementById("hora").value = ""
    document.getElementById("telefon").value = ""
    document.getElementById("persones").value = ""
    document.getElementById("altres").value = ""
}
