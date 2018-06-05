$(document).ready(function () {
	console.log('hello world');
	
	$('#home').click(function () {
		location.reload();
	});
	
	let navButtons = {
		'about': $('#aboutSummon'),
		'gall': $('#gallSummon'),
		'contact': $('#contactSummon')
	}
	
	$('#topRow').on('click', 'button', function () {
		$('#welcome').hide(1500);
		$('#pitch').hide(1700);
		navButtons[this.id].removeClass('hidden');
		$('#home').removeClass('hidden');
	});
});