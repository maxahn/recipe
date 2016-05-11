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
  // $('ingredient').each(function() {
  // 	if ($(this).val()) {
  // 		$(this).hide()
  // 	}
  // })
  
  $('li').click(function() {
  	$(this).toggle('highlight');
	console.log("clicked!");
  });
});