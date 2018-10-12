// ##################################################
// Line through element and turn it to gray and vice virsa
// ##################################################
$("li").click(function() {
	$(this).toggleClass("complete");
});
// ##################################################
// Remove item from th to do list
// ##################################################
$("span").click(function(event) {
	/* Stop propagation */
	event.stopPropagation();
	// select span to remove it
	$(this).parent().fadeOut('500', function() {
		$(this).remove();
	});
});
// ##################################################
// ##################################################