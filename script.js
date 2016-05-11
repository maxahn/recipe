$(document).ready(function() {
  console.log("Script included!");

  $('#hide-pic').click(function() {
  	if($(this).is(':checked')) {
  		$('img').hide();
  	}
  	else {
  		$('img').show();
  	}
  });
});