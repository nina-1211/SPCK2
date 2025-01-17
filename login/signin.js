let loginbutton = document.getElementById('login')

let form = document.querySelector('form')
loginbutton.addEventListener('submit',login)
function login(e){
    e.preventDefault()
    let email= document.getElementById('email').value
    let password= document.getElementById('password').value
    let users = JSON.parse(localStorage.getItem('users'))
    // localStorage.removeItem("currentuser");

    if(email==""){
        alert("please enter email")
    }
    else if(password==""){
        alert('please enter password')
    }
    for(let i=0;i<users.length;i++){
        if(email===users[i].email && password === users[i].password){
            alert('Login successful')
            window.location.href="../movie.html"
            return
        }
    }
    alert('Wrong username or password')
}