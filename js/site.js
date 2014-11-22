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
	$('#panel_open').on( 'touchstart click', function(){
		$('#panel').toggleClass('open');
		if ( $('#panel').hasClass('open') ){
			$('#panel_open' ).html('-');
			return;
		}
		$('#panel_open' ).html('+');
	});
}

var help = new Helper();

//  All pages

$(function() {
	
	//  Scroll to the right section
	
	$('a[href*=#]:not([href=#])').click(function() {
		$('#panel').removeClass('open');
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
		var photos = [ 'img/bg/mirror_roda.jpg', 'img/bg/music.jpg' ];
		var wait = 5;
		help.menushrink();
		
		//  Load all the images
		
		function loadPhotos( _index ) {
			
			//  Once all the photos are loaded start the switcher
			
			if ( _index >= photos.length ) {
				switchPhotos();
				return
			}
			var img = new Image();
			img.onload = function() {
				
				//  Load a new section
				
				addPhoto( _index );
				sizeSections();
				_index++;
				loadPhotos( _index );
			}
			img.src = photos[ _index ];
		}
		function addPhoto( _index ) {
			var wrap = intro( 0 ).clone();
			intro(-1).after( wrap );
			var i = _index+1;
			intro( i ).css({
				'background-image':'url('+ photos[ _index  ] +')',
				opacity:0
			});
		}
		function sizeSections() {
			var n = $( 'section#intro' ).length;
			for ( var i=1; i<n; i++ ) {
				var section = intro(i)
				section.css({
					'margin-top': -1 * section.prev().height()
				});
			}
		}
		function intro( _index ) {
			return $($( 'section#intro' ).get( _index ));
		}
		function introTotal() {
			return $( 'section#intro' ).length;
		}
		function switchPhotos() {
			setInterval( function() {
				tick++;
				var n = tick % introTotal();
				for ( var i=introTotal(); i>0; i-- ) {
					if ( i == n ) {
						continue;
					}
					intro( i ).css({ 
						opacity:0 
					});
				}
				intro( n ).css({ opacity:1 });
			}, wait*1000 );
		}
		$( window ).resize( function() {
			sizeSections();
		});
		loadPhotos( 0 );
	});
}