
let btns = document.querySelectorAll('.btn')
let pagesBtn = document.querySelectorAll("[data-page]")
let pages = document.querySelectorAll('.page')
let defoultPage = document.querySelector('.btns__information__box')
let folowers = document.querySelector('.folow__box')
let topSwitching = document.querySelector('.favorite__port__version__rating__box')

let switchingBtn = document.querySelectorAll('.switching-btns button')
let switchingBlock = document.querySelector('.switching-btns')
let switching__favorites = document.querySelector('.switching__favorites')
let switching__portfolio = document.querySelector('.switching__portfolio')
console.log(pagesBtn);

let modal_create_prseta = document.querySelector('.main__newPrseta__contener')

pagesBtn.forEach(btn => {

    btn.onclick = () => {
        const data_id = btn.getAttribute("data-page")
        console.log(data_id);
        defoultPage.style.display = "none"
        folowers.style.display = "block"
        switchingBlock.style.display = "flex"
        topSwitching.style.display = "none"

        pages.forEach(page => {
            if (data_id === page.id) {
                page.classList.add("page-active")
            } else (
                page.classList.remove("page-active")
            )
        })

        switchingBtn.forEach(btn => {
            if (data_id === btn.name) {
                btn.classList.add("switching-active")
            } else (
                btn.classList.remove("switching-active")
            )
        })


    }
})

btns.forEach(btn => {
    btn.onclick = () => {
        btns.forEach(el => el.classList.remove("active"))
        btn.classList.add("active")
    }
})

switchingBtn.forEach(btn => {
    btn.onclick = () => {
        switchingBtn.forEach(el => el.classList.remove("switching-active"))
        btn.classList.add("switching-active")

        pages.forEach(page => {
            if (btn.name === page.id) {
                page.classList.add("page-active")
            } else (
                page.classList.remove("page-active")
            )
        })
    }
});





function favoritesPage(arr) {
    let favoriteFlex__box = document.querySelector('.flex__box')

    for (let item = 0; item < 5; item++) {
        let main__poster__box = document.createElement('div')
        main__poster__box.classList.add("main__poster__box")
        main__poster__box.innerHTML = ` 
        <div class="poster__bg"><img src="/public/poster_bg.png" alt="">
            <div class="player"><img src="/public/player.png" alt=""></div>
        </div>
        <div class="title__box">
            <p>$35,00 <br>
                ARTIST STARTER KIT</p>

            <img width="40%" src="/public/stars (2).png" alt="">
        </div>    
    
<div class="btn__cont">
        <button class="basket__btn">В корзину </button>
        </div>`
        favoriteFlex__box.append(main__poster__box)
    }
}
favoritesPage()

function portfolioPage(arr) {
    let portfolioFlex__box = document.querySelector('.portfolio-flex__box')
    let create__box = document.querySelector('.create__box')

    for (let item = 0; item < 8; item++) {
        let main__poster__box = document.createElement('div')
        main__poster__box.classList.add("main__poster__box")
        main__poster__box.innerHTML = ` 
        <div class="poster__bg"><img src="/public/Rectangle 229.png"" alt="">
            <div class="player"><img src="/public/player.png" alt=""></div>
        </div>
        <div class="title__box">
            <p>$35,00 <br>
                ARTIST STARTER KIT</p>

            <img width="40%" src="/public/stars (2).png" alt="">
        </div>    
    
<div class="btn__cont">
        <button class="basket__btn">В корзину </button>
        </div>`
        portfolioFlex__box.append(main__poster__box, create__box)
    }

    create__box.onclick = () => {
        modal_create_prseta.style.display = "block"
    }
}
portfolioPage()




function demoPage(arr) {
    let portfolioFlex__box = document.querySelector('.demo-flex__box')
    let create__box = document.querySelector('.demo-create__box')

    for (let item = 0; item < 3; item++) {
        let main__poster__box = document.createElement('div')
        main__poster__box.classList.add("main__poster__box")
        main__poster__box.innerHTML = ` 
        <div class="poster__bg"><img src="/public/Rectangle 28.png"" alt="">
            <div class="player"><img src="/public/player.png" alt=""></div>
        </div>
        <div class="title__box">
            <p>$35,00 <br>
                ARTIST STARTER KIT</p>

            <img width="40%" src="/public/stars (2).png" alt="">
        </div>    
    
<div class="btn__cont">
        <button class="basket__btn">В корзину </button>
        </div>`
        portfolioFlex__box.append(main__poster__box, create__box)
    }
    create__box.onclick = () => {
        modal_create_prseta.style.display = "block"
    }
}
demoPage()