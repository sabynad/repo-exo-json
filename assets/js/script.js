console.log("code charge");

                        


                                // #################################### Methode recuperation donnee (GET) ########################################  

// const keyMaster = "$2a$10$sIvMxOzunGBB5JXAmSeYjO.3ZdozgJXu7oXypD4UO9GP16Sx6ATBm";
// const apiUrl = "https://api.jsonbin.io/v3";
// const binId = "654e055b12a5d37659977757";
// let dataFetchJson;



// await getDataFetchBis();
// console.log("Voici les données via fetch: ", dataFetchJson.record);

// async function getDataFetchBis () {
//     const res = await fetch(apiUrl+"/b/"+binId, {
//         method: 'GET',
//         headers :{
//             'X-Master-Key': keyMaster,
//         }
//     });
//     dataFetchJson = await res.json(); 
// }




                                // #################################### Methode envoie donnee (POST)###############################################

const keyMaster = "$2a$10$sIvMxOzunGBB5JXAmSeYjO.3ZdozgJXu7oXypD4UO9GP16Sx6ATBm";
const apiUrl = "https://api.jsonbin.io/v3";
const binId = "654e055b12a5d37659977757";
let dataFetchJson;
const joueurs = {
    "joueurs" : [
        {
            nom: "zinedine",
            prenom: "zidane",
            poste: "milieu de terrain"
        },
        {
            nom: "ronaldo",
            prenom: "cristiano",
            poste: "milieu gauche"
        },
        {
            nom: "ronaldo",
            prenom: "nazaret",
            poste: "attaquant"
        },
        {
            nom: "ramos",
            prenom: "sergio",
            poste: "defenseur"
        },
    ]                            
}                               
                                
getDataFetchBis();
// console.log("Voici les données via fetch: ", dataFetchJson.record);
 
async function getDataFetchBis () {
    const res = await fetch(apiUrl+"/b", {
        method: 'POST',
        headers :{
            'X-Master-Key': keyMaster,
            'content-Type': 'application/json',
    },
        body: JSON.stringify(joueurs),
    });
    dataFetchJson = await res.json(); 
    return dataFetchJson;
}


//  let formulaire = document.querySelector("form");
// let btnEnvoyer = document.querySelector("btn");

// formulaire.addEventListener("submit", async (event) => {
//     event.preventDefault();
//     let resultat = btnEnvoyer.value;

// console.log("valeur boutton submit est : ", resultat);
// let dataFetchJson = await getDataFetchBis();
//   console.log("Voici les données via fetch: ", dataFetchJson.record);
// });







