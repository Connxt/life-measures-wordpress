<?php
/*
	template name: quiz results template
*/
get_header();
function register_session() {
	if(!session_id())
		session_start();
}
add_action('init','register_session');

require_once('controllers/db_parameters.php');

// avg_objective_well_being((4...17) / 14 * 0.5) + ((16...22) / 5 * 0.5)
// avg_subjective_well_being (1 + 25) / 2
// avg_livability_score (6...17) / 12
// avg_lifeability_score (18...25) / 8

class Quiz_Results {
	private $con;
	private $num_of_quiz_takers = 0;

	public function __construct($username, $password) {
		$this->con = new mysqli('localhost', $username, $password, 'quality_of_life_wp');

		$this->num_of_quiz_takers = $this->con->query('SELECT DISTINCT(submitter_id) FROM lm_wpss_results')->num_rows;
	}

	public function get_average_objective_well_being() {
		$avg_objective_well_being_1 = 0;
		$avg_objective_well_being_2 = 0;

		$result = $this->con->query('SELECT SUM(weight) AS sum_of_weights FROM lm_wpss_results WHERE question_id BETWEEN 4 AND 17');
		$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
		$avg_objective_well_being_1 = ($row['sum_of_weights'] / $this->num_of_quiz_takers) / 14 * 0.5;

		$result = $this->con->query('SELECT SUM(weight) AS sum_of_weights FROM lm_wpss_results WHERE question_id BETWEEN 16 AND 22');
		$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
		$avg_objective_well_being_2 = ($row['sum_of_weights'] / $this->num_of_quiz_takers) / 5 * 0.5;

		return $avg_objective_well_being_1 + $avg_objective_well_being_2;
	}

	public function get_average_subjective_well_being() {
		$result = $this->con->query('SELECT SUM(weight) AS sum_of_weights FROM lm_wpss_results WHERE question_id=1 OR question_id=25');
		$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

		return ($row['sum_of_weights'] / $this->num_of_quiz_takers) / 2;
	}

	public function get_average_livability_score() {
		$result = $this->con->query('SELECT SUM(weight) AS sum_of_weights FROM lm_wpss_results WHERE question_id BETWEEN 6 AND 17');
		$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
		
		return ($row['sum_of_weights'] / $this->num_of_quiz_takers) / 12;
	}

	public function get_average_lifeability_score() {
		$result = $this->con->query('SELECT SUM(weight) AS sum_of_weights FROM lm_wpss_results WHERE question_id BETWEEN 18 AND 25');
		$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
		
		return ($row['sum_of_weights'] / $this->num_of_quiz_takers) / 8;
	}
}

$quiz_results = new Quiz_Results($username, $password);
?>

<section class="intro-image" style="background-image: url(&#39;<?php echo get_template_directory_uri(); ?>/images/cki-template11-headers-your-quality-of-life-measures.jpg&#39;);">
	<header>
		<h1>QUIZ RESULTS</h1>
		<hr>
	</header>
</section>
<div class="quiz-results-wrapper">
	<div id="content" class="row">
		<section class="post standard">
			<div class="row clearfix">
				<header class="large-3 medium-3 small-12 columns">
					<h2>Your Quality of Life Measures</h2>
					<hr/>
					<p><span>This completely anonymous quiz represent a measure of your personal wellbeing. When completed it will result in four scores: a) your overall, objective wellbeing, b) your subjective wellbeing, c) the livability of your  life, and d) your lifeability.</span></p>
					<p><span><strong>Explanation of terms:</strong></span></p>
					<p><span><strong>Objective wellbeing</strong> refers to those factors that research have found to influence people’s wellbeing.</span></p>
					<p><span><strong>Subjective wellbeing</strong> refers to your particular experience of your own life and represents your feeling of happiness and life satisfaction.</span></p>
					<p><span>Your wellbeing emanates from the society in which you live and from your internal personal dynamics that enable you to benefit from that environment. The former refers to your livability and the latter to your Lifeability. In other words:</span></p>
					<p><span><strong>Livability</strong> measures how the external, societal environment enables a person’s wellbeing.</span></p>
					<p><span><strong>Lifeability</strong> measures an individual’s internal capacity to be happy and satisfied and his or her adeptness at taking advantage of the external environment.</span></p>
				</header>
				<article class="large-8 large-offset-1 medium-8 medium-offset-1 small-12 columns">
					<div id="primary" class="site-content">
						<div id="content" role="main">
							<table width="100" border="1">
								<tr>
									<th colspan="2">
										<h2>WELLBEING QUIZ</h2>
										<h2>YOUR SCORES</h2>
										<h5>(On a scale from 1-10, where 1 indicates very poor wellbeing and 10 indicates excellent wellbeing)</h5>
									</th>
								</tr>
								<tr>
									<td>
										<h3>Your objective wellbeing: <span><?php echo round($_COOKIE['w_set_a'], 1);?></span></h3>
										<h4>(your score based on all of your answers)</h4>
									</td>
									<td>
										<h4>The average objective wellbeing for people taking this survey: <strong><?php echo round($quiz_results->get_average_objective_well_being(), 1);?></strong></h4>
									</td>
								</tr>
								<tr>
									<td>
										<h3>Your subjective wellbeing: <span><?php echo round($_COOKIE['w_set_b'], 1);?></span></h3>
										<h4>(based on your answers to the happiness and life satisfaction question)</h4>
									</td>
									<td>
										<h4>The average subjective wellbeing for people taking this survey: <strong><?php echo round($quiz_results->get_average_subjective_well_being(), 1);?></strong></h4>
									</td>
								</tr>
								<tr>
									<td>
										<h3>Your livability Score: <span><?php echo round($_COOKIE['w_score_li'], 1);?></span></h3>
										<h4>(the external, environmental factors in your life)</h4>
									</td>
									<td>
										<h4>The average livability for people taking this survey: <strong><?php echo round($quiz_results->get_average_livability_score(), 1);?></strong></h4>
									</td>
								</tr>
								<tr>
									<td>
										<h3>Your lifeability Score: <span><?php echo round($_COOKIE['w_score_la'], 1);?></span></h3>
										<h4>(the internal factors, your ability to cope with circumstances in your life)</h4>
									</td>
									<td>
										<h4>The average lifeability for people taking this survey: <strong><?php echo round($quiz_results->get_average_lifeability_score(), 1);?></strong></h4>
									</td>
								</tr>
							</table>
						</div><!-- #content -->
					</div><!-- #primary -->
				</article>
			</div>

		</section>
	</div>
</div>
<?php get_footer(); ?>