
$('.room__buttons-btn').click(function(){
  $(this).find('.room__buttons-text').toggleClass('active-text');
  $(this).find('.room__buttons-cross').toggleClass('non-active');
  $(this).find('.room__buttons-background').toggleClass('active-back');
  $(this).find('.room__buttons-icon').toggleClass('active-icon');
  });

  $( ".room__buttons-btn" ).on( "click", function() {
    $( this ).toggleClass( "active-btn" );
  });