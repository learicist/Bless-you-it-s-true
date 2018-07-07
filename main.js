const navButtons = {
	'aboutBtn': $('#aboutSummon'),
	'gallBtn': $('#gallSummon'),
	'contactBtn': $('#formSummon')
}

const gallery = [
	{name: 'gallOne', tag: $('#gallOne'), content: $('#congrats')},
	{name: 'gallTwo', tag: $('#gallTwo'), content: $('#separate')},
	{name: 'gallThree', tag: $('#gallThree'), content: $('#apology')},
	{name: 'gallFour', tag: $('#gallFour'), content: $('#love')},
	{name: 'gallFive', tag: $('#gallFive'), content: $('#connect')},
	{name: 'gallSix', tag: $('#gallSix'), content: $('#in_laws')},
	{name: 'gallSeven', tag: $('#gallSeven'), content: $('#death')},
];

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
		$('#welcome').addClass('hidden');
		$('#oscarQuote').addClass('hidden');
		$('#home').removeClass('hidden');

		if (this.id == 'aboutBtn') {
			$('#quotes').removeClass('hidden');
			$('#bergQuote').removeClass('hidden');
		} else {
			$('#quotes').addClass('hidden');
		} 
		
		//hide non-clicked items
		for (let i in navButtons){
			if (navButtons[i] !== navButtons[this.id]) {
				navButtons[i].addClass('hidden');
			}
		}		
		
		navButtons[this.id].removeClass('hidden');
	});
	
	let curr, flag = true;
	$('.gallery').on({
		'mouseenter': function () {
			$(this).css('cursor', 'pointer');
		},
		'click': function () {
			curr = this.id;
			if (flag == true) {
				flag = false;
				for (let i in gallery) {
					if (curr == gallery[i].name) {
						gallery[i].content.removeClass('hidden');
					} else {
						gallery[i].tag.addClass('hidden');
					}					
				}
			} else {
				flag = true;
				for (let i in gallery) {
					if (curr == gallery[i].name) {
						gallery[i].content.addClass('hidden');
					} else if (curr !== gallery[i].name) {
						gallery[i].tag.removeClass('hidden');
					}
				}
			}
		}
	});
	
	$('#begin').on('click', function () {
		if ($('#customer').hasClass('hidden')) {
			$('#customer').removeClass('hidden');
		} else {
			$('#customer').addClass('hidden');
		}
	});
});