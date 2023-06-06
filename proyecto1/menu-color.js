var div = document.getElementById('menu');
var rayas =document.getElementsByClassName('raya');

window.addEventListener('scroll', function() {
  var scrollHeight = window.innerHeight;
  var currentScroll = window.scrollY;
  
  if (currentScroll >= scrollHeight) {
    div.style.backgroundColor = 'black';
    rayas.style.backgroundColor='white';
  } else {
    div.style.backgroundColor = 'white';
    rayas.style.backgroundColor='black';
  }
});
