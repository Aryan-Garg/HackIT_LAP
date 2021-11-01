<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
session_start();

class Main extends CI_Controller {
	public function index()
	{
		$this->consent();
	}

	public function consent()
	{
		$this->load->view('ask_consent');
	}

	public function login()
	{
		$this->load->view('login');
	}

	public function logout()
	{
		$this->session->sess_destroy();
		redirect('main/login');
	}

	public function chat()
	{
		$this->load->view('chat');
	}

	public function gen_data()
	{
		$this->load->view('gen_data');
	}

	public function restricted()
	{
		$this->load->view('restricted');
	}

	public function signup()
	{

		$this->load->view('signup');
	}

	public function login_validation()
	{
    $this->load->library('session');
		$this->load->library('form_validation');
		$this->form_validation->set_rules('username', 'Email',
			'required|trim|xss_clean|callback_validate_credentials');
		$this->form_validation->set_rules('password',
			'Password', 'required|trim');
		if ($this->form_validation->run()) {
			$data = array(
				'username' => $this->input->post('username'),
				'is_logged_in' => 1,
			);
			$this->session->set_userdata($data);
			redirect('main/hacker');
		} else {
			// Return to login
			$this->load->view('login');
		}
	}

	public function consent_validation()
	{
    $this->load->library('session');
		// $this->load->library('form_validation');
		// $this->form_validation->set_rules('username', 'Email',
		// 	'required|trim|xss_clean|callback_validate_credentials');
		// $this->form_validation->set_rules('password',
		// 	'Password', 'required|trim');
		// if ($this->form_validation->run()) {
			$a = $this->input->post('Age');
			$data = array(
				'Age_flag' => $this->input->post('Age'),
				'understand_flag' => $this->input->post('understand'),
				'participate_flag' => $this->input->post('particiapte'),
				'is_logged_in' => 1,
			 );
			$this->session->set_userdata($data);

			$b = $this->input->post('understand');
			// $data = array(
			// 	'is_logged_in' => 1,
			//  );
			// $this->session->set_userdata($data);

			$c = $this->input->post('participate');

			if ($a && $b && $c)
			{
				$this->load->view('signup');
			}

			else
			{
				$this->load->view('consent_fail');
			}
			// $data = array(
			// 	'is_logged_in' => 1,
			//  );
			// $this->session->set_userdata($data);
			// // redirect('main/hacker');
		// } else {
		// 	// Return to login
		// 	$this->load->view('login');
		// }
	}

	public function validate_credentials()
	{
		$this->load->model('model_user');

		if ($id=$this->model_user->can_log_in()) {
			$data = array(
				'id'=>$id
			);
			$this->session->set_userdata($data);

		} else {
			$this->form_validation->set_message('validate_credentials','Incorrect username / password');
			return false;
		}
	}

	public function check_username(){
		$username=$this->input->post('username');
		$this->load->model('model_user');
		$result=$this->model_user->check_user($username,'username');
		if($result)
		{
			echo 'This username is not available';
		}
	}
	public function check_email(){
		$email=$this->input->post('email');
		$this->load->model('model_user');
		$result=$this->model_user->check_user($email,'email');
		if($result)
		{
    	echo 'This email is already registered';
		}
	}

	public function signUp_valid(){

		$password_confirm=$this->input->post('password_confirm');
		$data=array('username'=>$this->input->post('username'),
		'email'=>$this->input->post('email'),
		'age'=>$this->input->post('age'),
		'level'=>$this->input->post('level'),
		'branch'=>$this->input->post('branch'),
		'course'=>$this->input->post('course'),
		'country'=>$this->input->post('country'),
		'gender'=>$this->input->post('gender'),
		'password'=>$this->input->post('password'),
		);
		if($data['password']==$password_confirm)
		{
			$this->load->model('model_user');
			if($this->model_user->reg($data,$this->input->post('username'),$this->input->post('email')))
			{
				$data = array(
					'username' => $this->input->post('username'),
					'is_logged_in' => 1,
				);
				//$this->session->set_userdata($data);
				//redirect('main/hacker');
				echo '<p style="color: red"> Registration successful, Please Login</p>';
				$this->load->view('login');
			}
			else
			{
				echo '<p style="color: red">Registration failed</p>';
				$this->load->view('signup');
			}
		}
		else
		{
			$this->load->view('signup');
		}
	}

