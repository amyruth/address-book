$(document).ready(function() {
	$('#add-address').click(function(){
		$('#new-addresses').append('<div class="new-address extra">' +
					                  '<div class="form-group">' +
					                    '<label for="new-street">Street</label>' +
					                    '<input type="text" class="form-control new-street">' +
					                '</div>'+
                
					                '<div class="form-group extra">'+
					                 ' <label for="new-city">City</label>'+
					                 ' <input type="text" class="form-control new-city">'+
					               ' </div>'+

					                '<div class="form-group extra">'+
					                  '<label for="new-state">State</label>'+
					                 ' <input type="text" class="form-control new-state">'+
					                '</div>'+
					            '</div>'
					          	);
	});

	$('#add-phone').click(function(){
		$('#new-contact-numbers').append('<div class="new-contact-number extra">'+
                							'<div class="form-group">'+
							                  '<label for="new-phone">Phone</label>'+
							                  '<input type="text" class="form-control new-phone">'+
							                '</div>'+
							             '</div>'
							             );
	});

	$('#add-email').click(function(){
		$('#new-emails').append('<div class="new-email-address extra">'+
                							'<div class="form-group">'+
							                  '<label for="new-email">Email</label>'+
							                  '<input type="text" class="form-control new-email">'+
							                '</div>'+
							             '</div>'
							             );
	});
	
	$('#new-contact').submit(function(event){
 		event.preventDefault();

 		var inputtedFirstName = $('#new-first-name').val();
 		var inputtedLastName = $('#new-last-name').val();
 		 		
 		var newContact = {firstName: inputtedFirstName,
 						  lastName: inputtedLastName,
 						  addresses: [],
 						  phones: [],
 						  emails: []
 						  };

 		$('.new-address').each(function(){
 			var inputtedStreet = $(this).find('.new-street').val();
 			var inputtedCity = $(this).find('.new-city').val();
 			var inputtedState = $(this).find('.new-state').val();
 			console.log(inputtedCity);
 			var newAddress = {street: inputtedStreet,
 							  city: inputtedCity,
 							  state: inputtedState
 							  };
 			newContact.addresses.push(newAddress);
 		});

 		$('.new-contact-number').each(function(){
 			var inputtedPhone = $(this).find('.new-phone').val();
 			var newPhone = {phone: inputtedPhone};
 			newContact.phones.push(newPhone);
 		});
 		
 		$('.new-email-address').each(function(){
 			var inputtedEmail = $(this).find('.new-email').val();
 			var newEmail = {email: inputtedEmail};
 			newContact.emails.push(newEmail);
 		});
 		
 		$('#contact').append('<li><span class="contact">' + newContact.firstName + " " + newContact.lastName +'</span></li>');

 		$('.contact').last().click(function(){
 			$('#show-contact h2').text(inputtedFirstName + " " + inputtedLastName);
 			$('.first-name').text(inputtedFirstName);
 			$('.last-name').text(inputtedLastName);

 			$('#addresses').empty();
 			newContact.addresses.forEach(function(address){
 				$('#addresses').append('<li>' + address.street +" "+ address.city + " " + address.state + '</li>');
 			});

 			$('#phone-numbers').empty();
 			newContact.phones.forEach(function(phone){
 				$('#phone-numbers').append('<li>' + phone.phone + '</li>');
 			});

 			$('#emails').empty();
 			newContact.emails.forEach(function(email){
 				$('#emails').append('<li>' + email.email + '</li>');
 			});

 			$('li').each(function(){
 					if($(this).html() == ""){
 						$(this).remove();
 					}
 				});
 			
 			$('#show-contact').show();
 			
 		});


 		$('#new-contact')[0].reset();
 		$('.extra').remove();
 	});
});