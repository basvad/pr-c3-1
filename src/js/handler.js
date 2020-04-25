//функция удаления куки
function deleteCookie() {
  //выставить время жизни cookie так, чтобы оно было просрочено и кука удалилась
  document.cookie = "name=town; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
}

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
//получаем форму
const form = document.querySelector('form');
//получаем основной div
const main = document.getElementById('vote-section');
// получаем div с вопросом
const question = document.getElementById('question');
// получаем альтернативный div
const advanced = document.getElementById('advanced');
advanced.hidden =true;
let cookie_site = getCookie("town");
if (typeof cookie_site === 'undefined'){
  //вешаем обработчик события submit
    form.addEventListener('submit',function(event){
    // специальные символы (пробелы), требуется кодирование
    let name = "town";
    //получаем значения инпута с приведением в верхний регистр
    let value = form.elements[0].value.toUpperCase();
     // +1 день от текущей даты
    let date = new Date(Date.now() + 86400e3);
    date = date.toUTCString();
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)+'; expires=' + date;
    location.reload();
    event.preventDefault();
    });
}
else{
    console.log(cookie_site);
    main.hidden = true; 
    advanced.hidden =false;
    question.innerHTML="<p>Ваш город - <strong>"+cookie_site+"</strong> </p>";
    //вешаем обработчки на кнопку сброса куки
    document.getElementById('reset_cookies').addEventListener('click',function(){
      //удаляем куку 
      deleteCookie('town');
      //обновляемся
      location.reload();
    })
}
