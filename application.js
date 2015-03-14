var tooltip = document.querySelector('.tooltip');

var positions = ['top', 'left', 'bottom', 'right'];

var positionSwitcher = toDOM(
  ['.position-switcher', positions.map(function(position, i) {
    return {
      tag: 'div',
      events: {
        click: function() {
          positions.forEach(function(pos) { tooltip.classList.remove(pos); });
          tooltip.classList.add(position);
        }
      },
      children: [
        {tag: 'input.input' + i, attr: {name: 'position', type: 'radio'} },
        'span ' + position
      ]
    };
  })], this );

document.body.appendChild(positionSwitcher);
this.input0.click();

tooltip.style.top = '400px';
tooltip.style.left = '300px';
document.querySelector('.test-zone').addEventListener('mousemove', function(evt) {
  tooltip.style.top = evt.clientY + 'px';
  tooltip.style.left = evt.clientX + 'px';
}, false);