const infoListEl = document.querySelector('.info__list')
const btnListEl = document.querySelector('#btn-list')
const btnGridEl = document.querySelector('#btn-grid')

const newsCardEls = document.querySelectorAll('.news-card')

btnListEl.addEventListener('click', function (e) {
	infoListEl.classList.remove('info__list--grid')
	btnListEl.classList.add('tag__menu-btn--active')
	btnGridEl.classList.remove('tag__menu-btn--active')
	newsCardEls.forEach((newsCardEl) => {
		newsCardEl.classList.remove('news-card--grid')
	})
})

btnGridEl.addEventListener('click', function (e) {
	infoListEl.classList.add('info__list--grid')
	btnListEl.classList.remove('tag__menu-btn--active')
	btnGridEl.classList.add('tag__menu-btn--active')
	newsCardEls.forEach((newsCardEl) => {
		newsCardEl.classList.add('news-card--grid')
	})
})

const menuBtnEl = document.querySelector('.header__menu')
const headerEl = document.querySelector('.header')

menuBtnEl.addEventListener('click', function (e) {
	headerEl.classList.toggle('header--open')
})
