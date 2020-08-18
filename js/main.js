(function () {




  // форма поиска
  var btnSearch = document.querySelector('.page__search');
  var forms = document.querySelector('.modal-search');
  var close = document.querySelector('.form-closed');

  // LogIn
  var btnlogin = document.querySelector('.page__login');
  var user = document.querySelector('.login-form');

  btnlogin.addEventListener('click', function (event) {
    event.preventDefault();
    user.classList.add('modal-user-show');
    document.querySelector('.page__login').style.background = 'linear-gradient(to bottom, #F16742, #E5473B)';
  });


  btnSearch.addEventListener('click', function (event) {
    event.preventDefault();
    forms.classList.add('modal-search-show');
    btnSearch.classList.add('btn-closed');
    close.classList.add('form-closed-show');
  });


  close.addEventListener('click', function (event) {
    event.preventDefault();
    forms.classList.remove('modal-search-show');
    btnSearch.classList.remove('btn-closed');
    close.classList.remove('form-closed-show');
  });


  window.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
      forms.classList.remove('modal-search-show');
      btnSearch.classList.remove('btn-closed');
      close.classList.remove('form-closed-show');
      user.classList.remove('modal-user-show');
      document.querySelector('.page__login').style.background = "rgba(250, 250, 250, 0.3)";
    }
  });


  // меню каталога
  var menuActive = document.querySelector('.catalog');
  var menuTop = document.querySelector('.top__items');

  menuActive.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    menuTop.classList.add('top__items--active');
  });

  menuTop.addEventListener('mouseout', function (evt) {
    evt.preventDefault();
    menuTop.classList.remove('top__items--active');
  });


  // Страницы
  var activePage = 'page1';
  var pages = document.querySelector('.paginator');
  pages.addEventListener('click', function (evt) {
    var clickedElement = evt.target;
    if (clickedElement.classList.contains('page')) {
      setActivePage(clickedElement.id);
    }

  });

  // исключаем установку одной и тойже страницы
  function setActivePage(id) {
    if (activePage === id) {
      return;
    }

    // Алгоритм
    // Подстветка выбранной станицы
    document.querySelector('#' + activePage).classList.remove('active');
    document.querySelector('#' + id).classList.add('active');

    activePage = id;

  };

  var creamItems = document.querySelectorAll('.cream-item');

  // Функция проверик и удаления класса
  var creamItemDelete = function () {
    var creamActive = document.querySelector('.cream-item--active');
    if (creamActive) {
      creamActive.classList.remove('cream-item--active');
    }
  };


  // Добавляем класс

  var creamItemAdd = function (item) {
    creamItemDelete();
    item.classList.add('cream-item--active');
  }

  // Добавляем действие при наведении

  for (var i = 0; i < creamItems.length; i++) {
    creamItems[i].addEventListener('mouseover', function (e) {
      creamItemAdd(e.currentTarget);
    })
  };

  //  Удаление действия при выведении с объекта
  for (var i = 0; i < creamItems.length; i++) {
    creamItems[i].addEventListener('mouseout', function (e) {
      creamItemDelete(e.currentTarget);
    })
  };


})();