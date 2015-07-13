// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Slideout (https://github.com/Mango/slideout)
var slideout = new Slideout({
  'panel': document.getElementById('slideout-panel'),
  'menu': document.getElementById('slideout-menu'),
  'padding': 225,
  'tolerance': 70,
  'side': "right",
  'touch': false
});

// Slideout toggle button
document.querySelector('#slideout-toggle').addEventListener('click', function() {
  slideout.toggle();
});

// Turn ☰ into ×
slideout.on('beforeopen', function() {
  $('#slideout-toggle').html("&times;");
});

slideout.on('beforeclose', function() {
  $('#slideout-toggle').html("&#9776;");
});