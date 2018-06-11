$(document).ready(function () {
	//console.log('hello world');
	
	$('#home, h1').on('click', function () {
		location.reload();
	});
	
	$('h1').on('mouseenter', function () {
		$(this).css('cursor', 'pointer');
	});
	
	let navButtons = {
		'aboutBtn': $('#aboutSummon'),
		'gallBtn': $('#gallSummon'),
		'contactBtn': $('#formSummon')
	}
	
	$('#topRow').on('click', 'button', function () {
		$('#welcome').hide(1500);
		$('#pitch').hide(1700);
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