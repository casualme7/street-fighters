const volumeBar = document.querySelector("#volumeBar");
let volumeText = document.querySelector(".volumeText");

theme = new Audio("Sounds/themeMusicLowVolume.mp3")
theme.volume = 0.1;
theme1 = new Audio("Sounds/incorrectHIGHER2.mp3")
theme1.volume = 0.1;
theme2 = new Audio("Sounds/SELECT.mp3")
theme2.volume = 1;
theme3 = new Audio("Sounds/SELECT.mp3")
theme3.volume = 1;
fight = new Audio("Sounds/fight.mp3")
fight.volume = 1;
laugh = new Audio("Sounds/laugh.mp3")
laugh.volume = 0.2;
fatality = new Audio("Sounds/fatality.mp3")
fatality.volume = 0.7;
gong = new Audio("Sounds/gongLower.mp3")
gong.volume = 0.4;

console.log("Trebalo mi je lepih 5 sati da napravim ovo...")

var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

volumeBar.addEventListener("change", function () {
    theme.volume = this.value / 10;
    theme1.volume = this.value / 10;
    volumeText.innerText = this.value;
})

const userInput = document.querySelector("#userInput")
// let username = prompt("Hey, whats up, please enter your username!");
const userWelcome = document.querySelector("#userWelcome");
let username = Math.ceil(Math.random() * 1000)
// Ako budem hteo random RNG username

function rgb() {
    let r = Math.ceil(Math.random() * 254);
    let g = Math.ceil(Math.random() * 254);
    let b = Math.ceil(Math.random() * 254);
    userWelcome.style.transition = "1000ms";
    userWelcome.style.border = `4px solid rgb(${r},${g},${b})`;
    // userWelcome.style.backgroundColor = `rgba(${r},${g},${b}, 0.500)`;
}

const mainContent = document.querySelector("#mainContent");

setInterval(function () {
    rgb();
}, 2000)
userWelcome.innerHTML = `Welcome: <span style="color: red">guest_${username}</span>`;

let newUsername = "";
const startButton = document.querySelector("#startButton")
startButton.addEventListener("click", function () {
    newUsername = userInput.value.toUpperCase();
    if (newUsername.length >= 10 || newUsername.length <= 1 || newUsername.indexOf(" ") !== -1) {
        userInput.value = "";
        userInput.placeholder = " 2-9 chars , no spaces!"
        userInput.style.border = "4px solid red"
        theme1.play()
    }
    else {
        startButton.disabled = true;
        userWelcome.innerHTML = `Welcome: <span style="color: red">${newUsername}</span>`;
        userInput.value = "";
        userInput.placeholder = "    LOADED, thanks!"
        mainContent.style.display = "block";
        userInput.style.border = "4px solid black"
        theme.play();
        openFullscreen()
    }
})

chunli = new Audio("Sounds/characters/chunli.mp3")
chunli.volume = 0.4;
dhalsim = new Audio("Sounds/characters/dhalsim.mp3")
dhalsim.volume = 0.4;
fang = new Audio("Sounds/characters/fang.mp3")
fang.volume = 0.4;
ken = new Audio("Sounds/characters/ken.mp3")
ken.volume = 0.4;
laura = new Audio("Sounds/characters/laura.mp3")
laura.volume = 0.4;
mrbison = new Audio("Sounds/characters/mrbison.mp3")
mrbison.volume = 0.4;
neccali = new Audio("Sounds/characters/neccali.mp3")
neccali.volume = 0.4;
rashid = new Audio("Sounds/characters/rashid.mp3")
rashid.volume = 0.4;
ryu = new Audio("Sounds/characters/ryu.mp3")
ryu.volume = 0.4;
vega = new Audio("Sounds/characters/vega.mp3")
vega.volume = 0.4;
zengief = new Audio("Sounds/characters/zengief.mp3")
zengief.volume = 0.4;

const voiceBar = document.querySelector("#voiceBar");
const voiceText = document.querySelector(".voiceText");

voiceBar.addEventListener("change", function () {
    chunli.volume = this.value / 10;
    dhalsim.volume = this.value / 10;
    fang.volume = this.value / 10;
    ken.volume = this.value / 10;
    laura.volume = this.value / 10;
    mrbison.volume = this.value / 10;
    neccali.volume = this.value / 10;
    rashid.volume = this.value / 10;
    ryu.volume = this.value / 10;
    vega.volume = this.value / 10;
    zengief.volume = this.value / 10;
    voiceText.innerText = this.value;
})

