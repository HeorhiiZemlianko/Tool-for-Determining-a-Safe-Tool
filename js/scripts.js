var deciding = function(type, creative, prefer, whatDoYouThink, flavor) {
  if (type === "Дебитовая" && creative === "Снятие наличных средств" && flavor === "Только Украина") {
    return "Простір";
  } else if (type === "Дебитовая" && creative === "Снятие наличных средств" && flavor === "Украина и заграница") {
    return "Visa Clasic & MasterCard";
  } else if (type === "Кредитная" && creative === "Снятие наличных средств" && flavor === "Только Украина") {
    return "Visa Domestic";
  } else if (type === "Кредитная" && creative === "Снятие наличных средств" && flavor === "Украина и заграница") {
    return "Visa Gold & MasterCard Gold";
  } else if (type === "Дебитовая" && creative === "Безналичный расчет" && prefer === "Да") {
    return "Віртуальная карта";
  } else if (type === "Кредитная" && creative === "Безналичный расчет" && prefer === "Да") {
    return "Google Pay & Apple Pay";
  } else if (type === "Кредитная" && creative === "Безналичный расчет" && prefer === "Нет" && whatDoYouThink === "Есть смартфон") {
    return "Google Pay & Apple Pay";
  } else if (type === "Кредитная" && creative === "Безналичный расчет" && prefer === "Нет" && whatDoYouThink === "Нет смартфона") {
    return "Карта для безконтактных платежей с NFC-чипом";
  } else if (type === "Дебитовая" && creative === "Безналичный расчет" && prefer === "Нет" && whatDoYouThink === "Есть смартфон") {
    return "Google Pay & Apple Pay";
  } else if (type === "Дебитовая" && creative === "Безналичный расчет" && prefer === "Нет" && whatDoYouThink === "Нет смартфона") {
    return "Карта для безконтактных платежей с NFC-чипом";
  }
};



$(document).ready(function() {
  $("#work form").submit(function(event) {

    var type = $("#typeab").val();
    var creative = $("#creative").val();
    var prefer = $("#prefer").val();
    var whatDoYouThink = $("#whatdoyouthink").val();
    var flavor = $("#flavor").val();

    var whichToReveal = deciding(type, creative, prefer, whatDoYouThink, flavor);
    $(".answer").text(whichToReveal);
    if (whichToReveal === "Простір") {
      $("body").removeClass();
      $("body").addClass("blue");
    } else if (whichToReveal === "Visa Clasic & MasterCard") {
      $("body").removeClass();
      $("body").addClass("teal");
    } else if (whichToReveal === "Visa Domestic") {
      $("body").removeClass();
      $("body").addClass("red");
    } else if (whichToReveal === "Visa Gold & MasterCard Gold") {
      $("body").removeClass();
      $("body").addClass("grey");
    } else if (whichToReveal === "Виртуальная карта") {
      $("body").removeClass();
      $("body").addClass("orange");
    } else if (whichToReveal === "Google Pay & Apple Pay") {
      $("body").removeClass();
      $("body").addClass("green")
    } else if (whichToReveal === "Карта для безконтактных платежей с NFC-чипом") {
      $("body").removeClass();
      $("body").addClass("yellow")
    }

    event.preventDefault();

  });
});
