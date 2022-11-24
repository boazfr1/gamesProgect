const myCard = document.querySelectorAll(".gamePic");
const frontImg = document.querySelector(".frontImg")

function turnImg() {
    this.classList.toggle("flip");
    console.log(this.classList);
    
}

// function changeImg() {
//     let specificClass = document.querySelector("this");
//     console.log(specificClass);
//     this.backImg.style.display = "block";
// }

myCard.forEach(card => card.addEventListener("click", turnImg));
// myCard.forEach(card => card.addEventListener("click", changeImg));






