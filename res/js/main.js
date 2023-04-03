const play = document.getElementById("wrapper");
const pokemon = document.getElementById("pokemon");
const battle = document.getElementById("battle");
const background = document.getElementById("background");
const choose = document.getElementById("choose");
const playerOnePfp = document.getElementById("pfpOne");
const playerOnePfpGirl = document.getElementById("pfpTwo");
const playerTwoPfp = document.getElementById("pfpThree");
const koral = document.getElementById("koral");
const genders = document.getElementById("genders");
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
const pokemonSelector = document.getElementById("pokemonSelector");
const pokemonSelectoro = document.getElementById("pokemonSelectoro");
const pokemonSelectorText = document.getElementById("pokemonSelectorText");
const pokemonSelectorTexto = document.getElementById("pokemonSelectorTexto");
const pokemonSelectorRaketak = document.getElementById("pokemonSelectorRaketak");
const pokemonSelectorBoy = document.getElementById("pokemonSelectorBoy");
const pokemonSelectorGirl = document.getElementById("pokemonSelectorGirl");
const pokemonSelectorKoral = document.getElementById("pokemonSelectorKoral");
const back = document.getElementById("back");
const clear = document.getElementById("clear");
const menu = document.getElementById("menu");
const secret = document.getElementById("secret");
const credit = document.getElementById("credit");
const playerName = document.getElementById("playerName");
const enemyName = document.getElementById("enemyName");
const attacks = document.getElementById("attacks");

const ultimateButton = document.getElementById("ultimateButton");
const playerOneStats = document.getElementById("playerOneStats");
const playerTwoStats = document.getElementById("playerTwoStats");

//pokemoni
const charizard = document.getElementById("charizard");
const venusaur = document.getElementById("venusaur");
const blastoise = document.getElementById("blastoise");
const raichu = document.getElementById("raichu");
const vaporeon = document.getElementById("vaporeon");
const flareon = document.getElementById("flareon");
const jolteon = document.getElementById("jolteon");
const umbreon = document.getElementById("umbreon");
const crobat = document.getElementById("crobat");
const gengar = document.getElementById("gengar");
const shuckle = document.getElementById("shuckle");
const gyarados = document.getElementById("gyarados");
const alakazam = document.getElementById("alakazam");
const politoed = document.getElementById("politoed");
const snorlax = document.getElementById("snorlax");
const dugtrio = document.getElementById("dugtrio");

//typy
const pokemonA = document.getElementById("pokemonA");
const pokemonB = document.getElementById("pokemonB");
const pokemonC = document.getElementById("pokemonC");
const pokemonD = document.getElementById("pokemonD");

let jmenoB = "Ash";
let jmenoG = "Misty";
let enemyPlayer = "<br> Rakeťák Esch";
let koralek = "<br> Rakeťák Korál";

Scene = () => {
pokemon.style.display = "none";
play.style.display = "none";
credit.style.display = "none";
choose.style.display = "flex";
genders.style.display = "flex";
clear.style.display = "flex";
menu.style.display = "flex";
}

Battle = () => {
    background.style.display = "flex";
    battle.style.display = "none";
    genders.style.display = "none";
    choose.style.display = "none";
    back.style.display = "flex";
    attacks.style.display = "flex";
    ultimateButton.style.display = "flex";
    playerOneStats.style.display = "block";
    playerTwoStats.style.display = "block";
    attackUltimate.style.display = "none";
    clear.style.display = "none";
    menu.style.display = "none";
    secret.style.display = "none";
    pokemonSelectorText.style.display = "none";
    pokemonSelectorTexto.style.display = "none";
    pokemonSelectorRaketak.style.display = "none";
    pokemonSelectorGirl.style.display = "none";
    pokemonSelectorBoy.style.display = "none";
    pokemonSelectorKoral.style.display = "none";
    pokemonSelector.style.border = "none";
    pokemonSelectoro.style.border = "none";    

}

