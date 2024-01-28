//Бургер меню


// menuBtn.addEventListener('click', function () {
//   menu.classList.toggle('open');
//   starting.classList.toggle('blur');
//   education.classList.toggle('blur');
//   logo.classList.toggle('blur');
//   body.classList.toggle('block');
// });

// Бургер меню
const menu = document.querySelector('.burger-menu');
const starting = document.querySelector('.starting');
const education = document.querySelector('.education');
const menuBtn = document.querySelector('.menu-btn');
const logo = document.querySelector('.header__logo');
const menuItems = document.querySelectorAll('.link');
const body = document.body;

menuBtn.addEventListener("click", function (e) {
  menu.classList.toggle('open');
  education.classList.toggle('blur');
  starting.classList.toggle('blur');
  logo.classList.toggle('blur');
  body.classList.toggle('block');
})

menuItems.forEach(i => i.addEventListener('click', () => {
  menu.classList.remove('open');
  body.classList.remove('block');
  education.classList.remove('blur');
  starting.classList.remove('blur');
  logo.classList.remove('blur');
}))

// Плавна прокрутка Меню
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".link");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
      event.preventDefault();

      const blockID = event.target.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: "start",
      });
    });
  }
})

// Проверка инпутов

function validation() {
  const text = document.getElementById('red_name');
  const tel = document.getElementById('red_tel');
  document.querySelector('.application').classList.remove('visible');

  // Ошибки

  const nameInput = document.getElementById('name').value;
  if (nameInput === '') {
    text.innerHTML = 'Поле обязетельно к заполнению';
    document.getElementById('name').style.borderColor = '#FC0000'
    return false;
  }

  const telInput = document.getElementById('tel').value;
  if (telInput === '' || telInput.length < 12) {
    tel.innerHTML = 'Поле обязетельно к заполнению';
    document.getElementById('tel').style.borderColor = '#FC0000'
    return false;
  }

  // Подтверждение отправки
  if (telInput.length >= 12 && nameInput.length >= 3) {
    document.querySelector('.application').classList.add('visible');

    tel.innerHTML = '';
    document.getElementById('tel').style.borderColor = "none";

    text.innerHTML = '';
    document.getElementById('name').style.borderColor = "none";

    // Очистка формы
    const form = document.querySelector(".form_page");

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.reset();
    })
  }
}

// PopUp
const btn = document.querySelector('.start');
const popUp = document.querySelector('.wrapper-popup');
const backgroundPopup = document.querySelector('.background-popup');
const wrapper = document.querySelector('.wrapper');
const closeBtn = document.querySelector('.close');

btn.addEventListener('click', function () {
  popUp.classList.add('active');
  backgroundPopup.classList.add('active');
  wrapper.classList.add('blur');
  document.getElementsByTagName("body")[0].style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function () {
  popUp.classList.remove('active');
  backgroundPopup.classList.remove('active');
  wrapper.classList.remove('blur');
  document.getElementsByTagName("body")[0].style.overflow = 'scroll';
});