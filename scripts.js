let userDisplay = document.querySelector('.user-info')


async function userInfo(){
    let response = await fetch('https://randomuser.me/api/')
    let userData = await response.json()
    let users = userData.results

    users.forEach(user => {
        console.log(user)
        userDisplay.innerHTML =  `
        <div class = "User-data">
            <img width="300" src = ${user.picture.large} style = "border:5px solid blue;"/>
            <h1> Name:${user.name.title}
            ${user.name.first}
            ${user.name.last}
            </h1>
            <p>Gender: ${user.gender}</p>
            <p> Email:${user.email} </p> <br>
            <p> Phone-Number:${user.phone}</p>
            <p> Location:${user.location.city}
            ${user.location.state}
            ${user.location.country}
            </p>
            <p>Age:${user.dob.age}</p>
        </div>
        `
    });
    
}



userInfo();