Boy = () => {
   playerOnePfp.style.display = "flex";
   playerOnePfpGirl.style.display = "none";
   playerOne.style.display = "flex";
   pokemonSelectorBoy.style.display = "flex";
   pokemonSelectorGirl.style.display = "none";
   playerName.innerHTML = `Jméno: ${jmenoB}`;
   charizard.style.display= "none";
    venusaur.style.display= "none";
    blastoise.style.display= "none";
    raichu.style.display= "none";
    vaporeon.style.display= "none";
    umbreon.style.display= "none";
    flareon.style.display= "none";
    jolteon.style.display= "none";
}
Girl = () => {
    playerOnePfpGirl.style.display = "flex";
    playerOnePfp.style.display = "none";
    playerOne.style.display = "flex";
    pokemonSelectorGirl.style.display = "flex";
    pokemonSelectorBoy.style.display = "none";
    playerName.innerHTML = `Jméno: ${jmenoG}`;
    charizard.style.display= "none";
    venusaur.style.display= "none";
    blastoise.style.display= "none";
    raichu.style.display= "none";
    vaporeon.style.display= "none";
    umbreon.style.display= "none";
    flareon.style.display= "none";
    jolteon.style.display= "none";
}
Enemy = () => {
    playerTwoPfp.style.display = "flex";
    koral.style.display = "none";
    playerTwo.style.display = "flex";
    battle.style.display = "flex";
    pokemonSelectorRaketak.style.display = "flex";
    pokemonSelectorKoral.style.display = "none";
    enemyName.innerHTML = `Jméno: ${enemyPlayer}`;
    snorlax.style.display= "none";
    dugtrio.style.display= "none";
    gengar.style.display= "none";
    crobat.style.display= "none";
    shuckle.style.display= "none";
    gyarados.style.display= "none";
    politoed.style.display= "none";
    alakazam.style.display= "none";
}
Secret = () => {
    playerTwoPfp.style.display = "none";
    koral.style.display = "flex";
    playerTwo.style.display = "flex";
    pokemonSelectorKoral.style.display = "flex";
    pokemonSelectorRaketak.style.display = "none";
    enemyName.innerHTML = `Jméno: ${koralek}`;
    snorlax.style.display= "none";
    dugtrio.style.display= "none";
    gengar.style.display= "none";
    crobat.style.display= "none";
    shuckle.style.display= "none";
    gyarados.style.display= "none";
    politoed.style.display= "none";
    alakazam.style.display= "none";
}

secret.style.display = "none";
function showStuff() {
    secret.style.display = "inline";
}

function myFunction() {
    window.location = "index.html"
}

setTimeout(showStuff,10000);

Clear = () => {
    playerOnePfp.style.display = "none";
    playerOnePfpGirl.style.display = "none";
    playerTwoPfp.style.display = "none";
    koral.style.display = "none";
    playerOne.style.display = "none";
    playerTwo.style.display = "none";
}
Back = () => {
    battle.style.display = "flex";
    choose.style.display = "flex";
    genders.style.display = "flex";
    background.style.display = "none";
    back.style.display = "none";
    attacks.style.display = "none";
    clear.style.display = "flex";
    secret.style.display = "flex";
    menu.style.display = "flex";
    charizard.style.display= "none";
    venusaur.style.display= "none";
    blastoise.style.display= "none";
    raichu.style.display= "none";
    vaporeon.style.display= "none";
    umbreon.style.display= "none";
    flareon.style.display= "none";
    jolteon.style.display= "none";
    snorlax.style.display= "none";
    dugtrio.style.display= "none";
    gengar.style.display= "none";
    crobat.style.display= "none";
    shuckle.style.display= "none";
    gyarados.style.display= "none";
    politoed.style.display= "none";
    alakazam.style.display= "none";
    playerOneStats.style.display = "none";
    playerTwoStats.style.display = "none";
    ultimateButton.style.display= "none";
    playerOne.style.display= "flex";
    playerTwo.style.display= "flex";
    pokemonSelector.style.border = "3px solid black";
    pokemonSelectoro.style.border = "3px solid black";
    pokemonSelectorText.style.display= "flex";
    pokemonSelectorTexto.style.display= "flex";
    pokemonSelectorRaketak.style.display = "flex";
    pokemonSelectorKoral.style.display = "flex";
    
    if(pokemonSelectorBoy.style.display == "flex"){
        pokemonSelectorGirl.style.display = "none";
        pokemonSelectorBoy.style.display = "flex";
    } else{
        pokemonSelectorGirl.style.display = "flex";
        pokemonSelectorBoy.style.display = "none";
    }
    if(pokemonSelectorRaketak.style.display == "flex"){
        pokemonSelectorKoral.style.display = "none";
        pokemonSelectorRaketak.style.display = "flex";
    } else{
        pokemonSelectorKoral.style.display = "flex";
        pokemonSelectorRaketak.style.display = "none";
    }
    
}

