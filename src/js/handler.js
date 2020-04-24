// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookie_site = getCookie("town");
console.log(cookie_site);
//получаем форму
const form = document.querySelector('form');

//вешаем обработчик события submit
form.addEventListener('submit',function(event){
    // специальные символы (пробелы), требуется кодирование
    let name = "town";
    //получаем значения инпута с приведением в нижний регистр
    let value = form.elements[0].value.toLowerCase();
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    //location.reload();
    event.preventDefault();
    });

