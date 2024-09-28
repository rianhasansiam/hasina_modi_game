const box = document.getElementsByClassName("box");
const restBtn = document.getElementById("restBtn");
const modal = document.getElementById("modal");
const whoWin = document.getElementById("whoWin");
const pic = document.getElementById("pic");
const modalNewGame = document.getElementById("modalNewGame");




let player = true;
let x = [];
let y = [];
function tap(access) {
  if (player) {
    access.innerHTML =
      '<img class="top-0 w-[5.5rem] left-3 absolute z-10" src="./img/hasina.png" alt=""> X';

    player = false;
  } else {
    access.innerHTML =
      '<img class="top-0 w-[5.2rem] left-4 absolute z-10" src="./img/modi.png" alt=""> O';

    player = true;
  }
  access.setAttribute("disabled", "");
  checkWinner();
}

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
// funtion
const checkWinner = () => {
  for (let winpattern of winPatterns) {
    const position1 = box[winpattern[0]].innerText;
    const position2 = box[winpattern[1]].innerText;
    const position3 = box[winpattern[2]].innerText;

    //    console.log(position1,position2,position3)

    if (position1 !== "" && position2 !== "" && position3 !== "") {
      if (position1 === position2 && position2 === position3) {

        if(position1=='X'){
            whoWin.innerText='মদির বউ জিতছে'
            pic.innerHTML='<img src="./img/hasina.png" alt="">'
            
        }
        else{
         whoWin.innerText='হাসু অপার জামাই জিতছে'
         pic.innerHTML='<img src="./img/modi.png" alt="">'
        
        }
        
        modal.click()
      }
      
    }
  }
};

// reset Button
restBtn.addEventListener('click',function(){
    window.location.reload();
})
modalNewGame.addEventListener('click',function(){
    window.location.reload();
})

