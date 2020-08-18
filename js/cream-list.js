
'user strict';

(function() {
	var container = document.querySelector('.cream-list');

	getCreams();

	/**
	*@param {Array.<Object>} creams
	*/

	function renderCreams(creams) {
		creams.forEach(function(cream) {
			var element = getElementFromTemplate(cream);
			container.appendChild(element);
		});
	}

	function getCreams() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'data/creams.json');
		xhr.onload = function(evt) {
			var rawData = evt.target.response;
			var loadedCreams = JSON.parse(rawData);

			renderCreams(loadedCreams);
		};


		xhr.send();
	}
}

/**
*@param {Object} data
*@return {Element}
*/

function getElementFromTemplate(data) {

	var template = document.querySelector('#cream-template');

	if('content' in template) {
		var element = template.content.chidren[0].cloneNode(true);
	}else {
		var element = template.children[0].cloneNode(true);
	}

	element.querySelector('.cream-about').textContetn = data.about;
	element.querySelector('.cream-price').textContetn = data.price;

	var backgroundImage = new Image();

	// Изображения отличаются от обычных DOM-элементов тем, что
	// у после задания src они загружаются с сервера. Для проверки
	// загрузилось изображение или нет, существует событие load.
	backgroundImage.onload = function() {
		clearTimeout(imageLoadTimeout);
		element.style.backgroundImage = 'url(\'' + backgroundImage.src + '\')';
	};

	// Если изображение не загрузилось (404 ошибка, ошибка сервера),
	// показываем сообщение, что у отеля нет фотографий.
	backgroundImage.onerror = function() {
		element.classList.add('hotel-nophoto');
	};

	/**
	* @const
	* @type {number}
	*/
	var IMAGE_TIMEOUT = 10000;

	// Установка таймаута на загрузку изображения. Таймер ожидает 10 секунд
	// после которых он уберет src у изображения и добавит класс hotel-nophoto,
	// который показывает, что у отеля нет фотографий.
	var imageLoadTimeout = setTimeout(function() {
		backgroundImage.src = ''; // Прекращаем загрузку
		element.classList.add('hotel-nophoto'); // Показываем ошибку
	}, IMAGE_TIMEOUT);

	// Изменение src у изображения начинает загрузку.
	backgroundImage.src = data.preview;

	return element;
}
})();
