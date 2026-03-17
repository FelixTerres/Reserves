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
const restaurants = ref(database, "reservaRest")
const activitats = ref(database, "reservaActv")
let listaH = document.getElementById("R")
let listaL = document.getElementById("L")
let listaA = document.getElementById("C")

function clearListH() {
    listaH.innerHTML = ""
}

function clearListL() {
    listaL.innerHTML = ""
}

function clearListA() {
    listaA.innerHTML = ""
}


document.getElementById("Tornar").addEventListener("click", function () {
    window.location.href = "./index.html"
})

cercar.addEventListener("click", function () {

    resultsDNIHotel(con.value);
})


function addElement(e,dni){
    
    if(e[1].dni == dni){

        let contH = document.createElement("div")
        contH.classList += "hotel"
        
        let titol = document.createElement("h1")
        titol.innerHTML = e[1].hotel

        let imatge = document.createElement("img")
        imatge.src = e[1].imatge

        let desc = document.createElement("p")
        desc.innerHTML = e[1].desc;

        


        let  nombre = document.createElement("h2")
        nombre.innerHTML = "Nom: " + e[1].nombre

        let cognoms = document.createElement("h2")
        cognoms.innerHTML = "Cognoms: " + e[1].cognoms

        let dni = document.createElement("h2")
        dni.innerHTML = "DNI: " + e[1].dni

        let dataE = document.createElement("h3")
        dataE.innerHTML = "Data d'entrada: " + e[1].dataE
        
        let dataS = document.createElement("h3")
        dataS.innerHTML = "Data de sortida: " + e[1].dataS

        let habitacions = document.createElement("h3")
        habitacions.innerHTML = "Nº d'habitacions: " + e[1].habitacions

        let persones = document.createElement("h3")
        persones.innerHTML = "Nº de persones: " + e[1].persones

        let pensio = document.createElement("h3")
        pensio.innerHTML = "Tipus de pensió: " + e[1].pensio

        let altres = document.createElement("h3")
        altres.innerHTML = "Altra informació a tenir en compte: " + e[1].altres



        contH.append(titol);
        contH.append(imatge);
        contH.append(desc);

        contH.append(nombre);
        contH.append(cognoms);
        contH.append(dni);
        contH.append(dataE);
        contH.append(dataS);
        contH.append(habitacions);
        contH.append(persones);
        contH.append(pensio);
        contH.append(altres);

        listaH.append(contH)


    }
}


function addElement(e,dni){
    
    if(e[1].dni == dni){

        let contL = document.createElement("div")
        contL.classList += "restaurant"
        
        let titol = document.createElement("h1")
        titol.innerHTML = e[1].hotel

        let imatge = document.createElement("img")
        imatge.src = e[1].imatge

        let desc = document.createElement("p")
        desc.innerHTML = e[1].desc;

        


        let  nombre = document.createElement("h2")
        nombre.innerHTML = "Nom: " + e[1].nombre

        let cognoms = document.createElement("h2")
        cognoms.innerHTML = "Cognoms: " + e[1].cognoms

        let dni = document.createElement("h2")
        dni.innerHTML = "DNI: " + e[1].dni

        let dataE = document.createElement("h3")
        dataE.innerHTML = "Data d'entrada: " + e[1].dataE
        
        let dataS = document.createElement("h3")
        dataS.innerHTML = "Data de sortida: " + e[1].dataS

        let habitacions = document.createElement("h3")
        habitacions.innerHTML = "Nº d'habitacions: " + e[1].habitacions

        let persones = document.createElement("h3")
        persones.innerHTML = "Nº de persones: " + e[1].persones

        let pensio = document.createElement("h3")
        pensio.innerHTML = "Tipus de pensió: " + e[1].pensio

        let altres = document.createElement("h3")
        altres.innerHTML = "Altra informació a tenir en compte: " + e[1].altres



        contL.append(titol);
        contL.append(imatge);
        contL.append(desc);

        contL.append(nombre);
        contL.append(cognoms);
        contL.append(dni);
        contL.append(dataE);
        contL.append(dataS);
        contL.append(habitacions);
        contL.append(persones);
        contL.append(pensio);
        contL.append(altres);

        listaL.append(contL)


    }
}


function resultsDNIHotel(dni){
    onValue(hotels, function(snapshot){
        if(snapshot.exists()){
            let resultats = Object.entries(snapshot.val())
            clearListH();
            for(let i=0; i<resultats.length; i++){
                addElement(resultats[i],dni);
            }
        }
    })
    
}



function resultsDNIHotel(dni){
    onValue(restaurants, function(snapshot){
        if(snapshot.exists()){
            let resultats = Object.entries(snapshot.val())
            clearListL();
            for(let i=0; i<resultats.length; i++){
                addElement(resultats[i],dni);
            }
        }
    })
    
}

function resultsDNIHotel(dni){
    onValue(activitats, function(snapshot){
        if(snapshot.exists()){
            let resultats = Object.entries(snapshot.val())
            clearListA();
            for(let i=0; i<resultats.length; i++){
                addElement(resultats[i],dni);
            }
        }
    })
    
}




