fetch(`https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
      
        let movies=document.getElementById('trending')
        
        data.items.map((dataItem) => {
            let one = document.createElement('div')
            // let link=document.getElementById('abc')
            one.classList.add('one')
            console.log(dataItem.poster_url)
            let img = document.createElement('img')
            let names = document.createElement('h3')
            names.classList.add('title')
            names.textContent = dataItem.name
            let originname=document.createElement('h5')
            originname.style.color="grey"
            originname.textContent=dataItem.origin_name
            originname.classList.add('title')
            img.src = dataItem.poster_url
            img.classList.add("m1")
            one.appendChild(img)
            one.appendChild(names)
            one.appendChild(originname)
            movies.appendChild(one)

        }
        )
    })
    .catch(e => console.log(e))

fetch(`https://phimapi.com/v1/api/danh-sach/tv-shows`)
    .then(res => res.json())
    .then(data => {
        console.log(data.data)
        let shows = document.getElementById('tvshows')
        data.data.items.map((dataItem) => {
            let one = document.createElement('div')
            one.classList.add('oneshows')
            console.log("https://phimimg.com/"+dataItem.poster_url)
            let imgshow = document.createElement('img')
            let namesshow = document.createElement('h3')
            namesshow.classList.add('showtitle')
            namesshow.textContent = dataItem.name
            let originname=document.createElement('h5')
            originname.style.color="grey"
            originname.textContent=dataItem.origin_name
            originname.classList.add('title')
            imgshow.src = "https://phimimg.com/"+dataItem.poster_url
            imgshow.classList.add("s1")
            one.appendChild(imgshow)
            one.appendChild(namesshow)
            one.appendChild(originname)
            shows.appendChild(one)

        }
        )
    })
    .catch(e => console.log(e))

    
    
fetch(`https://phimapi.com/v1/api/danh-sach/phim-le`)
.then(res => res.json())
.then(data => {
    console.log(data.data)
    let phimle = document.getElementById('movies')
    data.data.items.map((dataItem) => {
        let one = document.createElement('div')
        one.classList.add('one')
        console.log("https://phimimg.com/"+dataItem.poster_url)
        let img = document.createElement('img')
        let names = document.createElement('h3')
        names.classList.add('title')
        names.textContent = dataItem.name
        let originname=document.createElement('h5')
        originname.style.color="grey"
        originname.textContent=dataItem.origin_name
        originname.classList.add('title')
        img.src = "https://phimimg.com/"+dataItem.poster_url
        img.classList.add("m1")
        one.appendChild(img)
        one.appendChild(names)
        one.appendChild(originname)
        phimle.appendChild(one)

    }
    )
})
.catch(e => console.log(e))

fetch(`https://phimapi.com/v1/api/danh-sach/phim-bo`)
.then(res => res.json())
.then(data => {
    console.log(data.data)
    let phimle = document.getElementById('tvseries')
    data.data.items.map((dataItem) => {
        let one = document.createElement('div')
        one.classList.add('one')
        console.log("https://phimimg.com/"+dataItem.poster_url)
        let img = document.createElement('img')
        let names = document.createElement('h3')
        names.classList.add('title')
        names.textContent = dataItem.name
        let originname=document.createElement('h5')
        originname.style.color="grey"
        originname.classList.add('title')
        originname.textContent=dataItem.origin_name
        img.src = "https://phimimg.com/"+dataItem.poster_url
        img.classList.add("m1")
        one.appendChild(img)
        one.appendChild(names)
        one.appendChild(originname)
        phimle.appendChild(one)

    }
    )
})
.catch(e => console.log(e))

fetch(`https://phimapi.com/v1/api/danh-sach/hoat-hinh`)
.then(res => res.json())
.then(data => {
    console.log(data.data)
    let phimle = document.getElementById('cartoon')
    data.data.items.map((dataItem) => {
        let one = document.createElement('div')
        one.classList.add('one')
        console.log("https://phimimg.com/"+dataItem.poster_url)
        let img = document.createElement('img')
        let names = document.createElement('h3')
        names.classList.add('title')
        names.textContent = dataItem.name
        let originname=document.createElement('h5')
        originname.classList.add('title')
        originname.style.color="grey"
        originname.textContent=dataItem.origin_name
        img.src = "https://phimimg.com/"+dataItem.poster_url
        img.classList.add("m1")
        one.appendChild(img)
        one.appendChild(names)
        one.appendChild(originname)
        phimle.appendChild(one)

    }
    )
})
.catch(e => console.log(e))