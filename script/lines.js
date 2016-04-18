const HANDLERS = ['click', 'mouseover'];
const COLORS = ['red', 'green', 'blue'];

//Register handlers on changer elements
var change_color = function( event ) {
  $('body').css('background-color', event.data.col);
};

$('.changer').each(function() {
  var class_string = $(this).attr('class');
  var class_list = class_string.split(' ');
  class_list.shift();
  while (class_list.length > 0) {
    var pair = class_list.shift().split('-');
    if (HANDLERS.indexOf(pair[0]) !== -1 && pair.length === 2) {
      handler = pair[0];
      color = pair[1];
    }
    else {
      break;
    }
    if (COLORS.indexOf(color) === -1) {
      console.log('Bad color');
      break;
    }
    $(this).on(handler, {
      col: color
    }, change_color);
  }
});
