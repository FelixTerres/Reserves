import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const urlParams = new URLSearchParams(window.location.search);
const nom = urlParams.get("titol")
const foto = urlParams.get("imatge");
const desc = urlParams.get("desc");


let con = document.getElementById("dni")
let cercar = document.getElementById("add-button-add")

cercar.addEventListener("click", function () {
    
})

const appSettings = {
    databaseURL: "https://turisme-menorca-hf-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "reserves")

let titol = document.createElement("h1")
titol.innerHTML = nom;

let imatge = document.createElement("img")
imatge.src = foto;

let descripcio = document.createElement("p")
descripcio.innerHTML = desc;


con.append(titol)
con.append(imatge)
con.append(descripcio)

lista.append(con)


// const ButtonForm = document.getElementById("add-button")
const addButtonEl = document.getElementById("add-button-add");

document.getElementById("Tornar").addEventListener("click", function () {
    window.location.href = "./index.html"
})

addButtonEl.addEventListener("click", function () {
    let formulariA = {

        dni: document.getElementById("dni").value
    }

    push(itemsInDB, formulariA)

    clearInput()
})

function clearInput() {
    document.getElementById("nom").value = ""
    document.getElementById("cognoms").value = ""
    document.getElementById("dni").value = ""
    document.getElementById("dataE").value = ""
    document.getElementById("dataS").value = ""
    document.getElementById("persones").value = ""
    document.getElementById("altres").value = ""
}