	public function insert_quiz()
	{
		//$password_confirm=$this->input->post('password_confirm');
		$data=array('user_id'=>$this->session->userdata('id'),
		'q1'=>$this->input->post('q1'),
		'q2'=>$this->input->post('q2'),
		'q3'=>$this->input->post('q3'),
		'q4'=>$this->input->post('q4'),
		'q5'=>$this->input->post('q5'));

		$this->load->model('model_user');
		$this->model_user->save_quiz($data);

		$this->load->view('hacking');
	}


	public function hacker()
	{
		if ($this->session->userdata('is_logged_in')){
			$data = array('role' => 'hacker');
			$this->session->set_userdata($data);
			//$this->load->view('welcome_hacker');
			$this->load->view('welcome_hacker');
		} else {
			redirect('main/restricted');
		}
	}

	public function testing(){
		if ($this->session->userdata('is_logged_in'))
		{
		if($this->session->userdata('role')=='hacker')
		{
			$temp=array('score' => 0,'last_id' => 0);
			$this->session->set_userdata($temp);
			if($this->session->userdata('id') && !$this->session->userdata('gameplay_id')){
				$this->load->model('model_user');
				$data = array('user_id'=> $this->session->userdata('id'),'score'=> 0);
				$this->model_user->new_game($data);
			}

			$this->load->view('instruction_ques');
		} else{
			redirect('main/restricted');
		}
	}	else redirect('main/restricted');
}

public function input_command()
{
	$this->load->model('model_user');
	$user=$this->session->userdata('username');
	//fetching userid from registration table
	$this->db->where('username',$user);
	$query=$this->db->get('registration');
	if ( $query->num_rows() > 0 )
	{
		$row = $query->row_array();
	}
	$gn=$this->session->userdata('game_number');
	$gametype='Non-RDS(Linear) Topology';
	date_default_timezone_set("Asia/Kolkata");

	$data1=array('userID'=>$row['id'],
							'username'=>$this->session->userdata('username'),
							'input_command'=>$this->input->post('input'),
							'output'=>$this->input->post('output'),
							'gamenumber'=>$gn,
							'gametype'=>$gametype);

		$this->model_user->log_command($data1);

	}

public function input_exploit()
{
	$this->load->model('model_user');
	$user=$this->session->userdata('username');
	//fetching userid from registration table
	$this->db->where('username',$user);
	$query=$this->db->get('registration');
	if ( $query->num_rows() > 0 )
	{
		$row = $query->row_array();
	}
	$r=$this->input->post('r');

	$gn=$this->session->userdata('game_number');
	$gametype='Non-RDS(Linear) Topology';
	$data1=array('userID'=>$row['id'],
							'Role'=>'Hacker',
							'username'=>$this->session->userdata('username'),
							'exploit'=>$this->input->post('temp1'),
							'System'=>$this->input->post('temp2'),
							'score'=>0,
							'winner'=>'incomplete',
							'honeypot'=>(strlen($r)>0) ? $r : "none",
							'gamenumber'=>$gn,
							'gametype'=>$gametype);

		$this->model_user->exploit($data1);
                echo "".$this->session->userdata('last_id');

	}

	public function checkGame(){
		if ($this->session->userdata('is_logged_in')){
			$action=$this->input->post('action');
			if($action=='checkGame')
			{
				$val = $this->input->post('val');
				$temp=array('value'=>$val);
				$this->session->set_userdata($temp);
				{
					$game=$this->session->userdata('game_number');
					echo "Honeypot is: ".$val;
					echo "Game number: ".$game;
				}
			}
	  }
	}

