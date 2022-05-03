// buttons for story
let myPlace = localStorage.getItem('place')

if (myPlace) {
  localStorage.setItem('place', 'one')
  myPlace = 'one'
  console.log(myPlace)
} else {
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
}

$('a.two-a').click(function () {
  localStorage.setItem('place', 'two-a')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
  if (myPlace == 'two-a') {
    $('p.two-a').css('display', 'block')
    $('p').not('.two-a').css('display', 'none')
  }
})
$('a.two-b').click(function () {
  $('p.two-b').css('display', 'block')
  $('p').not('.two-b').css('display', 'none')
  localStorage.setItem('place', 'two-b')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})
$('a.two-c').click(function () {
  $('p.two-c').css('display', 'block')
  $('p').not('.two-c').css('display', 'none')
  localStorage.setItem('place', 'two-c')
  console.log(myPlace)
  myPlace = localStorage.getItem('place')
})
$('a.two-d').click(function () {
  $('p.two-d').css('display', 'block')
  $('p').not('.two-d').css('display', 'none')
  localStorage.setItem('place', 'two-d')
  console.log(myPlace)
  myPlace = localStorage.getItem('place')
})
$('a.three-a').click(function () {
  $('p.three-a').css('display', 'block')
  $('p').not('.three-a').css('display', 'none')
  localStorage.setItem('place', 'three-a')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})
$('a.three-b').click(function () {
  $('p.three-b').css('display', 'block')
  $('p').not('.three-b').css('display', 'none')
  localStorage.setItem('place', 'three-b')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})
$('a.three-c').click(function () {
  $('p.three-c').css('display', 'block')
  $('p').not('.three-c').css('display', 'none')
  localStorage.setItem('place', 'three-c')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})
$('a.three-d').click(function () {
  $('p.three-d').css('display', 'block')
  $('p').not('.three-d').css('display', 'none')
  localStorage.setItem('place', 'three-d')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})
$('a.four-a').click(function () {
  $('p.four-a').css('display', 'block')
  $('p').not('.four-a').css('display', 'none')
  localStorage.setItem('place', 'four-a')
  myPlace = localStorage.getItem('place')
})
$('a.four-b').click(function () {
  $('p.four-b').css('display', 'block')
  $('p').not('.four-b').css('display', 'none')
  localStorage.setItem('place', 'four-a')
  myPlace = localStorage.getItem('place')
})
$('a.four-c').click(function () {
  $('p.four-c').css('display', 'block')
  $('p').not('.four-c').css('display', 'none')
  localStorage.setItem('place', 'four-a')
  myPlace = localStorage.getItem('place')
})
