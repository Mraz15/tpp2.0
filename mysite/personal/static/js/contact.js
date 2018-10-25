$(document).ready(function(){
"use strict";

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
/*$.ajaxSetup({
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
	});*/

function csrfSafeMethod(method) {
		// these HTTP methods do not require CSRF protection
		return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
	beforeSend: function(xhr, settings) {
		if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
			xhr.setRequestHeader("X-CSRFToken", csrftoken);
		}
	}
});

$('#testBtn').click(function(){
    var formData = $('#contactForm').serializeArray();
    $("#test").html(formData.length);
});

$('#submit').click(function(){
    var firstName = $('#first_name').val();
    var lastName = $('#last_name').val();
    var company = $('#company').val();
    var email = $('#email').val();
    var question = $('#question').val();
    // var formData = $('#orderForm').serializeArray();
    var json_data = []
    json_data.push({
        'firstName': firstName,
        'lastName': lastName,
        'company': company,
        'email': email,
        'question': question
    
    });

    // jQuery.each(formData, function() {
    //     json_data[this.name] = this.value || '';
    // });

		$.post( "/contactEmail",  JSON.stringify(json_data), 
		function(xml, textStatus, xhr){
			if(xhr.status === 200){
				alert("Successfully Submitted!");
			} else{
				alert("Submission Failed, Please Submit again!");
			}
        });
});


});


