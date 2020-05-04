const burger = document.querySelector('.burger');

const burgerHandler = () => {
	burger.classList.toggle('burger--active');
};

burger.addEventListener('click', burgerHandler);
