$(document).ready(function() {

  $('#navigation a').click(function() {
    var $target = $(this).attr('class')
    $('body').attr('id', $target);
    
    switch ($target) {
      case "jjbuckley":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of JJ Buckley Fines Wines');
        $('.lightbox_decor').attr('class', 'lightbox_decor uflowers');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/uflowers.png');
        break;
      case "winetasting":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.livingsocial.com/\">LIVINGSOCIAL.COM</a>');
        $('.lightbox h2').html('Compliments of WineTasting.com');
        $('.lightbox_decor').attr('class', 'lightbox_decor livingsocial');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/livingsocial.png');
        break;
      case "winetasting_2":
        $('.lightbox h1').html('$25 GIFT AT <a href=\"http://www.bluecrab.com/\">BLUE CRAB TRADING CO.</a>');
        $('.lightbox h2').html('Compliments of WineTasting.com');
        $('.lightbox_decor').attr('class', 'lightbox_decor blue_crab');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/blue-crab.png');
        break;
      case "winetasting_3":
        $('.lightbox h1').html('$25 GIFT AT <a href=\"http://www.shoebuy.com/\">SHOEBUY.COM</a>');
        $('.lightbox h2').html('Compliments of WineTasting.com');
        $('.lightbox_decor').attr('class', 'lightbox_decor shoe_buy');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/shoe-buy.png');
        break;
      case "blue_crab":
        $('.lightbox h1').html('$20 GIFT AT <a href=\"http://www.livingsocial.com/\">LIVINGSOCIAL.COM</a>');
        $('.lightbox h2').html('Compliments of Blue Crab Trading Co.');
        $('.lightbox_decor').attr('class', 'lightbox_decor livingsocial');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/livingsocial.png');
        break;
      case "bssc":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of Boston Ski & Sports Club');
        $('.lightbox_decor').attr('class', 'lightbox_decor uflowers');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/uflowers.png');
        break;
      case "citygolf":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of CityGolf Boston');
        $('.lightbox_decor').attr('class', 'lightbox_decor uflowers');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/uflowers.png');
        break;
      case "harryhasit":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of HarryHasIt.com');
        $('.lightbox_decor').attr('class', 'lightbox_decor uflowers');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/uflowers.png');
        break;
      case "rockspot":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of Rock Spot Climbing');
        $('.lightbox_decor').attr('class', 'lightbox_decor uflowers');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/uflowers.png');
        break;
      case "northern_outdoors":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of Northern Outdoors');
        $('.lightbox_decor').attr('class', 'lightbox_decor uflowers');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/uflowers.png');
        break;
    }
    
  });
  
});