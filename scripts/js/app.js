const cards = document.querySelectorAll(".card__single");
 
function flipCard() {
  this.classList.toggle("flip");
  console.log("N'hésitez pas à me contacter :)"); 
}
cards.forEach((card) => card.addEventListener("click", flipCard));
