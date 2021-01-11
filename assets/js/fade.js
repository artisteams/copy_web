$('head').append(
'<style>body{display:none;}'
);
$(window).on("load", function() {
$('body').delay(200).fadeIn(1500);
});