$(document).ready(function(e) {
  if ($(window).width() > 100 && $(window).width() < 768) {
    console.log("yes")
    $('.left_pageinfo').hide()
    $('.left_pageinfo_mobile').show()
    $('.notes_count').hide()

    $('.page_text').html("Стр")
    e.preventDefault();

  }

  if (($(window).width() > 768 && $(window).width() < 1081) && $(window).orientation == "portrait") {
    $('.block2').css({width: "auto"})
    $('.block4').css({width: "auto"})
    $('.block1').css({width: "auto"})
    $('.block1').css({width: "auto"})

    var maxWidth = Math.max(
      $('.block2').outerWidth(),
      $('.block4').outerWidth()
    );
    console.log($('.block2').outerWidth())
    

    $('.block2').width(maxWidth);
    $('.block4').width(maxWidth);

    
    var containerWidth = $('.edit_card_container').width();
    var remainingWidth = containerWidth - maxWidth; 


    $('.block1').width(remainingWidth );
    console.log(remainingWidth );
    $('.block3').width(remainingWidth);
      } 

  else {
    $('.left_pageinfo').show()
    $('.left_pageinfo_mobile').hide()
    $('.notes_count').show()

  }
});
  