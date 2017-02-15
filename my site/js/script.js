
$(window).resize(function(){

	$('.centered_this').css({
		position:'absolute',
		left: ($('.wrapper').width() - $('.centered_this').outerWidth())/2,
		top: ($('.wrapper').height() - $('.centered_this').outerHeight())/2
	});

});

// Для запуска функции:
$(window).resize();


var scene = document.getElementById('scene');
var parallax = new Parallax(scene);