
fetch(`https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        let movies = document.getElementById('trending')

        data.items.map((dataItem) => {
            let one = document.createElement('div')
            // let link=document.getElementById('abc')
            one.classList.add('one')
            console.log(dataItem.poster_url)
            let img = document.createElement('img')
            let names = document.createElement('h3')
            names.classList.add('title')
            names.textContent = dataItem.name
            let originname = document.createElement('h5')
            originname.style.color = "grey"
            originname.textContent = dataItem.origin_name
            originname.classList.add('title')
            img.src = dataItem.poster_url
            img.classList.add("m1")
            one.appendChild(img)
            one.appendChild(names)
            one.appendChild(originname)
            one.addEventListener('click', () => {
                window.location.href = `detail.html?slug=${dataItem.slug}`
            })
            movies.appendChild(one)

        }
        )
    })
    .catch(e => console.log(e))

fetch(`https://phimapi.com/v1/api/danh-sach/tv-shows?limit=12`)
    .then(res => res.json())
    .then(data => {
        console.log(data.data)
        let shows = document.getElementById('tvshows')
        data.data.items.map((dataItem) => {
            let one = document.createElement('div')
            one.classList.add('oneshows')
            console.log("https://phimimg.com/" + dataItem.poster_url)
            let imgshow = document.createElement('img')
            let namesshow = document.createElement('h3')
            namesshow.classList.add('showtitle')
            namesshow.textContent = dataItem.name
            let originname = document.createElement('h5')
            originname.style.color = "grey"
            originname.textContent = dataItem.origin_name
            originname.classList.add('title')
            imgshow.src = "https://phimimg.com/" + dataItem.poster_url
            imgshow.classList.add("s1")
            one.appendChild(imgshow)
            one.appendChild(namesshow)
            one.appendChild(originname)
            one.addEventListener('click', () => {
                window.location.href = `http://127.0.0.1:5500/khoa2/SPCK2/detail.html?slug=${dataItem.slug}`
            })
            shows.appendChild(one)

        }
        )
    })
    .catch(e => console.log(e))



fetch(`https://phimapi.com/v1/api/danh-sach/phim-le?limit=12`)
    .then(res => res.json())
    .then(data => {
        console.log(data.data)

        let phimle = document.getElementById('movies')
        data.data.items.map((dataItem) => {
            let one = document.createElement('div')
            one.classList.add('one')
            console.log("https://phimimg.com/" + dataItem.poster_url)
            let img = document.createElement('img')
            let names = document.createElement('h3')
            names.classList.add('title')
            names.textContent = dataItem.name
            let originname = document.createElement('h5')
            originname.style.color = "grey"
            originname.textContent = dataItem.origin_name
            originname.classList.add('title')
            img.src = "https://phimimg.com/" + dataItem.poster_url
            img.classList.add("m1")
            one.appendChild(img)
            one.appendChild(names)
            one.appendChild(originname)
            one.addEventListener('click', () => {
                window.location.href = `http://127.0.0.1:5500/khoa2/SPCK2/detail.html?slug=${dataItem.slug}`
            })
            phimle.appendChild(one)


        }
        )
    })
    .catch(e => console.log(e))

fetch(`https://phimapi.com/v1/api/danh-sach/phim-bo?limit=12`)
    .then(res => res.json())
    .then(data => {
        console.log(data.data)
        let phimle = document.getElementById('tvseries')
        data.data.items.map((dataItem) => {
            let one = document.createElement('div')
            one.classList.add('one')
            console.log("https://phimimg.com/" + dataItem.poster_url)
            let img = document.createElement('img')
            let names = document.createElement('h3')
            names.classList.add('title')
            names.textContent = dataItem.name
            let originname = document.createElement('h5')
            originname.style.color = "grey"
            originname.classList.add('title')
            originname.textContent = dataItem.origin_name
            img.src = "https://phimimg.com/" + dataItem.poster_url
            img.classList.add("m1")
            one.appendChild(img)
            one.appendChild(names)
            one.appendChild(originname)
            one.addEventListener('click', () => {
                window.location.href = `http://127.0.0.1:5500/khoa2/SPCK2/detail.html?slug=${dataItem.slug}`
            })
            phimle.appendChild(one)

        }
        )
    })
    .catch(e => console.log(e))

fetch(`https://phimapi.com/v1/api/danh-sach/hoat-hinh?limit=12`)
    .then(res => res.json())
    .then(data => {
        console.log(data.data)
        let phimle = document.getElementById('cartoon')
        // let poster=document.getElementById('poster')
        data.data.items.map((dataItem) => {
            let one = document.createElement('div')
            one.classList.add('one')
            console.log("https://phimimg.com/" + dataItem.poster_url)
            let img = document.createElement('img')
            let names = document.createElement('h3')
            names.classList.add('title')
            names.textContent = dataItem.name
            let originname = document.createElement('h5')
            originname.classList.add('title')
            originname.style.color = "grey"
            originname.textContent = dataItem.origin_name
            img.src = "https://phimimg.com/" + dataItem.poster_url
            img.classList.add("m1")
            // poster.src="https://phimimg.com/"+dataItem.thumb_url
            one.appendChild(img)
            one.appendChild(names)
            one.appendChild(originname)
            one.addEventListener('click', () => {
                window.location.href = `http://127.0.0.1:5500/khoa2/SPCK2/detail.html?slug=${dataItem.slug}`
            })
            phimle.appendChild(one)

        }
        )
    })
    .catch(e => console.log(e))


let current = localStorage.getItem('current')
let ul = document.querySelector('.nav2')
if(!current){
    ul.innerHTML = `
    <li><a href="../SPCK2/login/signin.html">Log in</a><i class="bi bi-box-arrow-in-right"></i></li>
      <li class="nave"><a href="../SPCK2/signup/signup.html">Sign up</a><i class="bi bi-person-fill-add"></i></li>
    `
}else{
    ul.innerHTML = ul.innerHTML + `
    <li><a href="../SPCK2/favorite.html">${current}</a</li>
    <li><a href="../SPCK2/login/signin.html">Log out</a><i class="bi bi-box-arrow-in-right"></i></li>
    `
    let logout = document.querySelector('.nav2 li:nth-child(2) a')
    logout.addEventListener('click', () => {
        localStorage.removeItem('current')
        window.location.href = "../SPCK2/login/signin.html"
    })
    let form = document.getElementById('btnsearch')
    function search() {
        let se = document.querySelector('.form-control').value
        
        window.location.href=`./search.html?movie=${se}`
    }
    form.addEventListener('click',search)
}


