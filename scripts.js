$(document).ready(function() {
	$('#add-address').click(function(){
		$('#new-addresses').append('<div class="new-address">' +
					                  '<div class="form-group">' +
					                    '<label for="new-street">Street</label>' +
					                    '<input type="text" class="form-control new-street">' +
					                '</div>'+
                
					                '<div class="form-group">'+
					                 ' <label for="new-city">City</label>'+
					                 ' <input type="text" class="form-control new-street">'+
					               ' </div>'+

					                '<div class="form-group">'+
					                  '<label for="new-state">State</label>'+
					                 ' <input type="text" class="form-control new-state">'+
					                '</div>'+
					            '</div>'
					          	);
	});
	
	$('#new-contact').submit(function(event){
 		event.preventDefault();

 		var inputtedFirstName = $('#new-first-name').val();
 		var inputtedLastName = $('#new-last-name').val();
 		var inputtedAddress = $('#new-address').val();
 		
 		var newContact = {firstName: inputtedFirstName,
 						  lastName: inputtedLastName,
 						  addresses: []
 						  };

 		$('.new-address').each(function(){
 			var inputtedStreet = $(this).find('.new-street').val();
 			var inputtedCity = $(this).find('.new-city').val();
 			var inputtedState = $(this).find('.new-state').val();

 			var newAddress = {street: inputtedStreet,
 							  city: inputtedCity,
 							  state: inputtedState
 							  };
 			newContact.addresses.push(newAddress);
 		})

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