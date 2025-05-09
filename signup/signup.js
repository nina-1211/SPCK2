let form = document.querySelector('form')
let users=[]
function signup (e){
    e.preventDefault();
    let username=document.getElementById('username').value
    let email=document.getElementById('email').value
    let password = document.getElementById('password').value
    let confirmps = document.getElementById('confirmps').value;
    if(username.length <5){
        alert('Username must be at least 5 characters');
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
    localStorage.setItem('currentuser',username);
    window.location.href ='../login/signin.html';
}
form.addEventListener('submit',signup)

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
  import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
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
const db = getFirestore(app);

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