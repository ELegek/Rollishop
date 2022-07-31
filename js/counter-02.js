'use strict';
window.addEventListener('click', (event) => {
	let counter;
	// Клик строго по кнопкам Плюс либо Минус
	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		// Находим родителя счетчика
		const counterWrapper = event.target.closest('.counter-wrapper');
		// Находим счетчик
		counter = counterWrapper.querySelector('[data-counter]');
	}

	// Проверяем является ли элемент кнопкой Плюс
	if (event.target.dataset.action === 'plus') {
		// Изменяем текст в счетчике увеличивая его на 1
		counter.innerText = ++counter.innerText;
	}
	// Проверяем является ли элемент кнопкой Минус
	if (event.target.dataset.action === 'minus') {
		if (parseInt(counter.innerText) > 1) {
			// Изменяем текст в счетчике уменьшая его на 1
			counter.innerText = --counter.innerText;
		}
	}
});
