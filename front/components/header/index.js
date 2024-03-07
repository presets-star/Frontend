let header = document.querySelector('header')
let modal__register = document.querySelector('.main__authorization__contener')
console.log(modal__register);

header.innerHTML = `<h2>PRESET S STAR</h2>
<div class="acount_box">
    <img class="register_img" src="/public/acount.png" alt="">
    <img src="/public/basket.png" alt="">
</div>`

let register__btns = document.querySelector('.register_img')
register__btns.onclick = () => {
modal__register.style.display = "block"
console.log("clcikc");
}

