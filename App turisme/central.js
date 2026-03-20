import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const modal = document.getElementById("welcome-modal");
const closeModalBtn = document.getElementById("close-modal");

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

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
})



function clearInput(){
    inputFieldEl.value = ""
}

function clearList(){
    lista.innerHTML = ""
}

function addElement(e){

let titol = document.createElement("h1")
titol.innerHTML = e[1].nom

let imatge = document.createElement("img")
imatge.src = e[1].url

let desc = document.createElement("p")
desc.innerHTML = e[1].desc;

lista.append(titol);
lista.append(imatge);
lista.append(desc);

/*
    if(e[1].tipus == "y"){
    let lista = document.getElementById("lista")

    let nom = document.createElement("h1")
    let foto = document.createElement("img")
    let desc = document.createElement("p")

    nom = e[1].nom
    foto = e[1].url
    desc = e[1].desc
    
    lista.append(nom);
    lista.append(foto);
    lista.append(desc);

    
    }
    */
}

onValue(itemsInDB, function(snapshot){
    if(snapshot.exists()){
        let resultats = Object.entries(snapshot.val())
        console.log (resultats)
        clearList();
        for(let i=0; i<resultats.length; i++){
            addElement(resultats[i]);
        }
    }else{
        lista.innerHTML = "Afegeix al formulari"
    }
})







