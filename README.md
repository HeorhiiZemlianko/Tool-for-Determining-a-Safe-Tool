<h1 align="center">Bank card selection tool</h1>

<h3 align="center">This program implements a simple service scheme to securely identify a bank card or funds from the needs or tasks for which it will be used. A link to the working server is provided at this link: <a href="https://heorhiizemlianko.github.io/Tool-for-Determining-a-Safe-Tool/">Tool</a>
</h3>
<p align="center">
  <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" >
</p>
<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" title="html" width="50" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" title="css" width="50" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" title="photoshop" width="50" height="50"/>
</p>

## The goal of the work
The main goal of this project is to develop a tool that will help you choose the right bank card or financial tool depending on the needs of the consumer or client of the bank or the tasks for which it will be used. This application consists of a sampling test with several categories.

## Task statement
<p>A simple experiment with <b>css & html & js</b> and its possibilities.</p>
<p>A demo implementation of this template can be viewed at this link:<a href="https://heorhiizemlianko.github.io/Tool-for-Determining-a-Safe-Tool/"> <b>Tool</b> </a></p>

## Schematic representation of the HTML structure
```
html
├── head
│   ├── link
│   ├── link
│   ├── script
│   ├── script
│   ├── meta
│   ├── title
│   └── link
└── body
    ├── div.container
        ├── div.jumbotron
        ├── div#work
        └── div#results
```

## Schematic representation of the CSS structure
```
css
├── body
├── button
├── .jumbotron
├── #work
├── #results
├── .blue
├── .teal
├── .red
├── .grey
├── .orange
└── .green
```

## Schematic representation of the JavaScript structure
```
javascript
├── deciding
└── ready() callback
    └── sybmit() callback
       ├── type
       ├── creative
       ├── prefer
       ├── whatDoYouThink
       ├── flavor
       └── whichToReveal
```

## Code from the project
- HTML
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="css/bootstrap.css" media="screen" title="no title">
    <link rel="stylesheet" href="css/styling.css" media="screen" title="no title">
    <link href="https://fonts.googleapis.com/css?family=Courgette|Lobster" rel="stylesheet">
    <script src="js/jquery-3.1.1.js" type="text/javascript"></script>
    <script src="js/scripts.js" type="text/javascript"></script>
    <meta charset="utf-8">
    <title>Средство для выбора безопасного банковского инструмента</title>
  </head>
  <body>
    <div class="container">
      <div class="jumbotron">
        <h1>Определение средства</h1>
        <h3>Средство для выбора безопасного банковского инструмента</h3>
      </div>
      <div id="work">
      
      ..........
      
      </div>
      <div id="results">
        <h3>Результат:</h3>
        <h1><span class="answer"></span></h1>
      </div>
    </div>
  </body>
</html>
```
- CSS
```css
body {
  background-color: #E2F1F4;
  padding-top: 30px;
  padding-bottom: 50px;
}

button {
  margin-top: 25px;
}

.jumbotron {
  background-image: url("../img/jumboback.png");
  background-position: center, center;
  background-repeat: no-repeat;
  background-color: inherit;
  font-family: 'Lobster', cursive;
  color: #fff;
}

.........

```

- JS. Selection of options
```js
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

```

- JS. The function of work, as well as coloring.
```js
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

```
