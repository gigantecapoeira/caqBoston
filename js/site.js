var bodyId = document.body.id;
switch ( bodyId ) {
	case 'index':
		index();
		break;
	case 'songs':
		songs();
		break;
}

function Helper(){}

Helper.prototype.menushrink = function(){
	var self = this;
	$('#panel_open').on( 'touchstart click', function(e){
		e.preventDefault();
		self.menutoggle();
	});
}

Helper.prototype.menutoggle = function(){
	var self = this;
	if ( self.wait == true ) { return }
	$('#panel').toggleClass('open');
	if ( $('#panel').hasClass('open') ){
		$('#panel_open .switch' ).html('-');
	}
	else {
		$('#panel_open .switch' ).html('+');
	}
	self.wait = true;
	setTimeout(function(){
		self.wait = false;
	}, 100 );
}

var help = new Helper();

//  All pages

$(function() {
	
	//  Scroll to the right section
	
	$('a[href*=#]:not([href=#])').on( 'touchstart click', function(e) {
		if ( help.wait == true ){
			e.preventDefault();
			return
		}
		help.menutoggle();
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - $('#extra-info').height()
				}, 1000);
				return false;
			}
		}
	});
});

function songs() {
	$(document).ready( function() {
		$( '#english.button' ).on( 'touchstart click', function() {
			var text = $( this ).text();
			if ( text.indexOf( 'Off' ) > -1 ) {
				text = text.replace( 'Off', 'On' );
				$( 'label' ).hide();
			}
			else {
				text = text.replace( 'On', 'Off' );
				$( 'label' ).show();
			}
			$( this ).text( text )
		});
	});
}

//  Index

function index() {	
	
	//  Image slideshow

	$(document).ready( function() {
		var tick = 0;
		var photos = [
      'img/bg/intro.jpg',
      'img/bg/mirror_roda.jpg',
      'img/bg/music.jpg'
    ];
		var wait = 5;
		help.menushrink();
		function intro() {
			return $($( 'section#intro' ).get( 0 ));
		}
		function switchPhotos() {
			setInterval( function() {
				tick++;
				var n = tick % photos.length;
				intro().css({
          "background-image":"url("+photos[n]+")"
        });
			}, wait*1000 );
		}
    switchPhotos();( 0 );
	});
}