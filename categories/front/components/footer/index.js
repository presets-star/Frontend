

let footerBox = document.querySelector('footer')

function footer() {
    footerBox.innerHTML=`
    <div class="fot__blocks">
      <table>
        <tr>
          <th>Preset’s Stars</th>
          <th>Социальные сети</th>
          <th>Поддержка</th>
        </tr>
        <tr>
          <td>О нас</td>
          <td>ВКонтакте</td>
          <td>Связаться с нами</td>


        </tr>
        <tr>
          <td>Блог</td>
          <td>Telegram</td>
          <td>Помощь</td>

        </tr>

      </table>
    </div>`
}footer()