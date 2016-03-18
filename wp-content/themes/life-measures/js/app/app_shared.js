var app = (function () {

	var $questions = jQuery(".question"),
		$answers = jQuery(".answers"),
		$formPanel = jQuery(".form-panel"),
		$mobileNavMenu = jQuery("#nav__mobile"),
		$legendInteractiveAppMap = jQuery(".map-legend"),
		$quizContainer = jQuery(".answer_text"),
		$btnBack = jQuery("#back"),
		$btnNext = jQuery("#next"),
		$resultsPageCards = jQuery("#cards_carousel"),
		$cardsContainer = jQuery(".cards_container"),
		$quizSubmitButton = jQuery("#submitButton"),
		$surveyContainer = jQuery("#wpss_survey"),
		$surveyForm = jQuery("#wpssform");

	var funcs = {

		hideAnswers: function (elementId){
			elementId.each(function(){
				jQuery(this).hide();
			});
		},

		toggleAnswers: function (elementId){
			elementId.each(function(){
				jQuery(this).click(function(index){
					jQuery(this).next().slideToggle();
				});
			});
		},

		removeNextButton: function(elementId){
			elementId.each(function (){
				if(jQuery(this).css("display") == "block"){
					$btnNext.attr("disabled","disabled");
					if(jQuery(this).attr("id") == "panel13"){
						$btnNext.show();
					}
					else if(jQuery(this).attr("id") == "panel20") {
						$btnNext.show();
					}
					else if(jQuery(this).attr("id") == "panel22"){
						$btnNext.show();
					}
					else if(jQuery(this).attr("id") == "panel24"){
						$btnNext.show();
					}
					else{
						$btnNext.hide();
					}
				}
			});
		},

		showNextButton: function(elementId){
			elementId.each(function (){
				if(jQuery(this).css("display") == "block") {
					if(jQuery(this).attr("id") == "panel15"){
						$btnNext.show();
					}
					else if(jQuery(this).attr("id") == "panel22") {
						$btnNext.show();
					}
					else if(jQuery(this).attr("id") == "panel24"){
						$btnNext.show();
					}
					else if(jQuery(this).attr("id") == "thanks"){
						$btnNext.show();
					}
					else{
						$btnNext.hide();
					}
				}
			});
		},

		showCardsCarousel: function(){
			if($cardsContainer.length >= 5){
				$resultsPageCards.owlCarousel({
					margin:10,
				    loop:true,
				    autoWidth:true,
				    navigation: true,
					navigationText: [
						"<i class='entypo chevron-small-left'></i>", 
						"<i class='entypo chevron-small-right'></i>"
					],
					pagination: false
				});
			}
		}
	};

	var events = (function () {

		funcs.showCardsCarousel();
		
		funcs.hideAnswers($answers);

		funcs.toggleAnswers($questions);

		funcs.removeNextButton($formPanel);

		$quizContainer.click(function(){
			funcs.removeNextButton($formPanel);
		});

		$btnNext.click(function(){
			funcs.removeNextButton($formPanel);
		});

		$btnBack.click(function(){
			funcs.showNextButton($formPanel);
		});

		$quizSubmitButton.click(function(){
			jQuery('body').block({ 
            	message: "<h1><img src='" + TEMPLATE_DIRECTORY_URL + "/images/pre-loader.gif' /></h1>",
				overlayCSS: { backgroundColor: '#fff' } 
        	});

        	setTimeout(function(){
        		$surveyForm.submit();
			}, 1000);
		});

		jQuery(document).ready(function(){
			NProgress.start();
			NProgress.set(0.4);
		});

		jQuery(window).load(function(){
			NProgress.done();
			$mobileNavMenu.show();
			$legendInteractiveAppMap.show();
		});
		
	})();
	
})();