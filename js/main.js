// ham-menu

$(function () {

	const menu = $('.hamburger__menu');

	$('.hamburger').on('click', e => {
		menu.addClass('hamburger__menu--active');
	})

	$('.close-link').on('click', e => {
		menu.removeClass('hamburger__menu--active');
	})
});

// slider-compose 

$(function () {
	const menu = $('.compose__popup');
	$('.compose').on('mouseover', e => {
		menu.addClass('compose__popup--active');
	})
	$('.compose').on('mouseout', e => {
		menu.removeClass('compose__popup--active');
	});

	$('.compose__close').on('click', e => {
		menu.removeClass('compose__popup--active');
	})
})


//acco-vertial

$(function () {
	$('.member__name').on('click', e => {
		e.preventDefault();

		const link = $(e.currentTarget);
		const item = link.closest('.team__member');
		const container = $('.team__list');
		const content = $('.member__desc', item);
		const items = $('.team__member', container);
		const otherContent = $('.member__desc', container);
		const block = $('.desc__hidden', content);
		const height = block.outerHeight();

		if (!item.hasClass('team__member--active')) {

			items.removeClass('team__member--active');
			item.addClass('team__member--active');

			otherContent.css({
				"height": 0
			})

			content.css({
				"height": height
			})
		} else {
			item.removeClass('team__member--active');
			content.css({
				"height": 0
			})
		}
	})
});

//acco-horizontal

$(function () {

	const accoWidth = $('.menu__accordeon').width();
	const screenWidth = $(window).width();
	const reqWidth = screenWidth - accoWidth;

	$('.menu__item-link').on('click', e => {
		e.preventDefault();

		const link = $(e.currentTarget);
		const item = link.closest('.menu__item');
		const container = $('.menu__list');
		const content = $('.menu__item-desc', item);
		const otherContent = $('.menu__item-desc', container);
		const items = $('.menu__item', container);
		const block = $('.text-hidden', content);
		const width = block.outerWidth();

		if (!item.hasClass('menu__item--active')) {

			items.removeClass('menu__item--active');
			item.addClass('menu__item--active');

			otherContent.css({
				"width": 0
			})

			if (screenWidth < 480) {
				content.css({
					"width": reqWidth
				})

				block.css({
					"width": reqWidth
				})
			} else {

				content.css({
					"width": width
				})
			}

		} else {

			items.removeClass('menu__item--active');
			content.css({
				"width": 0
			})
		}
	})
})

//slider 
$(document).ready(function () {
	$('.slider').bxSlider({
		responsive: false,
		pager: false
	});
});

//one page 
$(document).ready(function () {
	$('#fullpage').fullpage({
		verticalCentered: false,
		navigation: true
	});
});

//scroll from top menus

$(function () {
	$('.nav__item').on('click', e => {
		e.preventDefault();
		const link = $(e.currentTarget);
		$.fn.fullpage.moveTo(link.index() + 2);

	});
	const menu = $('.hamburger__menu');
	const scroll = section => {
		$.fn.fullpage.moveTo(section.index() + 2)
	};
	$('.ham-menu__item').on('click', e => {
		e.preventDefault();
		const hamLink = $(e.currentTarget);
		menu.removeClass('hamburger__menu--active');

		setTimeout(() => {
			scroll(hamLink)
		}, 500);
	})
})
