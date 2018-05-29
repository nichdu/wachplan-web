$(document).ready(function() {
	var elem = $('#email-address');
	if (elem.length > 0) {
		// wir haben ein Mail-Element, also müssen wir die Adresse laden
		
		$.get('https://wachplan.net/current_mail', function(response) {
			var a = $('<a/>').attr('href', 'mailto:' + response).text(response);
			elem.html(a);
		}).error(function() {
			elem.text('Beim laden der Email-Adresse ist ein Fehler aufgetreten. '
				+ 'Bitte versuchen Sie es später erneut.')
				.css('color', 'red');
		});
	}
});