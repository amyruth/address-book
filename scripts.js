$(document).ready(function() {
 	$('#new-contact').submit(function(event){
 		event.preventDefault();

 		var inputtedFirstName = $('#new-first-name').val();
 		var inputtedLastName = $('#new-last-name').val();
 		var inputtedAddress = $('#new-address').val();
 		var newContact = {firstName: inputtedFirstName,
 						  lastName: inputtedLastName,
 						  address: inputtedAddress
 						  };

 		$('#contact').append('<li><span class="contact">' + newContact.firstName + " " + newContact.lastName +'</span></li>');


 		$('.contact').click(function(){
 			$('#show-contact h2').text(inputtedFirstName + " " + inputtedLastName);
 			$('.first-name').text(inputtedFirstName);
 			$('.last-name').text(inputtedLastName);
 			$('.address').text(inputtedAddress);
 			$('#show-contact').show();
 		});
 	});


});