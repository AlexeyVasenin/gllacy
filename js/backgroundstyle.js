var inputone = document.querySelector('#slider__input--1');
var inputtwo = document.querySelector('#slider__input--2');
var inputthree = document.querySelector('#slider__input--3');
var backgr = document.querySelector('body').style.background='';

inputone.addEventListener('change', function () {
  document.querySelector('body').style.background='#849d8f'
  // body...
});

inputtwo.addEventListener('change', function () {
  document.querySelector('body').style.background='#8996a6'
  // body...
});

inputthree.addEventListener('change', function () {
  document.querySelector('body').style.background='#9d8b84'
  // body...
});