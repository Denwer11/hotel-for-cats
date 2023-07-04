
$('.questions__problem').click(function(){
    let src = ($(this).find('.questions__problem-icon').attr("src") === "./icons/check.svg")
                  ? "./icons/white-cross.svg" 
                  : "./icons/check.svg";
    $(this).find('.questions__answer').toggleClass('active-answer');
    $(this).find('.questions__problem-text').toggleClass('active-pr-txt');
    $(this).find('.questions__problem-icon').toggleClass('active-pr-icon').attr("src", src);
    $(this).find('.questions__problem-round').toggleClass('active-pr-round');
    $( ".questions-item" ).on( "click", function() {
      $(this).toggleClass( "active-item" );
    });
});
