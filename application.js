var tooltip = document.querySelector('.tooltip');

document.body.addEventListener('click', function(evt) {
  tooltip.style.top = evt.clientY + 'px';
  tooltip.style.left = evt.clientX + 'px';
  console.log('click');
}, true)