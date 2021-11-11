<?php 
    session_start();
    include_once "config.php";
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    if(!empty($email)){

        $sql = mysqli_query($conn, "SELECT * FROM users WHERE email = '{$email}'");
        if(mysqli_num_rows($sql) > 0){
            $row = mysqli_fetch_assoc($sql);
            $user_pass = md5($password);
            $enc_pass = $row['password'];
           
            $status = "Active now";
            $sql2 = mysqli_query($conn, "UPDATE users SET status = '{$status}' WHERE unique_id = {$row['unique_id']}");
            if($sql2){
                $_SESSION['unique_id'] = $row['unique_id'];
                header('location: ../users.php'); 
                echo "success";
            }else{
                echo "Something went wrong. Please try again!";
            }
            
        }else{
            // Do sign up here

            echo "$email - This email not Exist!";
        }
    }else{
        echo "Input fields are required!";
    }
?>