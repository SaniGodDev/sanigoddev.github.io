// JavaScript Document
	$().ready(function() {
		$("#formregistrazione").validate({
			rules: {

				address: {
					required: true,
					minlength: 42,
					maxlength: 42
				},
				controllo: {
					required: true,
					equalTo: "#random"
				},
	
			},
			messages: {

				address: {
					required: "<br>address is required",
					minlength: "<br>this address does not exist",
					maxlength: "<br>this address does not exist"
				},

				controllo: {
					required: "<br>you have not entered any verification code",
					equalTo: "<br>The code entered is incorrect"
				},
				
				
			}
		});

	});