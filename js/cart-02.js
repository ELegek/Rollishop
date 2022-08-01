'use strict';
// Блок в который мы добавляем выбранный товар
const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', (event) => {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cart')) {
		// Находим карточку с товаром, внутри которой был сделан клик
		const cart = event.target.closest('.card');

		// Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: cart.dataset.id,
			imgSrc: cart.querySelector('.product-img').getAttribute('src'),
			title: cart.querySelector('.item-title').innerText,
			itemsInBox: cart.querySelector('[data-items-in-box]').innerText,
			weight: cart.querySelector('.price__weight').innerText,
			price: cart.querySelector('.price__currency').innerText,
			counter: cart.querySelector('[data-counter]').innerText,
		};

		// Проверять если ли уже такой товар в корзине
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			// Собранные данные подставим в шаблон для товара в корзине
			const cartItemHTML = `							
      <div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
          <div class="cart-item__img">
            <img src="${productInfo.imgSrc}" alt="">
          </div>
          <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

            <div class="cart-item__details">

              <div class="items items--small counter-wrapper">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current" data-counter="">${productInfo.counter}</div>
                <div class="items__control" data-action="plus">+</div>
              </div>

              <div class="price">
                <div class="price__currency">${productInfo.price}</div>
              </div>

            </div>

          </div>
        </div>
      </div>`;

			// Отобразим товар в корзине
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}
		// Сбрасываем счетчик на единицу
		cart.querySelector('[data-counter]').innerText = '1';

		// Отображениестатуса корзины Пустая / Полная
		toggleCartStatus();
	}
});
