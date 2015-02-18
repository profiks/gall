$(document).ready(function() {
	$(".fancybox-thumb").fancybox({
        padding: 0,
        aspectRatio: true,
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
});