$(document).ready(function () {
	//console.log('hello world');
	
	$('#home, h1').on('click', function () {
		location.reload();
	});
	
	let navButtons = {
		'about': $('#aboutSummon'),
		'gall': $('#gallSummon'),
		'contact': $('#formSummon')
	}
	
	$('h1').on('mouseenter', function () {
		$(this).css('cursor', 'pointer');
	});
	
	$('#topRow').on('click', 'button', function () {
		$('#welcome').hide(1500);
		$('#pitch').hide(1700);
		navButtons[this.id].removeClass('hidden');
		$('#home').removeClass('hidden');
		
		//add hidden back to currently displayed div when another is clicked
	});
});