let hp = 180;
let goodHp = 180;

const playerOneName = document.getElementById("playerOneName");
const playerOneHp = document.getElementById("playerOneHp");
//pokemoni hodny
let pokemonGood = ["Charizard","Blastoise","Raichu","Venusaur","Flareon","Vaporeon","Jolteon","Umbreon"];
                
    
Char = () => {
    charizard.style.display= "flex";
    venusaur.style.display= "none";
    blastoise.style.display= "none";
    raichu.style.display= "none";
    vaporeon.style.display= "none";
    umbreon.style.display= "none";
    flareon.style.display= "none";
    jolteon.style.display= "none";
    playerOneName.innerHTML = `Pokemon: ${pokemonGood[0]}`;
    playerOneHp.innerHTML = `HP: ${goodHp}`;
}
Blas = () => {
    charizard.style.display= "none";
    venusaur.style.display= "none";
    blastoise.style.display= "flex";
    raichu.style.display= "none";
    vaporeon.style.display= "none";
    umbreon.style.display= "none";
    flareon.style.display= "none";
    jolteon.style.display= "none";
    playerOneName.innerHTML = `Pokemon: ${pokemonGood[1]}`;
    playerOneHp.innerHTML = `HP: ${goodHp}`;
}
Raich = () => {
    charizard.style.display= "none";
    venusaur.style.display= "none";
    blastoise.style.display= "none";
    raichu.style.display= "flex";
    vaporeon.style.display= "none";
    umbreon.style.display= "none";
    flareon.style.display= "none";
    jolteon.style.display= "none";
    playerOneName.innerHTML = `Pokemon: ${pokemonGood[2]}`;
    playerOneHp.innerHTML = `HP: ${goodHp}`;
}
Venu = () => {
    charizard.style.display= "none";
    venusaur.style.display= "flex";
    blastoise.style.display= "none";
    raichu.style.display= "none";
    vaporeon.style.display= "none";
    umbreon.style.display= "none";
    flareon.style.display= "none";
    jolteon.style.display= "none";
    playerOneName.innerHTML = `Pokemon: ${pokemonGood[3]}`;
    playerOneHp.innerHTML = `HP: ${goodHp}`;
}
Flar = () => {
    charizard.style.display= "none";
    venusaur.style.display= "none";
    blastoise.style.display= "none";
    raichu.style.display= "none";
    vaporeon.style.display= "none";
    umbreon.style.display= "none";
    flareon.style.display= "flex";
    jolteon.style.display= "none";
    playerOneName.innerHTML = `Pokemon: ${pokemonGood[4]}`;
    playerOneHp.innerHTML = `HP: ${goodHp}`;
}
Vapo = () => {
    charizard.style.display= "none";
    venusaur.style.display= "none";
    blastoise.style.display= "none";
    raichu.style.display= "none";
    vaporeon.style.display= "flex";
    umbreon.style.display= "none";
    flareon.style.display= "none";
    jolteon.style.display= "none";
    playerOneName.innerHTML = `Pokemon: ${pokemonGood[5]}`;
    playerOneHp.innerHTML = `HP: ${goodHp}`;
}
Jolt = () => {
    charizard.style.display= "none";
    venusaur.style.display= "none";
    blastoise.style.display= "none";
    raichu.style.display= "none";
    vaporeon.style.display= "none";
    umbreon.style.display= "none";
    flareon.style.display= "none";
    jolteon.style.display= "flex";
    playerOneName.innerHTML = `Pokemon: ${pokemonGood[6]}`;
    playerOneHp.innerHTML = `HP: ${goodHp}`;
}
Umbr = () => {
    charizard.style.display= "none";
    venusaur.style.display= "none";
    blastoise.style.display= "none";
    raichu.style.display= "none";
    vaporeon.style.display= "none";
    umbreon.style.display= "flex";
    flareon.style.display= "none";
    jolteon.style.display= "none";
    playerOneName.innerHTML = `Pokemon: ${pokemonGood[7]}`;
    playerOneHp.innerHTML = `HP: ${goodHp}`;
}


