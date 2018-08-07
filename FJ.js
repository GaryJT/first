$(document).ready(function(){
	$("#bone").click(function(){
		$("p").slideToggle();
	});
});
$(document).ready(function(){
	$("h1, h3, h2, .responsive").hover(function(){
		$(this).css("color", "#c4960d");
	}, function(){
		$(this).css("color", "black");
	});
});