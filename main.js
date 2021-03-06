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

let startFlag = true;

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
	
	//handle main buttons
	$('#topRow').on('click', 'button', function () {
		$('#welcome').addClass('hidden');
		$('#oscarQuote').addClass('hidden');
		//only display home button if customer form is not visible
		if (startFlag) {
			$('#home').removeClass('hidden');
		}
		//accomodate berg quote unique case
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
	
	//customer patronage button functions
	$('#begin').on('click', function () {
		//scroll to top of page
		window.scrollTo(0, 0);
		//handle the dropdown function
		$('#chooseTemp').click(function () {
			$('#drOptions').toggleClass('hidden');
		});
		
		//handle and store the template choice of the user
		$('#dropdown').on('click', 'a', function () {
			//if any of the choices are selected...
			$('#customer').removeClass('hidden');
			$('#dropdown').addClass('hidden');
			let choice = templates[this.id];
			let choiceElement = $('<textarea class="textbox hidden" type="text" name="userTemplateChoice" rows="2" cols="10">' + choice + '</textarea>');
			choiceElement.insertBefore($('#submit'));
		});
		
		//handle the entrance of the #slider div
		if (startFlag) {
			//go through the main elements and hide them
			$('.main').each(function () {
				if ($(this).hasClass('hidden') == false) {
					$(this).css('visibility', 'hidden');
				}				
			});
			//turn off nav buttons
			$('#topRow').css('pointer-events', 'none');
			//bring button out into page
			$(this).animate({marginLeft: "325px"}, 2000);
			//bring div out into page
			$('#slider').animate({top: "30%", left: "0px"}, 2000);
			//set flag
			startFlag = false;
		} else {
			//hide button again
			$(this).animate({marginLeft: "0px"}, 2000);
			//turn on nav buttons
			$('#topRow').css('pointer-events', 'auto');
			//hide div again
			$('#slider').animate({left: "-350px"}, 2000);
			
			//RESET VISIBILITY OF '.MAIN' ELEMENTS
						
			
			//show home button
			setTimeout(function () {
				$('.main').each(function () {
					$(this).css('visibility', 'visible');			
				});
				$('#home').removeClass('hidden');
			}, 2100);
			//set flag
			startFlag = true;
		}
	});
	
});