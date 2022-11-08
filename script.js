var card = document.getElementById("card");

// *Variable Declaration
const backName = document.querySelector(".name");
const backEmail = document.querySelector(".email");
const backNumber = document.querySelector(".number");
const backLocation = document.querySelector(".location");

const tableBody = document.querySelector(".tableBody");

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
  users.map((user) => {
    backName.innerHTML = user.name;
    backEmail.innerHTML = user.email;
    backNumber.innerHTML = user.number;
    backLocation.innerHTML = user.location;
  });
  console.log("user", userData);
  card.style.transform = "rotateY(-180deg)";
  displayCard();
}

function openLogin() {
  card.style.transform = "rotateY(0deg)";
}

// *Table Body
function displayCard() {
  var userInfo = users.map((user, idx) => {
    return `
            <tr id=${idx} >
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.number}</td>
                    <td>${user.location}</td>
                    <td><button onclick="deleteAccount(${idx})">Delete</button></td>
            </tr>
        `;
  });
  console.log(userInfo);
  return (tableBody.innerHTML = userInfo);
}

function openLogin() {
  card.style.transform = "rotateY(0deg)";
}

// *Editing Acct Details
let editAcct = document.getElementById("editAcct");
editAcct.addEventListener("click", editAccount);
function editAccount() {
  alert("Wanna make some corrections?");
}

// *Deleting Acct
let deleteAcct = document.getElementById("deleteAcct");
deleteAcct.addEventListener("click", deleteAccount);
function deleteAccount(idx) {
//   users.splice(0, users.length);
//   backName.innerHTML = " ";
//   backEmail.innerHTML = " ";
//   backNumber.innerHTML = " ";
//   backLocation.innerHTML = " ";
  //   tableBody.innerHTML = " ";
  var item = document.getElementById(`${idx}`);
  var newUser = users.filter(user => !user[idx] )
    item.innerHTML = ''
  console.log(item);
}

displayCard();
