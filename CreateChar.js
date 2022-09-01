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

    /*Name = new String;

    force = new float;
    velocity = new float;
    magicPower = new float;
    resistance = new float;
    luck = new float;

    adForce = new float;
    adVelocity = new float;
    adMagicPower = new float;
    adResistance = new float;
    adLuck = new float;

    level = new Int;
    xp = new Float;

    MaxHp = new float;
    Hp = new float;
    MaxMp = new float;
    Mp = new float;*/
    }

}

//Name, force, velocity, magicPower, resistance, luck, adForce, adVelocity, adMagicPower, adResistance, adLuck, level, xp, MaxHp, Hp, MaxMp, Mp

let tempChar = new Character();
let _1d6 = 0;
let _1d6B = 0;
let _2d6 = 0;

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
    tempChar.Name="2B";
    tempChar.force=0;
    tempChar.velocity=0;
    tempChar.magicPower=0;
    tempChar.resistance=0;
    tempChar.luck=0;
    console.log(tempChar);
}

function print(){
    tempChar.Name="2B";
    tempChar.force=0;
    tempChar.velocity=0;
    tempChar.magicPower=0;
    tempChar.resistance=0;
    tempChar.luck=0;
    console.log(tempChar);

    rollDices();
    console.log("2D6 ="+_2d6);
}

print();