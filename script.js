var card = document.getElementById("card");

// *Variable Declaration
const backName = document.querySelector(".name");
const backEmail = document.querySelector(".email");
const backNumber = document.querySelector(".number");
const backLocation = document.querySelector(".location");


// *Using Classes
class User {
  constructor(name, email, number, location) {
    this.name = name;
    this.email = email;
    this.number = number;
    this.location = location;
  }
}

let users = [];
function openRegister() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let location = document.getElementById("location").value;

  let userData = new User(name, email, number, location);
  users.push(userData);
  users.forEach((user) => {
    backName.innerHTML = user.name;
    backEmail.innerHTML = user.email;
    backNumber.innerHTML = user.number;
    backLocation.innerHTML = user.location;
  });
  console.log(users);
  card.style.transform = "rotateY(-180deg)";
}

function openLogin() {
  card.style.transform = "rotateY(0deg)";
}

// *Editing Acct Details
let editAcct = document.getElementById("editAcct");
editAcct.addEventListener("click", editAccount);
function editAccount() {
    alert("Wanna make some corrections?")
}

// *Deleting Acct
let deleteAcct = document.getElementById("deleteAcct");
deleteAcct.addEventListener("click", deleteAccount);
function deleteAccount() {

  users.splice(0, users.length);
  backName.innerHTML =" ";
  backEmail.innerHTML =" ";
  backNumber.innerHTML =" ";
  backLocation.innerHTML =" ";

  console.log(users);
}
