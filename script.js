$(function () {
	$("#go_paint").click(function () {
		$("#block").css('width', $("#width").val());
		$("#block").css('height', $("#height").val());
	});
	$("#green").click(function () {
		$("#block").css('background', 'green');
	});
	$("#blue").click(function () {
		$("#block").css('background', 'blue');
	});
});
