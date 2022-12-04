const square = document.createElement("div");
document.body.appendChild(square);

let grow = true;
let size = 10;
let red = 150;
let green = 51;
let blue = 255;
let red1 = 147;
let green1 = 74;
let blue1 = 145;

 

square.style.width = size + "px";
square.style.height = size + "px";
square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
document.body.style.backgroundColor = `rgb(${red1}, ${green1}, ${blue1})`;



const squareSize = () => {
  if (grow) {
    size += 5
    red++;
    green++;
    blue++;
    red1--;
    green1--;
    blue1--;

    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = `rgb(${red1}, ${green1}, ${blue1})`;
    
  } else {
    size -= 5;
    red--;
    green--;
    blue--;
    red1++;
    green1++;
    blue1++;
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = `rgb(${red1}, ${green1}, ${blue1})`;
  }

  if(size >= window.innerWidth * 0.5){
    grow = !grow;
  }
  else if (size==0){
    grow = !grow;
  }
  

 



}

window.addEventListener("scroll", squareSize);