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

const templates = {
	1: 'congratulaions',
	2: 'separation',
	3: 'apology',
	4: 'love',
	5: 'reconnect',
	6: 'in-laws',
	7: 'condolences'
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
		$('#welcome').addClass('hidden');
		$('#oscarQuote').addClass('hidden');
		$('#home').removeClass('hidden');
		//accomdate berg quote unique case
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
		//display user choice
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
	
	let startFlag = true;
	let currScreen;
	$('#begin').on('click', function () {
		
		$('#chooseTemp').click(function () {
			$('#drOptions').toggleClass('hidden');
		});
		
		$('#dropdown').on('click', 'a', function () {
			$('#customer').removeClass('hidden');
			$('#dropdown').addClass('hidden');
			console.log(templates[this.id]);
			let choice = templates[this.id];
			let choiceElement = $('<textarea class="textbox hidden" type="text" name="userTemplateChoice" rows="2" cols="10">' + choice + '</textarea>');
			choiceElement.appendTo($('#customer'));
		});
		
		
		if (startFlag) {
			$('.main').each(function () {
				$(this).addClass('hidden');
			});
			$(this).animate({marginLeft: "350px"}, 1800);
			$('#slider').animate({top: "240px", left: "0px"}, 1800);	
			
			startFlag = false;
		} else {
			$(this).animate({marginLeft: "0px"}, 1800);
			$('#slider').animate({left: "-350px"}, 1800);
			setTimeout(function () {
				$('#home').removeClass('hidden');
				//$('#customer').addClass('hidden');
			}, 2100);
			startFlag = true;
		}
		
	});
});