const playerTwoName = document.getElementById("playerTwoName");
const playerTwoHp = document.getElementById("playerTwoHp");

//pokemoni zly
let pokemonBad = ["Politoed","Crobat","Gengar","Alakazam","Shuckle","Dugtrio","Snorlax","Gyarados"];

Poli = () => {
    snorlax.style.display= "none";
    dugtrio.style.display= "none";
    gengar.style.display= "none";
    crobat.style.display= "none";
    shuckle.style.display= "none";
    gyarados.style.display= "none";
    politoed.style.display= "flex";
    alakazam.style.display= "none";
    playerTwoName.innerHTML = `Pokemon: ${pokemonBad[0]}`;
    playerTwoHp.innerHTML = `HP: ${hp}`;
}
Crob = () => {
    snorlax.style.display= "none";
    dugtrio.style.display= "none";
    gengar.style.display= "none";
    crobat.style.display= "flex";
    shuckle.style.display= "none";
    gyarados.style.display= "none";
    politoed.style.display= "none";
    alakazam.style.display= "none";
    playerTwoName.innerHTML = `Pokemon: ${pokemonBad[1]}`;
    playerTwoHp.innerHTML = `HP: ${hp}`;
}
Geng = () => {
    snorlax.style.display= "none";
    dugtrio.style.display= "none";
    gengar.style.display= "flex";
    crobat.style.display= "none";
    shuckle.style.display= "none";
    gyarados.style.display= "none";
    politoed.style.display= "none";
    alakazam.style.display= "none";
    playerTwoName.innerHTML = `Pokemon: ${pokemonBad[2]}`;
    playerTwoHp.innerHTML = `HP: ${hp}`;
}
Alak = () => {
    snorlax.style.display= "none";
    dugtrio.style.display= "none";
    gengar.style.display= "none";
    crobat.style.display= "none";
    shuckle.style.display= "none";
    gyarados.style.display= "none";
    politoed.style.display= "none";
    alakazam.style.display= "flex";
    playerTwoName.innerHTML = `Pokemon: ${pokemonBad[3]}`;
    playerTwoHp.innerHTML = `HP: ${hp}`;
}
Shuc = () => {
    snorlax.style.display= "none";
    dugtrio.style.display= "none";
    gengar.style.display= "none";
    crobat.style.display= "none";
    shuckle.style.display= "flex";
    gyarados.style.display= "none";
    politoed.style.display= "none";
    alakazam.style.display= "none";
    playerTwoName.innerHTML = `Pokemon: ${pokemonBad[4]}`;
    playerTwoHp.innerHTML = `HP: ${hp}`;
}
Dugt = () => {
    snorlax.style.display= "none";
    dugtrio.style.display= "flex";
    gengar.style.display= "none";
    crobat.style.display= "none";
    shuckle.style.display= "none";
    gyarados.style.display= "none";
    politoed.style.display= "none";
    alakazam.style.display= "none";
    playerTwoName.innerHTML = `Pokemon: ${pokemonBad[5]}`;
    playerTwoHp.innerHTML = `HP: ${hp}`;
}
Snor = () => {
    snorlax.style.display= "flex";
    dugtrio.style.display= "none";
    gengar.style.display= "none";
    crobat.style.display= "none";
    shuckle.style.display= "none";
    gyarados.style.display= "none";
    politoed.style.display= "none";
    alakazam.style.display= "none";
    playerTwoName.innerHTML = `Pokemon: ${pokemonBad[6]}`;
    playerTwoHp.innerHTML = `HP: ${hp}`;
}

