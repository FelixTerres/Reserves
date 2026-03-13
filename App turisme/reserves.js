import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



let con = document.getElementById("dni")
let cercar = document.getElementById("add-button-add")



const appSettings = {
    databaseURL: "https://turisme-menorca-hf-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const hotels = ref(database, "reservaHotel")
let lista = document.getElementById("R")


function clearList() {
    lista.innerHTML = ""
}


document.getElementById("Tornar").addEventListener("click", function () {
    window.location.href = "./index.html"
})

cercar.addEventListener("click", function () {

    resultsDNIHotel(con.value);
})


function addElement(e,dni){
    
    if(e[1].dni == dni){

        let cont = document.createElement("div")
        cont.classList += "hotel"
        
        let titol = document.createElement("h1")
        titol.innerHTML = e[1].nom

        let imatge = document.createElement("img")
        imatge.src = e[1].url

        let desc = document.createElement("p")
        desc.innerHTML = e[1].desc;

        cont.append(titol);
        cont.append(imatge);
        cont.append(desc);

        lista.append(cont)

    }
}

function resultsDNIHotel(dni){
    onValue(hotels, function(snapshot){
        if(snapshot.exists()){
            let resultats = Object.entries(snapshot.val())
            for(let i=0; i<resultats.length; i++){
                addElement(resultats[i],dni);
            }
        }
    })
    
}




