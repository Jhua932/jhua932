function fadeImage() {
  $('img').fadeToggle();
}

function setupHandlers() {
  $('#site-logo').on('click', fadeImage);
}

$(document).ready(setupHandlers);
