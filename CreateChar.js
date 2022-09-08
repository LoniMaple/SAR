
const fs = require('fs');
class Character {
    
    constructor(Name, force, velocity, magicPower, resistance, luck, adForce, adVelocity, adMagicPower, adResistance, adLuck, level, xp, MaxHp, Hp, MaxMp, Mp){
    
    this.Name = Name;

    this.force = force;
    this.velocity = velocity;
    this.magicPower = magicPower;
    this.resistance = resistance;
    this.luck = luck;

    this.adForce = adForce;
    this.adVelocity = adVelocity;
    this.adMagicPower = adMagicPower;
    this.adResistance = adResistance;
    this.adLuck = adLuck;

    this.level = level;
    this.xp = xp;

    this.MaxHp = MaxHp;
    this.Hp = Hp;
    this.MaxMp = MaxMp;
    this.Mp = Mp;
    }

};
let tempChar = new Character();

let _1d6 = 0;
let _1d6B = 0;
let _2d6 = 0;


//let pipi = document.querySelector('#char-load-name');
//let popo = Document.querySelector('.ppopo')
//const fs = require('mz/fs');
//Name, force, velocity, magicPower, resistance, luck, adForce, adVelocity, adMagicPower, adResistance, adLuck, level, xp, MaxHp, Hp, MaxMp, Mp



function rollDices(){
    let min, max;
    min = 1;
    max = 6;

    //_2d6 = Math.random() * (max - min) + min;
    _1d6 = Math.random() * (max - min) + min;
    _1d6B = Math.random() * (max - min) + min;

    _1d6 = Math.round(_1d6);
    _1d6B = Math.round(_1d6B);

    _2d6=_1d6+_1d6B;

    //_2d6 = Math.round(_2d6);
}

function setBaseStats(){
    tempChar.Name="0";
    //tempChar.Name = user_input_name;
    
    rollDices();
    tempChar.force=_2d6;
    //user_ui_force.value=tempChar.force;

    rollDices();
    tempChar.velocity=_2d6;
    //user_ui_velocity.value=tempChar.velocity;

    rollDices();
    tempChar.magicPower=_2d6;
    //user_ui_magic_power.value=tempChar.magicPower;

    rollDices();
    tempChar.resistance=_2d6;
    //user_ui_resistence.value=tempChar.resistance;

    rollDices();
    tempChar.luck=_2d6;
    //user_ui_luck.value=tempChar.luck;

    tempChar.adForce=0;
    tempChar.adVelocity=0;
    tempChar.adMagicPower=0;
    tempChar.adResistance=0;
    tempChar.adLuck=0;

    tempChar.xp=0;
    tempChar.level=1;


    
    console.log(tempChar);

    //updateScreen();

    //saveJSON();
}

function updateScreen(){
    //let user_input_name = document.querySelector("#char-name");
    //user_input_name.value=tempChar.Name;
}

function saveJSON(){

    const data = JSON.stringify(tempChar);

    // write JSON string to a file
    writeFile(tempChar.Name+'test.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
}

function loadJSON(){

    //user_ui_load_char_name =  document.querySelector("#char-load-name").value;
    let loadName;
    loadName="2B";


    // read JSON object from file
    fs.readFile(loadName+'test.json', 'utf-8', (err, data) => {
        if (err) {
        throw err;
        }

        // parse JSON object
        const user = JSON.parse(data.toString());

        // print JSON object


        tempChar.Name=user_input_name.value;
    
        user_ui_force.value=user.force;
        user_ui_velocity.value=user.velocity;
        user_ui_magic_power.value=user.magicPower;
        user_ui_resistence.value=user.resistance;
        user_ui_luck.value=user.luck;

        console.log(user);
    });
}
function getName (){
    //pipi = document.querySelector('#char-load-name');
    
    return "2Btest";
}

function CheckNameDisponibilityOnJSON(){
    
    let loadName;
    loadName=getName();
    console.log(loadName+'%c nome ', 'background: #7485cb; color: #ff0080');

    // read JSON object from file
    fs.readFile(loadName+'.json', 'utf-8', (err, data) => {
        if (err) {
        throw err;
        }

        //fs.readFile(loadName+'.json').then(contents => console.log(contents)).catch(err => console.error(err));

        console.log(loadName+'%c nome existe ', 'background: #7485cb; color: #1300ff');

        // parse JSON object
        const user = JSON.parse(data.toString());

        // print JSON object


        console.log(user,'background: #8000ff; color: #ffff00');
    });
}

function print(){
    
    //setBaseStats();
    //saveJSON();
    //loadJSON()
    //rollDices();
    CheckNameDisponibilityOnJSON();
    console.log("2D6 = "+_2d6);

}

print();