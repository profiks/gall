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
    
    
  
 
  
    
    $(window).load(function(){
				
				
				$("#accordion").mCustomScrollbar({
					//setHeight:200,
					theme:"dark-3",
                    axis:"x",
					//theme:"light-3",
					advanced:{autoExpandHorizontalScroll:true}
				});
        
				$("#fancybox-thumbs").mCustomScrollbar({
					theme:"dark-3",
                    axis:"x",
					advanced:{autoExpandHorizontalScroll:true}
				});
        
                
			});
    
});
