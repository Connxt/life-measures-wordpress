<?php
/**
 *  Builds the HTML quiz outputed to user
 *
 *  @param int $quiz_id
 *  @return string
 *    HTML and Javascript for quiz
 */
function wpss_getQuiz($quiz_id){
  global $wpdb;    
 
  // get this quiz and associated questions and answers
  $quiz = stripslashes_deep($wpdb->get_row("SELECT * FROM ".WPSS_QUIZZES_DB." WHERE id='$quiz_id'",ARRAY_A));
  $questions  = stripslashes_deep($wpdb->get_results("SELECT * FROM ".WPSS_QUESTIONS_DB." WHERE quiz_id='$quiz_id' ORDER BY id ASC",ARRAY_A));
  $answer_set = stripslashes_deep($wpdb->get_results("SELECT * FROM ".WPSS_ANSWERS_DB." WHERE quiz_id='$quiz_id' ORDER BY id ASC",ARRAY_A));



  // Don't forget to donate and chip in
  $retQuiz = '
	<script>
		$(document).ready(function (){
			
		});
	</script>
  <!-- WordPress Simple Survey | Copyright SAI Digital (http://saidigital.co) -->
  <div id="wpss_survey">
    <div id="wpss-quiz-'.$quiz['id'].'" class="form-container ui-helper-clearfix ui-corner-all">
    <h2>'.$quiz['quiz_title'].'</h2>
      <div id="progress"><label id="amount">0%</label>
      <p class="pgress">Progress:</p></div>
      <form id="wpssform" name="wpssform" action="'.WPSS_SUBMIT_RESULTS.'" method="post" >';?>
      
      <?php 
	$counter = 0;

	foreach($questions as $i => $question){
        $retQuiz .= '<div id="panel'.($i+1).'" class="form-panel'; if($i>0){ $retQuiz .= ' ui-helper-hidden';} 
        $retQuiz .= '">';

        $retQuiz .= '
          <fieldset class="ui-corner-all">
            
            <p class="form_question">'.$question['question']. '</p><div class="clear"></div>
              <div class="answer">';

              foreach($answer_set as $j => $answer){
                if($answer['question_id']==$question['id']){
                  if($question['type']=="radio"){
                     $retQuiz .= '<div class="answer_text"><input type="radio" class="wpss_radio" name="wpss_ans_radio_q_'.$i.'" id="answer_'.$answer['id'].'" value="wpss_ans_'.$answer['id'].'" /><label for="answer_'.$answer['id'].'">'.$answer['answer'].'</label></div><div class="clear"></div>';                  
                  }else{
                     $retQuiz .= '<div class="answer_text"><input type="checkbox" class="wpss_radio" name="wpss_ans_check_a_'.$j.'" id="answer_'.$answer['id'].'" value="wpss_ans_'.$answer['id'].'" /><label for="answer_'.$answer['id'].'">'.$answer['answer'].'</label></div><div class="clear"></div>';                
                  }
                }
              }

              if (($i+1) == 14 || ($i+1) == 21 || ($i+1) == 23 || ($i+1) == 25) {
                $retQuiz .= '<div style="width:100%"><div style="width:100%;float:left;" ><div id="slider-'.$i.'"></div></div>
<div style="width:100%;text-align:center;font-size:14px; margin-top:3px" id="slide-ans-'.$i.'"  >0</div>';
                $retQuiz .= '<script>
                              jQuery("#panel'.($i+1).' .answer_text").hide();
                              jQuery("#slider-'.$i.'").slider({
                                min:1,
                                max:10,
                                range:"min",
                                value:1,
                                slide:function(event,ui){
                                  $("input[name=\'wpss_ans_radio_q_'.$i.'\']").off("click");
                                  jQuery("input[name=\'wpss_ans_radio_q_'.$i.'\']").eq(ui.value - 1).click();
                                  jQuery("#slide-ans-'.$i.'").html(ui.value );
                                  jQuery("#next").show();
                                  jQuery("#next").removeAttr("disabled");
                                },
                                callback:function(){
                                  jQuery("#next").click();
				  $("#nxtClick").val(parseInt($("#nxtClick").val(), 10)+1);
                                }
                              });
                              $("#slider-'.$i.'").mouseup(function(){
                                // jQuery("#next").click();
				// $("#nxtClick").val(parseInt($("#nxtClick").val(), 10)+1);
                              });
                              </script>';
              }

              $retQuiz .= '
            </div>
          </fieldset>

        </div>';
        $counter++;
    
      }
      $retQuiz .= '
      <div id="thanks" class="form-panel ui-helper-hidden">
       <br><center><h2>Thank You! Please Click the Button to See the Results<span id="calculating"></span></h2></center>
        <fieldset class="ui-corner-all">

        <h3>'.$quiz['submit_txt'].'</h3>
        <input type="hidden" name="quiz_id" value="'.$quiz['id'].'" />  
        <input type="hidden" name="submitter_id" value="'.uniqid("wpss_").'" />';

        // include fields for collecting user data
        if($quiz['record_submit_info']) $retQuiz .= wpss_getUserInfo($quiz['id']);

        $retQuiz .= '        
        <input type="hidden" name="wpss_submit_quiz" value="1" />
        <div class="clear"></div>';

        //$retQuiz .= '<input id="submitButton" type="submit" name="wpss_submit" value="'.$quiz['submit_button_txt'].'" /> - change below
        $retQuiz .= '<button id="submitButton" type="submit" name="wpss_submit" value="'.$quiz['submit_button_txt'].'"><i class="fa fa-hand-pointer-o"><h4>Click Here</h4></i></button>
        </fieldset>
      </div>';
      $retQuiz .= '<button id="back" disabled="disabled"><i class="fi-arrow-left"></i> Back</button>';
       $retQuiz .= '<button id="next" style="display:block">Next <i class="fi-arrow-right"></i></button>
	<br><div id="copyright">Maridal Consulting 2014<img src="http://www.case.edu/magazine/fallwinter2010/images/copyright.png" width="20px"></div>';
	
    $retQuiz .= '
    </form>
    </div>
  </div>
  ';

  // add javascript for panel sliding
  $retQuiz .= wpss_slide_panels(count($questions));
  
  return $retQuiz;
}


function wpss_getUserInfo($quiz_id){

  global $wpdb;
  global $current_user; get_currentuserinfo();

  $fields = stripslashes_deep($wpdb->get_results("SELECT * FROM ".WPSS_FIELDS_DB." WHERE quiz_id='$quiz_id' ORDER BY id ASC",ARRAY_A));
  $info_form = '<div id="user_info" class="infoForm">';
  
    foreach($fields as $field){
    
      $class = empty($field['required']) ? '' : "wpss_required";
      $req   = empty($field['required']) ? '' : '*';

      $info_form .= '<div class="wpss_customfield">
                       <label>'.$req.$field['name'].'</label><input type="text" name="wpss_field_'.$field['id'].'" class="'.$class.'" value="" alt="'.$field['name'].'" />
                       <div class="clear"></div>
                     </div>';

      $info_form .= '<div class="clear"></div>';
    }
    
  $info_form .= '</div>';
  
  return $info_form;  
}


?>