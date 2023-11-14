                     // #################################### Methode envoie donnee (POST)############################################
const keyMaster = "$2a$10$sIvMxOzunGBB5JXAmSeYjO.3ZdozgJXu7oXypD4UO9GP16Sx6ATBm";
const apiUrl = "https://api.jsonbin.io/v3";
const binId = "654e055b12a5d37659977757";
let infoJson;

                                                               

// console.log("Voici les données via fetch: ", dataFetchJson.record);
                              
async function postFormulaire () {
 const res = await fetch(`${apiUrl}/b`, {
    method: 'POST',
     headers : {
             'Content-Type': 'application/json',
             'X-Master-Key': keyMaster,
     },
    body: JSON.stringify(infoJson),
    });
}
                               
let form = document.querySelector("form");
                               
form.addEventListener("submit", function(event){
    console.log("nimporte quoi");
event.preventDefault();
let recupInfo = new FormData(form);
infoJson = Object.fromEntries(recupInfo);
console.log(infoJson);

 postFormulaire();

 })
                               
                               
                               
                               
                               
                               
                               
                               