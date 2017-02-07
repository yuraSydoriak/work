
$(window).resize(function(){

	$('.centered_this').css({
		position:'absolute',
		left: ($(document).width() - $('.centered_this').outerWidth())/2,
		top: ($(document).height() - $('.centered_this').outerHeight())/2
	});

});

// Для запуска функции:
$(window).resize();


var scene = document.getElementById('scene');
var parallax = new Parallax(scene);