const redText = document.querySelector("#redText")
const blueText = document.querySelector("#blueText")

const aleksandar1 = document.querySelector("#aleksandar1")
const boki1 = document.querySelector("#boki1")
const djole1 = document.querySelector("#djole1")
const jelena1 = document.querySelector("#jelena1")
const miljan1 = document.querySelector("#miljan1")
const nikola1 = document.querySelector("#nikola1")
const vlada1 = document.querySelector("#vlada1")
const kristijan1 = document.querySelector("#kristijan1")
const marija1 = document.querySelector("#marija1")
const vukasinM1 = document.querySelector("#vukasinM1")
const darko1 = document.querySelector("#darko1")

const questionRed = document.querySelector(".questionRed")

aleksandar1.addEventListener("click", function () {
    questionRed.src = "Pictures/Players/aleksandar.png"
    theme2.play();
    dhalsim.play();
    redText.innerText = "Aca The Destroyer";
})

boki1.addEventListener("click", function () {
    questionRed.src = "Pictures/Players/boki.png"
    theme3.play();
    fang.play();
    redText.innerText = "Boki K.O King";
})

djole1.addEventListener("click", function () {
    questionRed.src = "Pictures/Players/djole.png"
    theme2.play();
    ken.play();
    redText.innerText = "Big DJOLE";
})

jelena1.addEventListener("click", function () {
    questionRed.src = "Pictures/Players/jelena.png"
    theme3.play();
    chunli.play();
    redText.innerText = "MiGHTY Jelena"
})

miljan1.addEventListener("click", function () {
    questionRed.src = "Pictures/Players/miljan.png"
    theme2.play();
    mrbison.play();
    redText.innerText = "lil' Micky";
})

nikola1.addEventListener("click", function () {
    questionRed.src = "Pictures/Players/nikola.png"
    theme3.play();
    neccali.play();
    redText.innerText = "Amazing KennY"
})

vlada1.addEventListener("click", function () {
    questionRed.src = "Pictures/Players/vlada.png"
    theme2.play();
    rashid.play();
    redText.innerText = "Vlada D Professor"
})

kristijan1.addEventListener("click", function () {
    questionRed.src = "Pictures/Players/kristian.png"
    theme2.play();
    ryu.play();
    redText.innerText = "Iron Fist Kiki";
})

marija1.addEventListener("click", function () {
    questionRed.src = "Pictures/Players/marija.png"
    theme2.play();
    laura.play();
    redText.innerText = "Meri Krismas";
})

vukasinM1.addEventListener("click", function () {
    questionRed.src = "Pictures/Players/vukasinM.png"
    theme2.play();
    vega.play();
    redText.innerText = "Wolf-kasin";
})

darko1.addEventListener("click", function () {
    questionRed.src = "Pictures/Players/darko.png"
    theme2.play();
    zengief.play();
    redText.innerText = "Dark Dare";
})

const aleksandar2 = document.querySelector("#aleksandar2")
const boki2 = document.querySelector("#boki2")
const djole2 = document.querySelector("#djole2")
const jelena2 = document.querySelector("#jelena2")
const miljan2 = document.querySelector("#miljan2")
const nikola2 = document.querySelector("#nikola2")
const vlada2 = document.querySelector("#vlada2")
const kristijan2 = document.querySelector("#kristijan2")
const marija2 = document.querySelector("#marija2")
const vukasinM2 = document.querySelector("#vukasinM2")
const darko2 = document.querySelector("#darko2")

const questionBlue = document.querySelector(".questionBlue")

aleksandar2.addEventListener("click", function () {
    questionBlue.src = "Pictures/Players/aleksandar.png"
    theme2.play();
    dhalsim.play();
    blueText.innerText = "Aca The Destroyer";
})

boki2.addEventListener("click", function () {
    questionBlue.src = "Pictures/Players/boki.png"
    theme3.play();
    fang.play();
    blueText.innerText = "Boki K.O King";
})

djole2.addEventListener("click", function () {
    questionBlue.src = "Pictures/Players/djole.png"
    theme2.play();
    ken.play();
    blueText.innerText = "Big DJOLE";
})

jelena2.addEventListener("click", function () {
    questionBlue.src = "Pictures/Players/jelena.png"
    theme3.play();
    chunli.play();
    blueText.innerText = "MiGHTY Jelena"
})

