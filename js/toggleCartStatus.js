'use strict';

function toggleCartStatus() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const cartEmptyBadge = document.querySelector('[data-cart-empty]');
	const orderForm = document.querySelector('#order-form');

	// Показать бейдж "корзина пуста" или нет
	if (cartWrapper.children.length > 0) {
		// Удаляем бейдж "корзина пуста"
		cartEmptyBadge.classList.add('none');
		// Показываем форму заказа
		orderForm.classList.remove('none');
	} else {
		// Показываем бейдж "корзина пуста"
		cartEmptyBadge.classList.remove('none');
		// Удаляем форму заказа
		orderForm.classList.add('none');
	}
}
