
$(document).ready(function() {
	
	function addItem() {
		var item = $(".newItem").val();
		$(".items").append('<li><input class="listItem" type="checkbox"/>' + item + '<button class="remove">x</button></li>');
		$('.newItem').val('');
	}

	function onKeyDown(event) {
		if (event.keyCode === 13){
			addItem();
		}

	}
	/*$(".items").change(function() {
		$(this).toggleClass('checked');
	});
	*/


	$(".items").on("click", ".remove", function() {
		$(this).parent('li').remove();
	});


	
	$('.addItem').click(addItem);
	$('.newItem').keydown(onKeyDown);



}); 