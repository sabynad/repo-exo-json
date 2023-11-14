    //    // #################################### Methode envoie donnee (POST)############################################
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
                                                                      
     postDataFetch();
    //  console.log("Voici les données via fetch: ", dataFetchJson.record);
                                     
    async function postDataFetch () {
    const res = await fetch(`${apiUrl}/b`, {
             method: 'POST',
             headers : {
                'X-Master-Key': keyMaster,
                'Content-Type': 'application/json'
            },
             body: JSON.stringify(joueurs),
            });
    dataFetchJson = await res.json(); 
    return dataFetchJson;             
}                                                                  