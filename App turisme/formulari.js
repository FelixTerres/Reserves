import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://turisme-menorca-hf-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "items")

// const ButtonForm = document.getElementById("add-button")
const addButtonEl = document.getElementById("add-button-add");


const nom = document.getElementById("nom");
const url = document.getElementById("url");
const desc = document.getElementById("desc");
const tipus = document.getElementById("tipus");

addButtonEl.addEventListener("click", function(){
    let formulari = {
        nom: nom.value,
        url: url.value,
        desc: desc.value,
        tipus: tipus.value
    }

    push(itemsInDB,formulari)

    clearInput()
})

function clearInput(){
    nom.value = ""
    url.value = ""
    desc.value = ""
    tipus.value = ""
}

