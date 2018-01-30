$('img').on('click', function() {
  let src = '';
  let clickedSrc = '';

  $('#flyout').removeClass('hidden')
  $('#flyout').addClass('animated')

  clickedSrc = $(this).data('imgsrc')
  src = `${clickedSrc}.jpeg`

  $('#flyout img').attr('src', src)

// Removing the class to keep the flyout effect with every new click
  setTimeout(function() {
    $('#flyout').removeClass('animated');
  },500);
});

// Resetting the properties
$('#flyout').on('click', function() {
  if (!$(this).hasClass('hidden')) {
    $(this).addClass('hidden')
    $(this).removeClass('animated')
  }
})
