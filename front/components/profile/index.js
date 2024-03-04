
let btns = document.querySelectorAll('.btn')


btns.forEach(btn => {
    btn.onclick = () => {
        btns.forEach(el => el.classList.remove("active"))
        btn.classList.add("active")
    }
}) 