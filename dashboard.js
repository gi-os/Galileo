var enterFullscreen = function(el) {
	if(el.requestFullscreen) {
		el.requestFullscreen();
	} else if(el.msRequestFullscreen) {
		el.msRequestFullscreen();
	} else if(el.mozRequestFullScreen) {
		el.mozRequestFullScreen();
	} else if(el.webkitRequestFullscreen) {
		el.webkitRequestFullscreen();
	} else {
		noFullscreenSupport();
	}
};

var exitFullscreen = function() {
	if(document.exitFullscreen) {
		document.exitFullscreen();
	} else if(document.msExitFullscreen) {
		document.msExitFullscreen();
	} else if(document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if(document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else {
		noFullscreenSupport();
	}
};

var noFullscreenSupport = function() {
	alert('Your browser does not support the Fullscreen API.');
};

var fullscreenButton = document.getElementById('fullscreen-button');
fullscreenButton.addEventListener('click', function(e) {
	e.preventDefault();
	if((window.innerWidth === screen.width && window.innerHeight === screen.height) || (window.fullScreen)) {
		exitFullscreen();
	} else {
		enterFullscreen(document.documentElement);
	}	
});

var eventList = ["fullscreenchange", "MSFullscreenChange", "mozfullscreenchange", "webkitfullscreenchange"];
for(event of eventList) {
	window.addEventListener(event, function() {
		if(fullscreenButton.querySelector('.fa').classList.contains('fa-compress')) {
			fullscreenButton.querySelector('.fa').classList.add('fa-expand');
			fullscreenButton.querySelector('.fa').classList.remove('fa-compress');
		} else if(fullscreenButton.querySelector('.fa').classList.contains('fa-expand')) {
			fullscreenButton.querySelector('.fa').classList.remove('fa-expand');
			fullscreenButton.querySelector('.fa').classList.add('fa-compress');
		}
	});
}



$(".notes").click(function() {
    $('div[class^="appbox"]').css('z-index', '0');
    $(this).css('z-index', '10');
  
})
$(".wiki").click(function() {
    // make div 2 front of the screen
 $('div[class^="appbox"]').css('z-index', '0');
  $(this).css('z-index', '10');
 
})
$(".calc").click(function() {
    // make div 3 front of the screen
 $('div[class^="appbox"]').css('z-index', '0');
  $(this).css('z-index', '10');
  
})
$(".sketch").click(function() {
    // make div 3 front of the screen
 $('div[class^="appbox"]').css('z-index', '0');
  $(this).css('z-index', '10');
  
})







