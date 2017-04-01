$(document).ready(function() {
	$('.grid').mouseover(function() {
		$(this).addClass('purple');
	});

	$('#clear').click(function() {
		$(".grid").each(function() {
			$(this).removeClass('purple');
		});
	});
});