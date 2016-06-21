
$(document).ready(function(){
  $('.slideshow').slick({
    dots: true,
    arrows: true,
    infinite: true,
    lazyLoad: 'ondemand'
  });

  $('#menuLink').click(
    function handleClick(event) {
        event.preventDefault();
        $(event.target).toggleClass('active');
        $('#layout').toggleClass('active');
        $('#menu').toggleClass('active');
    });
});
		