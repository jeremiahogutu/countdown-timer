var clock;

$(document).ready(function(){
	var clock;
	clock = $('#clock').FlipClock({
		clockFace: 'DailyCounter',
		autoStart: false,
		callbacks:{
			stop: function(){
				$('#message').html('The clock has stopped!');
			}
		}
	});
	clock.setTime(100630);
	clock.setCountdown(true);
	clock.start();
});