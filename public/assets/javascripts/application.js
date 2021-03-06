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
        $('.sentbox_decor').attr('class', 'sentbox_decor uflowers');
        $('.sentbox p').html('Find terrific wines to buy at <a href=\"http://www.jjbuckley.com/\">JJ Buckley Fine Wines</a> &#187;');
        break;
      case "winetasting":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.livingsocial.com/\">LIVINGSOCIAL.COM</a>');
        $('.lightbox h2').html('Compliments of WineTasting.com');
        $('.lightbox_decor').attr('class', 'lightbox_decor livingsocial');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/livingsocial.png');
        $('.sentbox_decor').attr('class', 'sentbox_decor livingsocial');
        $('.sentbox p').html('Find terrific wines to buy at <a href=\"http://www.winetasting.com/\">WineTasting.com</a> &#187;');
        break;
      case "winetasting_2":
        $('.lightbox h1').html('$25 GIFT AT <a href=\"http://www.bluecrab.com/\">BLUE CRAB TRADING CO.</a>');
        $('.lightbox h2').html('Compliments of WineTasting.com');
        $('.lightbox_decor').attr('class', 'lightbox_decor blue_crab');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/blue-crab.png');
        $('.sentbox_decor').attr('class', 'sentbox_decor blue_crab');
        $('.sentbox p').html('Find terrific wines to buy at <a href=\"http://www.winetasting.com/\">WineTasting.com</a> &#187;');
        break;
      case "winetasting_3":
        $('.lightbox h1').html('$25 GIFT AT <a href=\"http://www.shoebuy.com/\">SHOEBUY.COM</a>');
        $('.lightbox h2').html('Compliments of WineTasting.com');
        $('.lightbox_decor').attr('class', 'lightbox_decor shoe_buy');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/shoe-buy.png');
        $('.sentbox_decor').attr('class', 'sentbox_decor shoe_buy');
        $('.sentbox p').html('Find terrific wines to buy at <a href=\"http://www.winetasting.com/\">WineTasting.com</a> &#187;');
        break;
      case "blue_crab":
        $('.lightbox h1').html('$20 GIFT AT <a href=\"http://www.livingsocial.com/\">LIVINGSOCIAL.COM</a>');
        $('.lightbox h2').html('Compliments of Blue Crab Trading Co.');
        $('.lightbox_decor').attr('class', 'lightbox_decor livingsocial');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/livingsocial.png');
        $('.sentbox_decor').attr('class', 'sentbox_decor livingsocial');
        $('.sentbox p').html('Find terrific seafood to buy at <a href=\"http://www.bluecrab.com/\">Blue Crab Trading Co.</a> &#187;');
        break;
      case "bssc":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of Boston Ski & Sports Club');
        $('.lightbox_decor').attr('class', 'lightbox_decor uflowers');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/uflowers.png');
        $('.sentbox_decor').attr('class', 'sentbox_decor uflowers');
        $('.sentbox p').html('Discover terrific sports at <a href=\"http://www.bssc.com/\">Boston Ski & Sports Club</a> &#187;');
        break;
      case "citygolf":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of CityGolf Boston');
        $('.lightbox_decor').attr('class', 'lightbox_decor uflowers');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/uflowers.png');
        $('.sentbox_decor').attr('class', 'sentbox_decor uflowers');
        $('.sentbox p').html('Discover terrific golf games at <a href=\"http://www.citygolfboston.com/\">CityGolf Boston</a> &#187;');
        break;
      case "harryhasit":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of HarryHasIt.com');
        $('.lightbox_decor').attr('class', 'lightbox_decor uflowers');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/uflowers.png');
        $('.sentbox_decor').attr('class', 'sentbox_decor uflowers');
        $('.sentbox p').html('Find any kind of tickets to buy at <a href=\"http://www.harryhasit.com/\">HarryHasIt.com</a> &#187;');
        break;
      case "rockspot":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of Rock Spot Climbing');
        $('.lightbox_decor').attr('class', 'lightbox_decor uflowers');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/uflowers.png');
        $('.sentbox_decor').attr('class', 'sentbox_decor uflowers');
        $('.sentbox p').html('Find terrific rock climbing games at <a href=\"http://www.rockspotclimbing.com/\">Rock Spot Climbing</a> &#187;');
        break;
      case "northern_outdoors":
        $('.lightbox h1').html('$15 GIFT AT <a href=\"http://www.fromyouflowers.com/\">FROMYOUFLOWERS.COM</a>');
        $('.lightbox h2').html('Compliments of Northern Outdoors');
        $('.lightbox_decor').attr('class', 'lightbox_decor uflowers');
        $('.advertiser_logo img').attr('src', 'assets/images/logos/uflowers.png');
        $('.sentbox_decor').attr('class', 'sentbox_decor uflowers');
        $('.sentbox p').html('Discover terrific outdoor games at <a href=\"http://www.northernoutdoors.com/\">Northern Outdoors</a> &#187;');
        break;
    }
    
  });
  
});