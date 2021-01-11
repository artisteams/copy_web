/*------------------------------------------------------*/
/*------------------------------------------------------*/

$windowWidth = window.innerWidth;
 
$breakPointA = 480;
$breakPointB = 1120;
 
isMobileSize = ($windowWidth < $breakPointA);
isTabletSize = ($windowWidth <= $breakPointB) && ($windowWidth > $breakPointA);
isPcSize = ($windowWidth > $breakPointB);


if(isMobileSize){

$(document).ready(function(){
  $('.slick02').slick({
    autoplay: false,
    autoplaySpeed: 20000,
    speed: 800,
    dots: true,
    arrows: true,
    variableWidth: true,
    lazyLoad: 'progressive',
  });
});

}

if(isTabletSize){


}

if(isPcSize){


}


/*------------------------------------------------------*/
/*------------------------------------------------------*/
