// ##################################################
// Line through element and turn it to gray and vice virsa
// ##################################################
$("ul").on("click", "li", function() {
	$(this).toggleClass("complete");
});
// ##################################################
// Remove item from th to do list
// ##################################################
$("ul").on("click", "span", function(event) {
	// select span to remove it
	$(this).parent().fadeOut('500', function() {
		$(this).remove();
	});
	/* Stop propagation */
	event.stopPropagation();
});
// ##################################################
// Add Value to the text input
// #################################################
$("input[type = 'text']").keypress(function(event) {
	if (event.which === 13) {
		/* Act on the event */
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append('<li><span><i class="fas fa-trash"></i></span> ' + todoText + '</li>');
	};
	
});