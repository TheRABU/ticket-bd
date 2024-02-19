// renderSeats();
function renderSeats() {
  const container = document.getElementById("choose-seats-container");
  if (!container) {
    return;
  }

  for (let i = 0; i < seatList.length; i++) {
    const seat = document.createElement("kbd");
    seat.id = seatList[i].id;
    seat.style.height = "50px";
    seat.style.width = "100px";
    seat.style.backgroundColor = "white";
    seat.style.cursor = "pointer";
    seat.innerText = seatList[i].id;

    if (seatList[i].booked) {
      seat.style.backgroundColor = "green";
    }

    container.appendChild(seat);
  }
}

let totalCount = 0;
let totalPrice = 0;
let grandTotal = 0;
let seatsLeft = 26;

// get all seats buttons

const getAllSeatBtn = document.querySelectorAll(".kbd");
for (let index = 0; index < getAllSeatBtn.length; index++) {
  const seats = getAllSeatBtn[index];
  seats.addEventListener("click", function (event) {
    if (totalCount >= 4) return;
    const seatId = event.target.id;
    const seatEl = document.getElementById(seatId);
    if (seatEl.style.backgroundColor === "green") {
      window.alert("Seat already booked!");
      return;
    }
    totalCount++;

    seatsLeft--;
    document.getElementById("seat-left").innerText = seatsLeft + " Seats left";
    seatEl.style.backgroundColor = "green";

    const seatEntry = createSeatEntry(seatId);
    const entriesContainer = document.querySelector(".append-info");
    entriesContainer.appendChild(seatEntry);

    totalPrice += 550;
    grandTotal = totalPrice;

    const totalPriceEl = document.getElementById("total-price-show");
    totalPriceEl.innerText = totalPrice.toString();

    const grandTotalEl = document.getElementById("grand-total");
    grandTotalEl.innerText = grandTotal.toString();

    // update the grand total
  });
}
// function to create entry of selected seat
function createSeatEntry(seatId) {
  const d = document.createElement("div");
  d.classList.add("flex", "justify-between", "items-center");

  const kbd = document.createElement("kbd");
  kbd.innerText = seatId;

  const span = document.createElement("span");
  span.innerText = "Economy";

  const h3 = document.createElement("h3");
  h3.innerText = "550";

  d.appendChild(kbd);
  d.appendChild(span);
  d.appendChild(h3);

  return d;
}

function couponCouple20() {
  grandTotal = totalPrice - totalPrice * 0.2;
  const grandTotalEl = document.getElementById("grand-total");
  grandTotalEl.innerText = grandTotal.toString();
  // update the grand total
}

function couponNew15() {
  grandTotal = totalPrice - totalPrice * 0.15;
  const grandTotalEl = document.getElementById("grand-total");
  grandTotalEl.innerText = grandTotal.toString();
  // update the grand total
}

document.getElementById("coupon-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputEl = document.getElementById("coupon-input");
  const coupon = inputEl.value;

  if (coupon === "NEW15") {
    couponNew15();
  } else if (coupon === "Couple 20") {
    couponCouple20();
  } else {
    window.alert("invalid coupon");
  }
});

//validate modal
function validateModal() {
  const userName = document.getElementById("user-name").value;
  const userNumber = document.getElementById("user-number").value;

  if (userName === "" || userNumber === "") {
    window.alert("Please fill in all required fields.");
  } else {
    // If both fields are filled, show the modal
    my_modal_4.showModal();
  }
}
