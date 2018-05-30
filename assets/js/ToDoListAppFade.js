// Check Off Specific Todos By Clickend 
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
})

//Click on X to delete Todo
$("ul").on("click", "span" ,function() {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
})


//Add a new Todo by clicking enter
$("input[type='text']").keypress(function(event){
	if(event.which===13) {
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
		$(this).val("");
	}
})

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})