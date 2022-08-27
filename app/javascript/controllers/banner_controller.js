var interval;
console.log("test")
$(function () {
  changeSlide = function(){
    $img = $('.banner__images img.inactive');
    $img.removeClass('inactive');

    if ($img.is(':last-child')){
      $next = $($img.siblings(':first'));
    } else {
      $next = $($img.next());
    }

    $next.addClass('inactive');
  }

  interval = setInterval(changeSlide, 5000);
})
