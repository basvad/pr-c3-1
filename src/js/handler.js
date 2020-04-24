//функция установки куки
function setCookie(name, value, options = {}) {

  options = {
    //куки должны быть доступны на всех страницах сайта
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    
  };

  if (options.expires.toUTCString) {
      //toUTCString возвращает пригодную для человеческого восприятия строку на английском языке в американском формате, согласно универсальному часовому поясу (Гринвичу)
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
    //получаем значения инпута с приведением в нижний регистр
    let cookie_town = form.elements[0].value.toLowerCase();
    //console.log(cookie_town);
    setCookie('user', cookie_town, {'max-age': 3600});
    event.preventDefault();
    });

