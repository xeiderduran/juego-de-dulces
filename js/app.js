$(function(){
  iniciar();
  function CambiarColor(selector) {
  	$(".main-titulo").animate({
  			opacity: '1',
  		}, {
  			step: function () {
  				$(this).css('color', 'white');
  			},
  			queue: true
  		})
  		.animate({
  			opacity: '1'
  		}, {
  			step: function () {
  				$(this).css('color', 'yellow');
  			},
  			queue: true
  		}, 600)
  		.delay(1000)
  		.animate({
  			opacity: '1'
  		}, {
  			step: function () {
  				$(this).css('color', 'white');
  			},
  			queue: true
  		})
  		.animate({
  			opacity: '1'
  		}, {
  			step: function () {
  				$(this).css('color', 'yellow');
  				CambiarColor('h1.main-titulo');
  			},
  			queue: true
  		});
  }