Gyar = () => {
    snorlax.style.display= "none";
    dugtrio.style.display= "none";
    gengar.style.display= "none";
    crobat.style.display= "none";
    shuckle.style.display= "none";
    gyarados.style.display= "flex";
    politoed.style.display= "none";
    alakazam.style.display= "none";
    playerTwoName.innerHTML = `Pokemon: ${pokemonBad[7]}`;
    playerTwoHp.innerHTML = `HP: ${hp}`;
} 
    //utoky
    const attackBasic = document.getElementById("attackOne");
    const attackSuper = document.getElementById("attackTwo");
    const attackUltimate = document.getElementById("attackThree");

    const victory = document.getElementById("victory");
    const defeat = document.getElementById("defeat");
    const restart = document.getElementById("restart");

    let basicAttack = 10;
    let superAttack = 30;
    let ultimateAttack = 100;

    let ultimate = 0;

    
    Basic = () => {
        hp -= basicAttack;
        playerTwoHp.innerHTML = `HP: ${hp}`;
       
        if(playerOneHp.innerHTML = goodHp){
            damageToPlayer = setInterval(() => {
                goodHp -= 10;
                playerOneHp.innerHTML = `HP: ${goodHp}`;if (hp <= 0 && goodHp > 0){
                victory.style.display = "flex";
                restart.style.display = "flex";
            } if (hp > 0 && goodHp <=0){
                defeat.style.display = "flex";
                restart.style.display = "flex";
            }
              }, 3000);
              
    }
}
    Super = () => {
        hp -= superAttack;
        playerTwoHp.innerHTML = `HP: ${hp}`;
        if(playerOneHp.innerHTML = goodHp){
            damageToPlayer = setInterval(() => {
                goodHp -= 10;
                playerOneHp.innerHTML = `HP: ${goodHp}`;
                if (hp <= 0 && goodHp > 0){
                victory.style.display = "flex";
                restart.style.display = "flex";
            } if (hp > 0 && goodHp <=0){
                defeat.style.display = "flex";
                restart.style.display = "flex";
            }
              }, 3000);
              
    }
    }
    Ultimatka = () => {
        ultimate++;
        console.log(ultimate);

        if(ultimate >= 10){
        attackUltimate.style.display = "flex";
    }
    }
    
    Ultimate = () => {
        attackUltimate.style.display = "none";
            hp -= ultimateAttack;
            playerTwoHp.innerHTML = `HP: ${hp}`;
        if(playerOneHp.innerHTML = goodHp){
            damageToPlayer = setInterval(() => {
                goodHp -= 10;
                playerOneHp.innerHTML = `HP: ${goodHp}`;
            if (hp <= 0 && goodHp > 0){
                victory.style.display = "flex";
                restart.style.display = "flex";
            } if (hp > 0 && goodHp <=0){
                defeat.style.display = "flex";
                restart.style.display = "flex";
            }
              }, 3000);
              
            }
    }
    Restart = () => {
            location.reload();
        }
