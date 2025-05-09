let title1 = document.querySelector('.title1')
let title2 = document.querySelector('.title2')
let poster= document.getElementById('poster')
let year = document.querySelector('.year')
let time = document.querySelector('.time')
let type = document.querySelector('.type')
let director= document.querySelector('.director')
let actor= document.querySelector('.actor')
let poster2= document.getElementById('poster2')
let content = document.querySelector('.mcontent')
let trailer = document.querySelector('.video')
let tmdb = document.querySelector('#tmdb')
let actors = []
let watch=document.querySelector('#watch')
let url = new URLSearchParams(window.location.search);
let slug = url.get('slug')
fetch(`https://phimapi.com/phim/${slug}`)
.then(res => res.json())
.then(data => {
    console.log(data)
    title1.textContent = data.movie.origin_name
    title2.textContent = data.movie.name
    year.textContent = data.movie.year+"  ("+data.movie.country[0].name+")"
    time.textContent = data.movie.time
    tmdb.textContent = data.movie.tmdb.vote_average
    type.textContent = data.movie.type+"/"+data.movie.category[0].name+"/"+data.movie.category[1].name
    director.textContent = "Đạo diễn: "+data.movie.director
    poster.src=data.movie.thumb_url
    poster2.src=data.movie.poster_url
    content.textContent = data.movie.content
    let trailerId = data.movie.trailer_url.split('=')[1]
    console.log(trailerId)
    trailer.src = `https://www.youtube.com/embed/${trailerId}`
    
    for(let i=0;i<data.movie.actor.length;i++){
        console.log(data.movie.actor[i])
        actors +=data.movie.actor[i]+", "
    }
    actor.innerHTML = "Diễn viên: "+actors
    watch.addEventListener('click',()=>{
        let current = localStorage.getItem('current')
        if(current){

            window.location.href=`./watch.html?movie=${data.episodes[0].server_data[0].link_embed}&slug=${slug}`
        }
        else{
            alert('sign up to watch the video')
            window.location.href="http://127.0.0.1:5500/khoa2/SPCK2/signup/signup.html"
        }
    })
})

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
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
const db = getFirestore(app);
async function addfavorite(){
    let current = localStorage.getItem('current')
    if(current){
        const docRef = await addDoc(collection(db, "favorite"), {
            name: title1.textContent,
            slug: slug,
            email: current,
            img: poster2.src
        });
        console.log("Document written with ID: ", docRef.id);
        alert('Add favorite successfully')
        window.location.href="./favorite.html"
    }
    else{
        alert('sign up to watch the video')
        window.location.href="./signup/signup.html"
    }
}
let favorite=document.getElementById('favorite')
favorite.addEventListener('click',addfavorite)

