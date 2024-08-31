$(document).ready(function () {
  // Hii n kwaajili ya kucreate control number na kuhide na ku-unhide conten zilipo ndan y view detail button
  function generateControlNumber() {
    let controlNumber = "";
    for (let i = 0; i < 20; i++) {
      controlNumber += Math.floor(Math.random() * 10);
    }
    return controlNumber;
  }

  $(".view-details").click(function () {
    var card = $(this).closest(".card");
    card.find(".details").slideToggle();
  });

  $(".order").click(function () {
    var controlNumber = generateControlNumber();
    alert(
      "Your order has been placed successfully. Your control number is: " +
        controlNumber
    );
  });
});
