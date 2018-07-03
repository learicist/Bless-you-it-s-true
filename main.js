const navButtons = {
	'aboutBtn': $('#aboutSummon'),
	'gallBtn': $('#gallSummon'),
	'contactBtn': $('#formSummon')
}

$(document).ready(function () {
	console.log('hello mom');
	
	$('#home').click(function () {
		location.reload();
	});
	
	$('#quill').on({
		'mouseenter': function () {
			$(this).css('cursor', 'pointer');
		},
		'click': function () {
			location.reload();
		},
	});
	
	$('#topRow').on('click', 'button', function () {
		$('#welcome').hide(1100);
		$('#pitch').hide(1100);
		$('#oscar').hide(1100);
		$('#home').removeClass('hidden');
		
		for (let i in navButtons){
			
			if (navButtons[i] !== navButtons[this.id]) {
				
				navButtons[i].addClass('hidden');
				//navButtons[i].fadeOut(1100);
				//navButtons[i].hide(1500);
				//USE JQUERY VISUALS INSTEAD
				
			}
		}		
		
		navButtons[this.id].removeClass('hidden');
		
		//console.log(navButtons[this.id].hasClass('hidden'));
		
		//add hidden back to currently displayed div when another is clicked
	});
});