let titleCount = 1;
let totalPrice = 0;
// get all seats buttons
const getAllSeatBtn = document.querySelectorAll(".seat-btn");

for (let index = 0; index < getAllSeatBtn.length; index++) {
  const seats = getAllSeatBtn[index];
  seats.addEventListener("click", function () {
    console.log("clicked on seat");

    // get the seats information such as economy class/A2
    const getTitle = seats.querySelector("h3").innerText;
    console.log(getTitle);
    // as the price is 550taka
    const price = 550;

    // Now will show the output
    const displayContainer = document.getElementById("display-output-div");
    const p = document.createElement("p");
    p.innerText = titleCount + ". " + getTitle;
    displayContainer.appendChild(p);
    titleCount++;

    // Calculate Price

    totalPrice += price;
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);

    // Coupon button apply
    // const btn = document
    //   .getElementById("coupon-apply-btn")
    //   .addEventListener("click", function () {
    //     // get the input field by id
    //     const couponElement = document.getElementById("coupon-input").value;
    //     const couponCode = couponElement.split(" ").join("").toUpperCase();
    //     if (totalPrice >= 1000) {
    //       if (couponCode === "NEW15" || couponCode === "Couple 20") {
    //         const discountElement = document.getElementById("discountPrice");
    //         const discountAmount = totalPrice * 0.2;
    //         discountElement.innerText = discountAmount.toFixed(2);

    //         // after discount total price
    //         const restTotal = document.getElementById("grand-total");
    //         restTotal.innerText = totalPrice - discountAmount.toFixed(2);
    //         // clear the discount input field
    //         document.getElementById("coupon-input").value = "";
    //       } else {
    //         alert("Invalid Coupon");
    //       }
    //     } else {
    //       alert("Please buy minimum BDT1000 to get 20% OFF");
    //     }
    //   });
  });
}
