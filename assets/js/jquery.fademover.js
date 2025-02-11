(function($){
	$.fn.fadeMover = function(options) {
		var defaults = {
			'effectType': 1,
			'inSpeed': 80,
			'outSpeed': 800,
			'inDelay' : '0',
			'outDelay' : '0',
			'nofadeOut' : 'nonmover'
        };
        var setting = $.extend(defaults, options);
		var cnt = $(this).length-1;
        this.each(function(i) {
			var pel = this;
			if(setting.effectType == 1 || setting.effectType == 2) {
				$(pel).css("opacity", 0).delay(i*setting.inDelay).animate({opacity: 1}, setting.inSpeed);
			}
			if(setting.effectType == 1 || setting.effectType == 3) {
				$('a').click(function(event) {
					var moveUrl = $(this).attr("href");
					if(!$(this).hasClass(setting.nofadeOut) && moveUrl.charAt(0) != "#"){
						event.preventDefault();
						$(pel).delay(i*setting.outDelay).animate({"opacity": 0}, setting.outSpeed, function(){
						if(cnt == i || setting.outDelay == '0')
							location.href = moveUrl;
						});
					}
				});
			}
		});
		return this;
	}
	window.onunload = function () {};
})(jQuery);