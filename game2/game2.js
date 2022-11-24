let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let scoreClock = document.getElementById("scoreClock");
let jumping = 0;
let counter = 0;

// create hole in random position
hole.addEventListener('animationiteration', function() {
    let random = ((Math.random()*300)+200);
    hole.style.bottom = random + "px";
    counter++;
    scoreClock.textContent = counter;
});
// create grvity
setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500-characterTop);

    // without pressing the ball fulling down
    if(jumping === 0){
        character.style.top = (characterTop+3)+"px";
    }
// check if the bird pass 
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter));
        character.style.top = 100 + "px";
        counter=0;
    }
},10);

// make him to jump every pressing
function jump(){
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)){
            character.style.top = (characterTop-6)+"px";
        }
        // do not stik in the top
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },5);
}
