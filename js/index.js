const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    type: "bullets",
    clickable: true,
  },
});

let header = document.querySelector('.header');
let btnOpen = document.querySelector('.header__btn__open');
let btnClose = document.querySelector('.btn-close');
let form = document.querySelector('.header__form')

btnOpen.addEventListener('click', function () {
  header.classList.add("search");
});

btnClose.addEventListener('click', function () {
  header.classList.remove("search");
});

document.addEventListener("click", function (e) {
  let target = e.target;
  if (!target.closest(".header__container")) {

    header.classList.remove("search")
  }
});

let burger = document.querySelector('.burger');
let menuLink = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {

  header.classList.toggle("open");

  document.body.classList.toggle('stop-scroll');
})

menuLink.forEach(function(el) {
  el.addEventListener('click', function(){

    header.classList.remove('open');

    document.body.classList.remove('stop-scroll')
  })

});

document.addEventListener("click", function (e) {
  let target = e.target;
  if (!target.closest(".header__container")) {

    header.classList.remove("open");

    document.body.classList.remove('stop-scroll');
  }
});


let tabsBtn = document.querySelectorAll('.work__item__btn');
let tabsItem = document.querySelectorAll('.tab-item');
let work = document.querySelector('.work');
let step1 = document.querySelector('.step-1')
let step2 = document.querySelector('.step-2')
let step3 = document.querySelector('.step-3')
let step4 = document.querySelector('.step-4')

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('work__item__btn--active') });
    e.currentTarget.classList.add('work__item__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tab-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-item--active');
  });
});

step1.addEventListener('click', function () {
  work.classList.add("work-step-1")
  work.classList.remove("work-step-2")
  work.classList.remove("work-step-3")
  work.classList.remove("work-step-4")
})

step2.addEventListener('click', function () {
  work.classList.add("work-step-2")
  work.classList.remove("work-step-1")
  work.classList.remove("work-step-3")
  work.classList.remove("work-step-4")
})

step3.addEventListener('click', function () {
  work.classList.add("work-step-3")
  work.classList.remove("work-step-1")
  work.classList.remove("work-step-2")
  work.classList.remove("work-step-4")
})

step4.addEventListener('click', function () {
  work.classList.add("work-step-4")
  work.classList.remove("work-step-1")
  work.classList.remove("work-step-2")
  work.classList.remove("work-step-3")
})



new Accordion('.accordion-list', {
  elementClass: 'ac',
  triggerClass: 'accordion__control',
  activeClass: 'accordion--active',
  panelClass: 'ac-panel',
});
