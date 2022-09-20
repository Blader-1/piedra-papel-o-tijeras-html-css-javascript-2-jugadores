const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const PIE = "rock";
const PAP = "paper";
const TIJ = "scissors";


var punto_jugador1;
var punto_jugador2;
var txtj1
var txtj2

var jugador1 = document.getElementById("jugador-01");
var jugador2 = document.getElementById("jugador-02");
jugador1.addEventListener("keyup", (event) => {
    txtj1 = event.target.value;
});
jugador2.addEventListener("keyup", (event) => {
    txtj2 = event.target.value;
});

const m_puntos1 = document.getElementById("puntos1");
const m_puntos2 = document.getElementById("puntos2");

const TIE = 0;
const WIN = 1;
const LOST = 2;

let isPlaying = false;


const playBtn = document.getElementById("boton-play");


    playBtn.addEventListener("click", () => {

        if (txtj1 == undefined) {
            // alert(`Campo player1 vacio`);
        } else if(jugador1 =! undefined && txtj2 == undefined){
             alert(`El Juego ha iniciado para ${txtj1}, Diviertete!!`)
            jugador_01();
        } 
        if(txtj2 == undefined) {
            // alert(`campo del Player2 vacia`);
        }else if(jugador2 =! undefined && txtj1 == undefined){
            alert(`El Juego ha iniciado para ${txtj2}, Diviertete!!`);
            jugador_02();
        }
        if (txtj1 != undefined && txtj2 != undefined){
            alert(`El Juego ah iniciado Para ${txtj1} y ${txtj2}, Feliz Juego!!`);
            jugador_01();
            jugador_02();
        }
    });






const rockBtn = document.getElementById("piedra");
const paperBtn = document.getElementById("papel");
const scissorsBtn = document.getElementById("tijeras");

const pieBtn = document.getElementById("pie");
const papBtn = document.getElementById("pap");
const tijBtn = document.getElementById("tij");

const resultText = document.getElementById("text-inicio");
const userImg = document.getElementById("jugador01-img");
const user2Img = document.getElementById("jugador02-img");
const machineImg = document.getElementById("maquina-img");
const machine2Img = document.getElementById("maquina2-img");


function jugador_01() {


    rockBtn.addEventListener("click", () => {
        play_01(ROCK);
    });
    paperBtn.addEventListener("click", () => {
        play_01(PAPER);
    });
    scissorsBtn.addEventListener("click", () => {
        play_01(SCISSORS);
    });
    
}
// if (jugador1 == null) {
//     //alert("Ingrese el nombre del jugador 1")
// } else if (jugador1 != null) {

// }

function jugador_02() {


    pieBtn.addEventListener("click", () => {
        play_02(PIE);
    });
    papBtn.addEventListener("click", () => {
        play_02(PAP);
    });
    tijBtn.addEventListener("click", () => {
        play_02(TIJ);
    });
}

// function turnos(){

//     if(txtj1 != undefined){
//         play_01();

//     }
// }

function play_01(userOption) {
    if (isPlaying) return;

    isPlaying = true;
    

    userImg.src = "img/" + userOption + ".svg";

    resultText.innerHTML = "Escogiendo!";

    const interval = setInterval(function () {
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".svg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".svg";

        switch (result) {
            case TIE:
                resultText.innerHTML = "Has Empatado!";
                break;
            case WIN:
                // punto_jugador1 += 1;
                // m_puntos1.innerHTML = `${jugador1} puntos: ${punto_jugador1}`;
                resultText.innerHTML = "Ganaste!";
                break;
            case LOST:
                resultText.innerHTML = "Perdiste!";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function play_02(user2Option) {
    if (isPlaying) return;

    isPlaying = true;

    user2Img.src = "img2/" + user2Option + ".svg";

    resultText.innerHTML = "Escogiendo!";

    const interval = setInterval(function () {
        const machine2Option = calcMachine2Option();
        machine2Img.src = "img2/" + machine2Option + ".svg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machine2Option = calcMachine2Option();
        const result = calcResult(user2Option, machine2Option);

        machine2Img.src = "img2/" + machine2Option + ".svg";

        switch (result) {
            case TIE:
                resultText.innerHTML = "Has Empatado!";
                break;
            case WIN:
                // punto_jugador1 += 1;
                // m_puntos1.innerHTML = `${jugador1} puntos: ${punto_jugador1}`;
                resultText.innerHTML = "Ganaste!";
                break;
            case LOST:
                resultText.innerHTML = "Perdiste!";
                break;
        }
        isPlaying = false;
    }, 2000);
}



function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcMachine2Option() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return TIE;

    } else if (userOption === ROCK) {

        if (machineOption === PAPER) return LOST;
        if (machineOption === SCISSORS) return WIN;

    } else if (userOption === PAPER) {

        if (machineOption === SCISSORS) return LOST;
        if (machineOption === ROCK) return WIN;

    } else if (userOption === SCISSORS) {

        if (machineOption === ROCK) return LOST;
        if (machineOption === PAPER) return WIN;

    }
}

