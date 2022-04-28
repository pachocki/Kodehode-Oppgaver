//Variabler
const add = document.getElementById("add")
const subtract = document.getElementById("subtract")
const counter = document.getElementById("counter")
const box = document.querySelector(".box")
let count = 0;

//Random color function
function randomColor(){
    const r= Math.floor(Math.random()*256);
    const g= Math.floor(Math.random()*256);
    const b= Math.floor(Math.random()*256);
    let bgColor = `rgb(${r},${g},${b})`;
    if(count===0){
    box.style.background='#F87429'
    }else if(count%10===0 ){
    box.style.background = bgColor;
    }
}

//Counting function
add.addEventListener("click" , function(){
    count = count+1
    counter.textContent=count
    randomColor()
})

//Subtraction function
subtract.addEventListener("click" , function(){
    count = count-1
    counter.textContent=count
    randomColor()
})



