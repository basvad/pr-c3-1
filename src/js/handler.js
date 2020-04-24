function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// Пример использования:
//setCookie('user', 'John', {secure: true, 'max-age': 3600});

//получаем форму
const form = document.querySelector('form');

//вешаем обработчик события submit
form.addEventListener('submit',function(event){
    // специальные символы (пробелы), требуется кодирование
    //let name = "town";
    //получаем значения инпута с приведением в нижний регистр
    //let value = form.elements[0].value.toLowerCase();
    //setCookie( name, value, {'max-age': 3600});
    document.cookie = "name=oeschger";
    alert(document.cookie); 
    event.preventDefault();
    });

