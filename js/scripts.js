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
    
    
  // Include this somewhere after main fancybox scripts
//$.fancybox.helpers.thumbs.onUpdate = function() {};  
    
});
