console.log("code charge");

                        

                                // #################################### Methode recuperation donnee (GET) ########################################  

const keyMaster = "$2a$10$sIvMxOzunGBB5JXAmSeYjO.3ZdozgJXu7oXypD4UO9GP16Sx6ATBm";
const apiUrl = "https://api.jsonbin.io/v3";
const binId = "654e055b12a5d37659977757";
let dataFetchJson;



await getDataFetch();
console.log("Voici la liste: ", dataFetchJson.record);

async function getDataFetch () {
    const res = await fetch(apiUrl+"/b/"+binId, {
        method: 'GET',
        headers :{
            'X-Master-Key': keyMaster,
        }
    });
    dataFetchJson = await res.json(); 
}




 