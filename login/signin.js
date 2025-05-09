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
            localStorage.setItem('current',users[i].email)
            window.location.href="../movie.html"
            return
        }
    }
    alert('Wrong username or password')
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8jietiTBUdjxdZLOUyjHGZtFpLeZE-Eo",
  authDomain: "movie-f8733.firebaseapp.com",
  projectId: "movie-f8733",
  storageBucket: "movie-f8733.firebasestorage.app",
  messagingSenderId: "711928733426",
  appId: "1:711928733426:web:b611c1d7a4d8365b8b3a6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementsByClassName('googlebtn')[0].addEventListener('click',(e)=>{
    e.preventDefault()
  signInWithPopup(auth,provider)
  .then((result)=>{
      alert(`welcome,${result.user.displayName}`)
      localStorage.setItem("current", result.user.email)
      console.log(result)
      window.location="../movie.html"
  })
  .catch((error)=>{
      console.error(error.message)
  })
})