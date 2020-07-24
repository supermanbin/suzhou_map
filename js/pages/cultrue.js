$(function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $('.locations__list').on('click', 'span', function () {
    $('.locations__list span').removeClass('active');
    $(this).addClass('active');
    $('.left-item__intro .flex').hide().eq($(this).index()).show();
  });
});
