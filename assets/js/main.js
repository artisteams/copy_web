

/*------------------------------------------------------*/
/*------------------------------------------------------*/

/*スローススクロール用*/

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

/*------------------------------------------------------*/
/*------------------------------------------------------*/

/*-フェードイン表示- 下から */

$(function(){
$('.fade-in').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = jQuery(window).height(),
     topWindow = jQuery(window).scrollTop();
 $('.fade-in').each(function(){
  var targetPosition = jQuery(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   jQuery(this).addClass("fadeInDown");
  }
 });
});
});

/*-フェードイン表示- 左 */
$(function(){
$('.fade-in-left').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = jQuery(window).height(),
     topWindow = jQuery(window).scrollTop();
 $('.fade-in-left').each(function(){
  var targetPosition = jQuery(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   jQuery(this).addClass("fadeInDown-left");
  }
 });
});
});

/*-フェードイン表示- 右 */
$(function(){
$('.fade-in-right').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = jQuery(window).height(),
     topWindow = jQuery(window).scrollTop();
 $('.fade-in-right').each(function(){
  var targetPosition = jQuery(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   jQuery(this).addClass("fadeInDown-right");
  }
 });
});
});


/*------------------------------------------------------*/
/*------------------------------------------------------*/

/*-for_exhibit-*/

$(function() {
    var pagetop = $('#for_exhibit');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1500) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});

/*------------------------------------------------------*/
/*------------------------------------------------------*/

/*-画面遷移時のフェードイン表示用-*/
$(function(){
    $('body').fadeMover();
});

/*------------------------------------------------------*/
/*------------------------------------------------------*/

/*-ローディング用_プログレスバー_フェードイン表示-*/
Pace.on('done', function(){
            $('.Wrapper , .Wrapper-A , img , p , #nav-toggle , h2 , h3 , h4 , h5 , time , figure').fadeIn(2000);
        });

Pace.on('start', function() {
    $('.Wrapper , .Wrapper-A , img , p , #nav-toggle , h2 , h3 , h4 , h5 , time , figure').css('display', 'none');
});

Pace.on('done', function() {
    $('.Wrapper , .Wrapper-A , img , p , #nav-toggle , h2 , h3 , h4 , h5 , time , figure').css('display', 'block');
});


/*------------------------------------------------------*/
/*------------------------------------------------------*/

/*-ランダム表示-*/
/*var bgImages = [
  'top-bg01.jpg',
  'top-bg02.jpg',
  'top-bg03.jpg',
  'top-bg04.jpg'
];
var randBg = bgImages[Math.floor(Math.random() * bgImages.length)];
$('.top_wrapper').css('background-image', 'url(' + randBg + ')');*/

/*------------------------------------------------------*/
/*------------------------------------------------------*/

/*-safari用ブラウザバック-*/

window.onpageshow = function(event) {
  if (event.persisted) {
     window.location.reload();
  }
};

/*------------------------------------------------------*/
/*------------------------------------------------------*/