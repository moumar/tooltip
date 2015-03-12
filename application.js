var tooltip = document.querySelector('.tooltip');

document.querySelector('.test-zone').addEventListener('mousemove', function(evt) {
  tooltip.style.top = evt.clientY + 'px';
  tooltip.style.left = evt.clientX + 'px';
}, false);