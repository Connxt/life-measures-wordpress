// Form input validation
function wpss_checkform(form){

	if (form.name.value == "") {
		alert( "Please enter your name." );
		form.name.focus();
		return false ;
	}
	if (form.lname.value == "") {
		alert( "Please enter your name." );
		form.lname.focus();
		return false ;
	}
	if (form.email.value == "") {
		alert( "Please enter a valid email address." );
		form.email.focus();
		return false ;
	}

	str = form.email.value;
	var at="@";
	var dot=".";
	var lat=str.indexOf(at);
	var lstr=str.length;
	var ldot=str.indexOf(dot);
	if (str.indexOf(at)==-1){
		alert("Please enter a valid email address.");
		return false;
	}

	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		alert("Please enter a valid email address.");
		return false;
	}

	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		alert("Please enter a valid email address.");
		return false;
	}

	if (str.indexOf(at,(lat+1))!=-1){
		alert("Please enter a valid email address.");
		return false;
	}

	if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		alert("Please enter a valid email address.");
		return false;
	}

	if (str.indexOf(dot,(lat+2))==-1){
		alert("Please enter a valid email address.");
		return false;
	}

	if (str.indexOf(" ")!=-1){
		alert("Please enter a valid email address.");
		return false;
	}

	if (form.telephone.value == "") {
		alert( "Please enter a valid telephone number." );
		form.telephone.focus();
		return false ;
	}
	if (form.city.value == "") {
		alert( "Please enter your current city." );
		form.city.focus();
		return false ;
	}

	return true;
}

// returns value selected from radio set
function wpss_getCheckedValue(radioObj) {
	if(!radioObj){
  	return "true";
	}
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
		  return true;
		}
	}
	return "";
}


(function($) { 
  $(function() {
$(".page-id-6 #panel1").after("<div id=\"copyright\">Maridal Consulting 2014<img src=\"http://www.case.edu/magazine/fallwinter2010/images/copyright.png\" width=\"20px\"></div>");
		var titles = ["Your assesed well-being score with (Q 4-22, variable 4-17 and 18-22 weighted 50% each) (This number gives an estimate on your well-being based on how you answered the questions. The good news is that you can work on improving your lifeability which will in turn impact your livability and raise your overall well-being. There are good literature in the field of positive psychology and in philosophical and religious writings that can help you improve your life-ability. Like with anything you want to do well in life, well-being is the same, it takes conscious effort and practice to succeed. Being happy and satisfied is a choice, not merely a coincidence. ","Your perceived level of well-being ((happiness (Q1) + life-satisfaction score (Q23)) / 2): [?]\
(This is the average of your answer about your current happiness in the first question and your answer to your satisfaction with life in the final question. Combined\ these two questions give a good estimate of your perceived well-being.", "Your Livability Score(Measures how your external, societal environment\  enables your well-being.)","Your Lifability Score (Measures your internal capacity to be happy and satisfied and your adeptness at taking advantage of the external environment.)"];
		$("#wpssform>div>fieldset>span").each(function(index){
			var text = $(this).html();
  			text = text.replace("Your", "");
    			$(this).html(text);
		    $(this).attr("value", titles[index]);
		    $(this).append("<img src=\"http://www.telstra.com.au/global/icons/small/help-grey.png\" width=\"15px\">");
		    $(this).css("clear", "both");
		    $(this).css("margin-left", "20px");
		});
    
    // make sure all required fields are not empty
    $("#wpssform").submit(function(e){
      $("#wpssform .infoForm input.wpss_required").each( function() {
        if($(this).val() == ""){
          alert($(this).attr('alt')+" cannot be blank.");
          e.preventDefault();
          return false;
        }
   	  });
    });
    
  });
})(jQuery);