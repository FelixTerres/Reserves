import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://turisme-menorca-hf-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "items")
let lista = document.getElementById("r")


function clearList() {
    lista.innerHTML = ""
}

function addElement(e) {

    if (e[1].tipus == "Restaurant") {

        let cont = document.createElement("div")
        cont.classList += "rest"
        
        let titol = document.createElement("h1")
        titol.innerHTML = e[1].nom

        let imatge = document.createElement("img")
        imatge.src = e[1].url

        let desc = document.createElement("p")
        desc.innerHTML = e[1].desc;

        let b = document.createElement("button");
        b.classList += "button"
        b.innerHTML = "RESERVAR"
        b.addEventListener("click", function(){
            window.location.href = "./reservaRest.html?titol="+e[1].nom+"&imatge="+e[1].url+"&desc="+e[1].desc
        })

        cont.append(titol);
        cont.append(imatge);
        cont.append(desc);
        cont.append(b);

        lista.append(cont)

    }
}

onValue(itemsInDB, function (snapshot) {
    if (snapshot.exists()) {
        let resultats = Object.entries(snapshot.val())
        clearList();
        for (let i = 0; i < resultats.length; i++) {
            addElement(resultats[i]);
        }
    }
})

document.getElementById("Tornar").addEventListener("click", function(){
    window.location.href = "./index.html"
})