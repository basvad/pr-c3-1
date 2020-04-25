//функция очистки кук
function CookiesDelete() {
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
		document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
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
// получаем div с заголовком
const panel-heading = document.getElementById('panel-heading');
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
    question.hidden = true;
    advanced.hidden =false;
    panel-heading.innerHTML="<p>Ваш город - <strong>"+cookie_site+"</strong> </p>";
    //вешаем обработчки на кнопку сброса куки
    document.getElementById('reset_cookies').addEventListener('click',function(){
      //удаляем куку 
    CookiesDelete();
      //обновляемся
      location.reload();
    })
}
