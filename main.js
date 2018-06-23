$(document).ready(function () {
	console.log('hello mom');
	
	$('#home, #quill').on('click', function () {
		location.reload();
	});
	
	$('#quill').on('mouseenter', function () {
		$(this).css('cursor', 'pointer');
	});
	
	let navButtons = {
		'aboutBtn': $('#aboutSummon'),
		'gallBtn': $('#gallSummon'),
		'contactBtn': $('#formSummon')
	}
	
	$('#topRow').on('click', 'button', function () {
		$('#welcome').hide(1100);
		$('#pitch').hide(1200);
		$('#home').removeClass('hidden');		
		
		for (let i in navButtons){
			
			if (navButtons[i] !== navButtons[this.id]) {
				
				navButtons[i].addClass('hidden');
				//navButtons[i].hide(1500);
				//USE JQUERY VISUALS INSTEAD
				
			}
		}		
		
		navButtons[this.id].removeClass('hidden');
		
		//console.log(navButtons[this.id].hasClass('hidden'));
		
		//add hidden back to currently displayed div when another is clicked
	});
});