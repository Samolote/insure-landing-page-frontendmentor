const burger = document.querySelector('.burger');
const body = document.querySelector('body');

const burgerHandler = () => {
	burger.classList.toggle('burger--active');
	if (!body.style.overflowY && burger.classList.contains('burger--active')) {
		body.style.overflowY = 'hidden';
	} else {
		body.style.overflowY = '';
	}
};

burger.addEventListener('click', burgerHandler);
