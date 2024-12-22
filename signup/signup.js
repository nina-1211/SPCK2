let form = document.querySelector('form')
let users=[]
function signup (e){
    e.preventDefault();
    let username=document.getElementById('username').value
    let email=document.getElementById('email').value
    let password = document.getElementById('password').value
    let confirmps = document.getElementById('confirmps').value;
    if(username.length <3){
        alert('Username must be at least 3 characters');
        return
    }
    if(password!== confirmps){
        alert('Password does not match')
        return;
    }
    if(localStorage.getItem('users')){
        users = JSON.parse(localStorage.getItem('users'))
        for(let i=0;i<users.length;i++){
            if(username === users[i].username){
                alert('Username already exists');
                return
            }
        }
    }
    users.push({
        username:username,
        email:email,
        password: password,
    });
    localStorage.setItem('users',JSON.stringify(users));
    alert('User registered successfully');
    window.location.href ='../login/signin.html';
}
form.addEventListener('submit',signup)