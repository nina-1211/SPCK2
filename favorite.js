import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs,deleteDoc,doc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
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

async function getfavorite(){
    let current = localStorage.getItem('current')
    const querySnapshot = await getDocs(collection(db,"favorite"))
    const favorites = []
    console.log(querySnapshot)
    querySnapshot.forEach((doc)=>{
        if(doc.data().email === current){
            favorites.push({id:doc.id,...doc.data()});
        }
    })
    return favorites
}
async function displayfavorite(){
    const favoriteList = document.querySelector('.list')
    favoriteList.innerHTML=""
    const favorites = await getfavorite()
    favorites.forEach((favorite)=>{
      if(favorite.email === localStorage.getItem('current')){
        const favoriteDiv = document.createElement('div');
        let fvr = document.createElement('div')
        let deleteBtn = document.createElement('button')
        favoriteDiv.classList.add('favorite-item')
        favoriteDiv.innerHTML=`
        <img class="favorimg" src="${favorite.img}" alt="${favorite.name}" width="100">
        <div class="favorinfo">
        <h2 class="favorname">${favorite.name}</h2>`
        deleteBtn.classList.add('delete-btn')
        deleteBtn.setAttribute('data-id',favorite.id)
        deleteBtn.innerHTML="delete"
        favoriteDiv.addEventListener('click',()=>{
          window.location.href=`./detail.html?slug=${favorite.slug}`
        })
        fvr.classList.add('fvr')
        fvr.appendChild(favoriteDiv)
        fvr.appendChild(deleteBtn)
        favoriteList.appendChild(fvr)
      }
    })
    document.querySelectorAll(".delete-btn").forEach((button)=>{
        button.addEventListener("click",async(event)=>{
          const favoriteid = event.target.getAttribute("data-id");
          await deleteproduct(favoriteid);
    
        })
      })
    
}
async function deleteproduct(favoriteid) {
  await deleteDoc(doc(db,"favorite",favoriteid));
  console.log("product has been deleted")
  displayfavorite();
}
displayfavorite()