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
        titol.innerHTML = e[1].hotel

        let imatge = document.createElement("img")
        imatge.src = e[1].imatge

        let desc = document.createElement("p")
        desc.innerHTML = e[1].desc;

        


        let  nombre = document.createElement("h2")
        nombre.innerHTML = "Nom:" + e[1].nombre

        let cognoms = document.createElement("h2")
        cognoms.innerHTML = "Cognoms:" + e[1].cognoms

        let dni = document.createElement("h2")
        dni.innerHTML = "Cognoms:" + e[1].dni

        let dataE = document.createElement("h3")
        dataE.innerHTML = "Cognoms:" + e[1].dataE
        
        let dataS = document.createElement("h3")
        dataS.innerHTML = "Cognoms:" + e[1].dataS

        let habitacions = document.createElement("h3")
        habitacions.innerHTML = "Cognoms:" + e[1].habitacions

        let persones = document.createElement("h3")
        persones.innerHTML = "Cognoms:" + e[1].persones

        let pensio = document.createElement("h3")
        pensio.innerHTML = "Cognoms:" + e[1].pensio

        let altres = document.createElement("h3")
        altres.innerHTML = "Cognoms:" + e[1].altres



        cont.append(titol);
        cont.append(imatge);
        cont.append(desc);

        cont.append(nombre);
        cont.append(cognoms);
        cont.append(dni);
        cont.append(dataE);
        cont.append(dataS);
        cont.append(habitacions);
        cont.append(persones);
        cont.append(pensio);
        cont.append(altres);

        lista.append(cont)


    }
}

function resultsDNIHotel(dni){
    onValue(hotels, function(snapshot){
        if(snapshot.exists()){
            let resultats = Object.entries(snapshot.val())
            clearList();
            for(let i=0; i<resultats.length; i++){
                addElement(resultats[i],dni);
            }
        }
    })
    
}




