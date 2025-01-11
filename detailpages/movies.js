fetch(`https://phimapi.com/v1/api/danh-sach/phim-le?limit=12`)
.then(res => res.json())
.then(data => {
    console.log(data.data)
    let img1 = document.getElementById('img1')
    img1.src = "https://phimimg.com/"+data.data.items[0].thumb_url
    let img2 = document.getElementById('img2')
    img2.src = "https://phimimg.com/"+data.data.items[1].thumb_url
    let img3 = document.getElementById('img3')
    img3.src = "https://phimimg.com/"+data.data.items[2].thumb_url
    let moviename1 = document.getElementById('moviename1')
    moviename1.innerHTML=data.data.items[0].name+" ("+data.data.items[0].year+")"
    let moviename2 = document.getElementById('moviename2')
    moviename2.innerHTML=data.data.items[1].name+" ("+data.data.items[1].year+")"
    let moviename3 = document.getElementById('moviename3')
    moviename3.innerHTML=data.data.items[2].name+" ("+data.data.items[2].year+")"
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
        one.addEventListener('click',()=>{
            window.location.href=`http://127.0.0.1:5500/khoa2/SPCK2/detail.html?slug=${dataItem.slug}`
        })
        phimle.appendChild(one)
        

    }
    )
})
.catch(e => console.log(e))