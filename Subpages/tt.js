const fs = require('fs');

//let test = document.querySelector('#country-name');

function loadJSON(){
    let loadName;
    loadName="2B";
    //loadName=test.value;



    // read JSON object from file
    fs.readFile(loadName+'test.json', 'utf-8', (err, data) => {
        if (err) {
        throw err;
        }

        // parse JSON object
        const user = JSON.parse(data.toString());

        // print JSON object

        console.log(user);
    });
}
loadJSON();
