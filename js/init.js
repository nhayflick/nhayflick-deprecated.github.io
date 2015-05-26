$('a#scroll-to-projects').on('click', function() {
  $.smoothScroll({
    scrollElement: $('body'),
    scrollTarget: '#projects-header'
  });
  return false;
});