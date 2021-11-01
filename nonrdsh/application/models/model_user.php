<?php
class Model_user extends CI_Model {


	public function can_log_in()
	{
		// Seasoning is important for the odd md5
		$salt = "Qx-g0Yb.g>)8457!y%AX:?,,u.j93I";

		// Compares the username and password with the db
		$this->db->where('username', $this->input->post('username'));

		$this->db->where('password',$this->input->post('password'));
		$query = $this->db->get('registration');
		$data =$query->result_array();
		// If the query returns one row then the user exists
		if ($query->num_rows() == 1) {
			return $data[0]['id'];
		} else {
			return false;
		}
	}

	public function reg($data,$username,$email){
	//	print_r($data);
		$this->db->where("(email = '$email' OR username = '$username')");
		$query=$this->db->get('registration');
		if($query->num_rows()>=1){
			return false;
		}
		else{
			$this->db->insert('registration',$data);
			return true;
		}
	}
	public function new_game($data)
	{
		$this->db->insert('gameplay',$data);
    $gameplay_id=$this->db->insert_id();
		$temp=array('gameplay_id'=>$gameplay_id);
		$this->session->set_userdata($temp);
	}

	public function save_quiz($data)
	{
		$this->db->insert('instruction_questions',$data);
	//	$this->db->insert('registration',$data);
    // $gameplay_id=$this->db->insert_id();
	// 	$temp=array('gameplay_id'=>$gameplay_id);
	// 	$this->session->set_userdata($temp);
	}

	public function check_user($username,$value){
		$this->db->where($value,$username);
		$query=$this->db->get('registration');
		$result=$query->result_array();
		if($query->num_rows()==1)
		{
			return true;
		}
		else return false;
	}
	public function check_score($gameplay_id){
	 	$this->db->where('id',$gameplay_id);
	 	$query = $this->db->get('gameplay');
		 $data =$query->result_array();
		 if ($query->num_rows() == 1) {
			return $data[0]['score'];
		} else {
			return 0;
		}
	}
	public function add_score($gameplay_id,$score){
		if($this->session->userdata('game_number')<1) 
			return 0;
		
			$curr_score = $this->model_user->check_score($gameplay_id);
		$temp=array('score'=>$curr_score+$score);
		$this->db->where('id',$gameplay_id);		
		if ($this->db->update('gameplay',$temp)) {
		 return true;
	 } else {
		 return 0;
	 }
 }

	public function exploit($data)
	{
		$this->db->insert('exploit_used',$data);
    $last_id=$this->db->insert_id();
		$temp=array('last_id'=>$last_id);
    $this->session->set_userdata($temp);
	}

	public function log_command($data)
	{
		$this->db->insert('command_used',$data);
	}

}
