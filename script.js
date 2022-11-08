var card = document.getElementById("card");
class User {
    constructor(name, email, number, location){
        this.name = name;
        this.email = email
        this.number = number
        this.location = location
    }
}

function openRegister(){
 
    let users =  []

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let number = document.getElementById('number').value
    let location = document.getElementById('location').value
    let userData = new User(name, email, number, location)
    users.push(userData)
    users.forEach(user => {
        document.querySelector('.name').innerHTML = user.name
        document.querySelector('.email').innerHTML = user.email
        document.querySelector('.number').innerHTML = user.number
        document.querySelector('.location').innerHTML = user.location

    });
    console.log(users)
    card.style.transform = "rotateY(-180deg)";
}

function openLogin(){
    card.style.transform = "rotateY(0deg)";
}

// !Editing Acct Details
let editAcct = document.getElementById('editAcct')
editAcct.addEventListener('click', editAccount)
function editAccount(){
    
}


// !Deleting Acct
let deleteAcct = document.getElementById('deleteAcct')
deleteAcct.addEventListener('click', deleteAccount)
function deleteAccount(){
    // alert("Are you sure you want to delete your Account?");
    delete User.name
    delete User.email
    delete User.number
    delete User.location
    
}

