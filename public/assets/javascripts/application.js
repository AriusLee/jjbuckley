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
      case "harryhasit":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of HarryHasIt.com');
        break;
      case "rockspot":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of Rock Spot Climbing');
        break;
      case "northern_outdoors":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of Northern Outdoors');
        break;
    }
    
  });
  
});