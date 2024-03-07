let regisrAuthotizationCase = document.querySelector('.main__authorization__contener')
regisrAuthotizationCase.innerHTML = `
<div class="opacitiy__bg">

<div class="entrance__box">
    <h2>Личный кабинет</h2>
    <form action="" class="entrance__forms">
        <input type="email" placeholder="E-mail"><br><br>
        <input type="password" placeholder="Пароль"><br><br>
        <button class="entrance__btn">Вход</button>
    </form>
    <hr>
    <button class="entrance__google">Войти в систему с помощью Google</button>

    <p class="registers">Регистрация</p>
    <p>Забыли пароль?</p>
</div>


<div class="register__box">
    <h2>Регистрация</h2>
    <form action="" class="entrance__forms">
        
        <input type="name" placeholder="Имя*"><br><br>
        <input type="surname" placeholder="Фамилия"><br><br>
        <input type="email" placeholder="E-mail*"><br><br>
        <input type="password" placeholder="Пароль*"><br><br>
        <input type="password" placeholder="Повторите пароль*"><br><br>
        <button class="regist__btn">Зарегистрироваться</button>
    </form>
    <hr>
    <button class="entrance__google regist">Войти в систему с помощью Google</button>
</div>

</div>
`

let register__btn = document.querySelector('.registers')
let register__box = document.querySelector('.register__box ')
let entrance__box = document.querySelector('.entrance__box ')
let opacitiy__bg = document.querySelector('.opacitiy__bg')
register__btn.onclick = () => {

    register__box.style.display = "block"
    entrance__box.style.display = "none"
}
console.log(register__btn);

/* opacitiy__bg.onclick = () => {

    regisrAuthotizationCase.style.display = "none"
} */