miljan2.addEventListener("click", function () {
    questionBlue.src = "Pictures/Players/miljan.png"
    theme2.play();
    mrbison.play();
    blueText.innerText = "lil' Micky";
})

nikola2.addEventListener("click", function () {
    questionBlue.src = "Pictures/Players/nikola.png"
    theme3.play();
    neccali.play();
    blueText.innerText = "Amazing KennY"
})

vlada2.addEventListener("click", function () {
    questionBlue.src = "Pictures/Players/vlada.png"
    theme2.play();
    rashid.play();
    blueText.innerText = "Vlada D Professor"
})

kristijan2.addEventListener("click", function () {
    questionBlue.src = "Pictures/Players/kristian.png"
    theme2.play();
    ryu.play();
    blueText.innerText = "Iron Fist Kiki";
})

marija2.addEventListener("click", function () {
    questionBlue.src = "Pictures/Players/marija.png"
    theme2.play();
    laura.play();
    blueText.innerText = "Meri Krismas";
})

vukasinM2.addEventListener("click", function () {
    questionBlue.src = "Pictures/Players/vukasinM.png"
    theme2.play();
    vega.play();
    blueText.innerText = "Wolf-kasin";
})

darko2.addEventListener("click", function () {
    questionBlue.src = "Pictures/Players/darko.png"
    theme2.play();
    zengief.play();
    blueText.innerText = "Dark Dare";
})

const VSdiv = document.querySelector("#VSdiv")
const redDiv = document.querySelector(".redDiv")
const blueDiv = document.querySelector(".blueDiv")
const redOutline = document.querySelector(".redOutline")
const blueOutline = document.querySelector(".blueOutline")
const redRng = document.querySelector(".redRng")
const blueRng = document.querySelector(".blueRng")

P1WIN = 0;
P2WIN = 0;
let intervalRed;
let intervalBlue;

VSdiv.addEventListener("click", function () {
    P1WIN = Math.ceil(Math.random() * 1000);
    P2WIN = Math.ceil(Math.random() * 1000);
    fight.play();
    setTimeout(function () {
        redDiv.classList.add("redTranslate")
        blueDiv.classList.add("blueTranslate")
        gong.play();
    }, 500)
    setTimeout(function () {
        laugh.play();
    }, 4500)
    VSdiv.classList.remove("scaling")
    VSdiv.disabled = true;
    console.log(`Player 1 RNG:`, P1WIN)
    console.log(`Player 2 RNG:`, P2WIN)
    if (P1WIN > P2WIN) {
        setTimeout(function () {
            redRng.innerText = P1WIN;
            blueRng.innerText = P2WIN;
            intervalRed = setInterval(function () {
                redOutline.classList.toggle("green");
                questionRed.classList.toggle("green2");
            }, 500)
            questionBlue.src = "Pictures/dead.png"
            VSdiv.innerText = "WIN!"
            fatality.play();
        }, 3500)
    } else if (P2WIN > P1WIN) {
        setTimeout(function () {
            redRng.innerText = P1WIN;
            blueRng.innerText = P2WIN;
            intervalBlue = setInterval(function () {
                blueOutline.classList.toggle("green");
                questionBlue.classList.toggle("green2");
            }, 500)
            questionRed.src = "Pictures/dead.png"
            VSdiv.innerText = "WIN!"
            fatality.play();
        }, 3500)
    } else {
        VSdiv.innerText = "TIE?"
        console.log("TIE?")
    }
})

const resetButton = document.querySelector("#resetButton")

function reset() {
    clearInterval(intervalRed);
    clearInterval(intervalBlue);
    VSdiv.innerText = "VS."
    questionRed.src = "Pictures/qustionmark1.jpg"
    questionBlue.src = "Pictures/questionmark3.png"
    redText.innerText = "Player 1"
    blueText.innerText = "Player 2"
    redDiv.classList.remove("redTranslate")
    blueDiv.classList.remove("blueTranslate")
    redOutline.classList.remove("green");
    questionRed.classList.remove("green2");
    blueOutline.classList.remove("green");
    questionBlue.classList.remove("green2");
    questionRed.classList.add("questionRed")
    questionBlue.classList.add("questionBlue")
    VSdiv.classList.add("scaling")
    VSdiv.disabled = false;
    redRng.innerText = "";
    blueRng.innerText = "";
}

resetButton.addEventListener("click", function () {
    reset();
})