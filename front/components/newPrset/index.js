

let main__newPrseta__contener =document.querySelector('.main__newPrseta__contener ')

main__newPrseta__contener.innerHTML=`
<div class="bg__cont">

<div class="contener__">
    <h3>Новый пресет</h3>

    <div class="contener__flex-box">

        <div class="left-box">
            <div class="music__bg"><img src="/public/music.png" alt=""></div>
            <p>Загрузить обложку</p>
        </div>

        <div class="right-box">
            <form action="">
                <div class="first-inp">
                    <h4>Имя:</h4>
                    <input type="text" placeholder="Введите имя пресета">
                </div>
                <div class="second-inp">
                    <h4>Теги:</h4>
                    <input type="text" placeholder="Введите до 5 тегов">
                    <p class="enter__btn"><img src="/public/!.png" alt="">Нажмите “Enter” после ввода тега,
                        чтобы добавить
                        новый тег
                    </p>
                </div>

                <div class="availability_box">
                    <h4>Видимость:</h4>
                    <div class="first__inp-radio__box">
                        <div class="first-inp__radio"><input type="radio" name="availability"
                                id="availability-first"><label for="availability-first">
                                Общедоступное</label></div>
                        <div class="second-inp__radio"><input type="radio" name="availability"
                                id="availability-second"><label for="availability-second"> Частное</label>
                        </div>
                    </div>
                </div>

                <div class="program-security">
                    <h4>Программное обеспечение:</h4>
                    <div class="second__inp-radio__box">
                        <div class="first-inp__radio"><input name="program-security" type="radio"
                                id="program-first"><label for="program-first"> Logic Pro</label></div>
                        <div class="second-inp__radio"><input name="program-security" type="radio"
                                id="program-second"><label for="program-second"> FL Studio</label></div>
                        <div class="first-inp__radio"><input name="program-security" type="radio"
                                id="program-third"><label for="program-third"> Studio One Pro</label></div>
                        <div class="second-inp__radio"><input name="program-security" type="radio"
                                id="program-fouth"><label for="program-fouth"> Pro Tools</label></div>
                        <div class="second-inp__radio"><input name="program-security" type="radio"
                                id="program-fivth"><label for="program-fivth"> Ableton</label></div>
                    </div>
                </div>

                <div class="chose-btn">Выбрать файл</div>

                <div class="chanel-download__btn">
                    <button class="chanel">Отмена</button>
                    <button class="download">Загрузить</button>
                </div>
            </form>
        </div>

    </div>
</div>

</div>
`