const cards = document.querySelectorAll(".card__single");
 
function flipCard() {
  this.classList.toggle("flip");
  console.log("flip!"); 
}
cards.forEach((card) => card.addEventListener("click", flipCard));
