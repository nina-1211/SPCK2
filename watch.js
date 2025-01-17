let poster = document.getElementById('poster')
let url = new URLSearchParams(window.location.search);
let movie = url.get('movie')
let slug=url.get('slug')
console.log(movie)
let watchmovie = document.querySelector('#watchmovie')
watchmovie.src = movie
// let account=document.createElement('p')
// account.innerHTML=localStorage.getItem('currentuser')
// let ls=document.querySelector("#ls")
// ls.innerHTML='Welcome '+account.innerHTML+' !'
let logout=document.querySelector('#logout')
logout.addEventListener('click',() =>{
    localStorage.removeItem('currentuser')
})
fetch(`https://phimapi.com/phim/${slug}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.episodes[0].server_data.length==1){
            
        }else{
            let currentep=localStorage.getItem('currentep')
            for(let i=0;i<data.episodes[0].server_data.length;i++){
                let button=document.createElement('button')
                let div=document.querySelector('#aaab')

                if(currentep==data.episodes[0].server_data[i].slug){
                    button.classList.add('next')
                    watchmovie.src = data.episodes[0].server_data[i].link_embed
                }else{
                    button.classList.add('not')
                }
                button.innerHTML=data.episodes[0].server_data[i].name
                button.addEventListener('click', () =>{
                    watchmovie.src = data.episodes[0].server_data[i].link_embed
                    localStorage.setItem('currentep',data.episodes[0].server_data[i].slug)
                    window.location.reload()
                })
            document.body.appendChild(button)
            aaab.appendChild(button)
            }
        }
})
