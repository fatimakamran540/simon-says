
let gameSeq = [];
let userSeq = [];
let btns = ["red", "blue", "green", "purple"];

let started = false;
let level = 0;
let score = 0;
let yourScore =[];
let BestScore = [];


let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");


document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }

});


function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}


function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;
 
  

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);

  console.log(randIdx);
  console.log(randColor);
  console.log(randbtn);
  //storing randm color in gamesequence   
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randbtn);
  
}

function checkAns(idx) {
  
  if (userSeq[idx] === gameSeq[idx]) {
    console.log("you are in game!");
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    
    let a = h2.innerHTML = `game is over, try again!!`;
    let b = h3.innerHTML = `yourScore :${level} `;
    let c = h4.innerHTML = `BestScore :${level} `;
    setTimeout(function() {
      h3.innerHTML = "Your Score :0";
    },2000);
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 500);
   
  reset();
}
}



function btnPress() {
  //it will show which button is being pressed
  console.log(this);
  let btn = this;
  // iy will show user selected color
  userFlash(btn);

  // getting value from button id which is its color and storing it in usercolor
  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);



  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}    
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}


