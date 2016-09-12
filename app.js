$(function() {
	// Watch form submission.
	$('#js-shopping-list-form').submit(function(e) {
		e.preventDefault();
		addItem($('input:first').val());
		$('input:first').val('');
	});

	// Watch check buttons.
	$('ul').on('click', "button:contains('check')", function(e) {
		e.preventDefault();
		$(this).closest('div').siblings('.shopping-item').toggleClass('shopping-item__checked');
	});

	// Watch delete buttons.
	$('ul').on('click', "button:contains('delete')", function(e) {
		$(this).closest('li').remove();
	});
});

function addItem(name) {
	$('.shopping-list').append(
	'<li>' +
	 	'<span class="shopping-item">' + name + '</span>' +
	 	'<div class="shopping-item-controls">' +
	 		'<button class="shopping-item-toggle">' +
	 			'<span class="button-label">check</span>' +
 			'</button>' + 
 			'<button class="shopping-item-delete">' +
 				'<span class="button-label">delete</span>' +
			'</button>' +
		'</div>' + 
	'</li>'
 	);
}
