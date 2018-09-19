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

$('#submit').click(function(){
    $.getJSON( "thanks?", function( data ) {
        var json_data = [];
        $.each( data, function( key, val ) {
          json_data.push(key + val);
        });

		$.post( "/email",  JSON.stringify(json_data), 
		function(xml, textStatus, xhr){
			if(xhr.status === 200){
				alert("Successfully Submitted!");
				window.location.replace("/thanks?order=" + JSON.stringify(json_data));
			} else{
				alert("Submission Failed, Please Submit again!");
			}
		});
		});


/*for (i=0; i<length(orderDocNum); i++){
	var json_data = {"docNum": orderDocNum[i], "docType": orderDocType[i]}
}*/


});



});