	public function score(){
		//print_r($this->session->all_userdata());
		if ($this->session->userdata('is_logged_in')){
			if($this->session->userdata('game_number')<1)
			{
				$data=array('game_number'=>$this->session->userdata('game_number')+1);
				$this->session->set_userdata($data);
				redirect('main/insert_quiz');
			}

			$gid = $this->session->userdata('gameplay_id');
			$this->load->model('model_user');
			$tscore = $this->model_user->check_score($gid);

			if($this->session->userdata('role')=='hacker')
			{
				$user_name = $this->session->all_userdata();
				echo "<br/>You played as a hacker !<br/>";
				echo '<br/>Total Score : '.$tscore."<br/><br/>";
				echo "<br/>Please complete this survey to get your rewards! <br/>";
				echo ' <h1><a href="https://cmu.ca1.qualtrics.com/jfe/form/SV_881ryzhgO0ILeAJ?user_id='.$user_name['username'].'" target="_blank"> Open Survey </a> </h1><br/><br/>';
				//echo " <a href='https://forms.gle/UfjUwh8XpYLLzNta7'> Open Survey </a> <br/><br/>";
				//echo "<br>Winner of Game : ".$win."<br>";
			}
			$gn=$this->session->userdata('game_number');
			if($gn==1)
				$this->load->view('score_2');
			else
				$this->load->view('score_1');
	}
	else redirect('main/restricted');
	}


	public function hacker_point(){

		$gid = $this->session->userdata('gameplay_id');
		$lid=$this->session->userdata('last_id');
		$action = $this->input->post('action');
		//echo "<br>THIS IS LID:".$lid;

		if($action=='showscore')
		{
			$this->load->model('model_user');
			$curr_score = $this->model_user->check_score($gid);
			if($this->session->userdata('role')=='hacker')
			{
				//echo "Your Score: ".($curr_score)." | ";
			}
		}
		else if($action=='addstage')
		{
			$win = "incomplete";
			$score = 0;

			$file = $this->input->post('file');
			$this->load->model('model_user');
			$r=  $this->input->post('r');
			$fake=  $this->input->post('fake');

			$r = str_replace('[','',$r);
			$r = str_replace(']','',$r);
			$hpArr = explode(',',$r);

			$fake = str_replace('[','',$fake);
			$fake = str_replace(']','',$fake);
			$fakeFiles = explode(',',$fake);


			$target = $this->input->post('target');
			$str = "";
			if(((in_array($target,$hpArr))))  // in_array($file,$fakeFiles)) xor
			{
				$score = -100;
				$win = "hacker";
				//$str = "You have succesfully copied the file to your system";
				$str = 'You have been caught while attempting to steal the information. <br> Your Current Score is: -100.';
			}
			else
			{
				$score = 300;
				$win = "defender";
				//$str = "You have succesfully copied the file to your system";
				$str = 'You have successfully hacked into the system. <br> Your Current Score is: 100.';
			}

			$this->load->model('model_user');
			$this->model_user->add_score($gid,$score);

			$tscore = $this->model_user->check_score($gid);

			if($lid!=0){
				$temp=array('winner'=>$win,'score'=>$score);
				$this->db->where('Number',$lid);
				$this->db->update('exploit_used',$temp);
			}

			//date("Y-m-d H:i:s")
			//echo "<br>THIS IS LID:".$lid;
			echo "<br>".$str;
			echo '<br>Use "exit" command to view your score and exit the game';

		}
	}

	public function game_no()
	{
		$gn=$this->session->userdata('game_number');
		echo $gn;
	}

	public function wait(){
		if ($this->session->userdata('is_logged_in')){
			$gn=$this->session->userdata('game_number');
			$data=array('game_number'=>$gn+1);
			$this->session->set_userdata($data);
			redirect('main/testing');
		} else redirect('main/restricted');
	}

}
