"use strict";

// import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
import JSCCommon from "./JSCCommon.js";

const $ = jQuery;

function eventHandler() {
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: " .swiper-pagination",
			type: "bullets",
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	};

	new Swiper(".breadcrumb-slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});

	const swiper4 = new Swiper(".sBanners__slider--js", {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: "auto",
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
	});

	const productSwiper = new Swiper(".sProductSlider__slider--js", {
		spaceBetween: 16,
		slidesPerView: "auto",
		// freeMode: true,
		loop: false,
		slidesPerView: 1,
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			// grid: {
			//   rows: 3,
			// },
		},
	});

	const tabsHeads = document.querySelectorAll(".accordeon-js .tabs__btn");
	const tabsContent = document.querySelectorAll(
		".accordeon-js .content_wrapper"
	);
	tabsHeads.forEach((tab, i) => {
		tab.addEventListener("click", () => {
			tab.classList.toggle("active");
			tabsContent[i].classList.toggle("active");
		});
	});

	const popoverTriggerList = document.querySelectorAll(
		'[data-bs-toggle="popover"]'
	);
	const popoverList = [...popoverTriggerList].map(
		popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl)
	);
}
if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
