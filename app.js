
$(document).ready(function() {
	var count = 0;

	function addItem() {
		var item = $(".newItem").val();
		$(".items").append('<li><input class="checkboxid" type="checkbox"/>' + item + '<button class="remove">x</button></li>');
		$('.newItem').val('');
		count=count + 1;
		$('.count').text(count);
	}

	function onKeyDown(event) {
		if (event.keyCode === 13){
			addItem();
		}

	}
	
	$(".items").on('click', '.checkboxid' , function() {
		$(this).parent().toggleClass('checked');
		var selected = $(':checked').length;
		if (selected === 0){
			$('.delete-checked').css('display', 'none');
		} else {
			$('.delete-checked').css('display', 'block');
		}

	});




	$(".items").on("click", ".remove", function() {
		console.log(this);
		$(this).parent().remove();
		count=count - 1;
		$('.count').text(count);
	});


	$('.delete-checked').click(function() {
		var selected = $(':checked').parent();
		count = count - selected.length;
		selected.remove();
		$('.count').text(count);
	})

	$('.addItem').click(addItem);
	$('.newItem').keydown(onKeyDown);



}); 