let titleCount = 1;
let totalPrice = 0;
const seatList = [];
// get all seats buttons
const getAllSeatBtn = document.querySelectorAll(".kbd");
for (let index = 0; index < getAllSeatBtn.length; index++) {
  const seats = getAllSeatBtn[index];
  seats.addEventListener("click", function (event) {
    console.log(event.target.id);
    seatList = event.target.id;
  });
}
