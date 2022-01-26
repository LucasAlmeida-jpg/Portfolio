
const myInput = document.querySelector('input'),
	mySpan = document.querySelector('span');

let counter = 0,
	timer = null; // variavel para armazenar nosso timer

myInput.addEventListener('input', function(){
	// limpamos o timer
  	clearTimeout(timer);
	// armazenamos o timer novamente
  	timer = setTimeout(function(){
  		mySpan.innerText = ++counter;
  	}, 500);
})
const hamburger = document.querySelector(
  '.header .nav-bar .nav-list .hamburger'
)
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul')
const menu_item = document.querySelectorAll(
  '.header .nav-bar .nav-list ul li a'
)
const header = document.querySelector(' .header.container')

menu_item.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
  })
})

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  mobile_menu.classList.toggle('active')
})

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY
  if (scroll_position > 200) {
    header.style.backgroundColor = '#29323c'
  } else {
    header.style.backgroundColor = 'transparent'
  }
})

var index = 0

show_image(index)
function show_image(i) {
  index += i

  var images = document.getElementsByClassName('image')

  var dots = document.getElementsByClassName('dot')

  for (i = 0; i < images.length; i++) images[i].style.display = 'none'

  for (i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(' active', '')

  if (index > images.length - 1) index = 0

  if (index < 0) index = images.length - 1

  images[index].style.display = 'block'
  dots[index].className += ' active'
}

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'
function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass)
    } else {
      element.classList.remove(animationClass)
    }

    console.log(element.offsetTop)
  })
}

animeScroll()

if (target.length) {
  window.addEventListener('scroll', debounce (function () {
    animeScroll()
  }, 200))
}
