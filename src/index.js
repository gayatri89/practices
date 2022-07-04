import "./styles.css";

//Object literal syntax
const everydayPack = {
  name: "Green frog",
  age: 23,
  contact: "+49 123 453 4757"
};

//Object Constructor using new keyword
const dailyObj = new Object();
dailyObj.lunch = "Vegan";
dailyObj.quantity = 450;

//let number = 5;
//let subtracted = 5 - 1;
//console.log("The number before" + number + "is" + subtracted + ".");

const content = `<html>
<head>
  <title>Template litereal</title>
</head>
<body>
  <div class="main">
  <h1>Good Morning!</h1> 
  <ul class="list">
    <li>${everydayPack.name}</li>
    <li>${everydayPack.age}</li>
    <li>${everydayPack.contact}</li>
    <li>${dailyObj.lunch}</li>
    <li>${dailyObj.quantity + " gram"}</li>
  </ul>
  </div>
</body>
</html>`;

document.getElementById("app").innerHTML = content;

const navContent = `
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Backpacks</a></li>
  <li><a href="#">Other things</a></li>
  <li><a href="#">Contact</a></li>
  `;

const mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");

const navList = document.createElement("ul");
navList.innerHTML = navContent;
mainNav.append(navList);

const currentDiv = document.getElementsByClassName("main");
console.log(currentDiv);
document.body.appendChild(mainNav);
