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
    //получаем значения инпута с приведением в нижний регистр
    let value = form.elements[0].value.toLowerCase();
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    location.reload();
    event.preventDefault();
    });
}
else{
    console.log(cookie_site);
    main.hidden = true; 
    advanced.hidden =false;
    question.innerHTML="<p>Ваш город - <strong>"+cookie_site+"</strong> </p>";
}
