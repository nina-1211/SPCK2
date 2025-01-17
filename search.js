fetch(`https://phimapi.com/v1/api/tim-kiem?keyword=love&limit=10`)
.then(res => res.json())
.then(data => {
    console.log(data.data)
    let phimle = document.getElementById('film')
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
            one.appendChild(img)
            one.appendChild(names)
            one.appendChild(originname)
            one.addEventListener('click', () => {
                window.location.href = `http://127.0.0.1:5500/khoa2/SPCK2/detail.html?slug=${dataItem.slug}`
            })
            phimle.appendChild(one)})
})
.catch(e => console.log(e))