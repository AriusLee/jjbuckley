$(document).ready(function() {

  $('#navigation a').click(function() {
    var $target = $(this).attr('class')
    $('body').attr('id', $target);
    
    switch ($target) {
      case "jjbuckley":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of JJ Buckley Fines Wines');
        break;
      case "bssc":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of Boston Ski & Sports Club');
        break;
      case "citygolf":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of CityGolf Boston');
        break;
    }
    
  });
  
});