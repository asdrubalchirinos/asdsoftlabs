<?php
session_start();

$firstName = "";
$lastName = "";
$email = "";
$msg = "";
$valid = true;
$posted = false;
$errMsg1 = "";
$errMsg2 = "";
$errMsg3 = "";
$errMsg4 = "";
$errMsg5 = "";
$errMsg6 = "";

if(isset($_POST['email'])){
  $firstName = strip_tags(trim($_POST['firstname']));
	$lastName = strip_tags(trim($_POST['lastname']));
	$email = strip_tags(trim($_POST['email']));	
	$msg = strip_tags(trim($_POST['message']));
		
	
	/************************************
	PREVENTING HEADERS INSERTION
	*************************************/		
	
	// if( eregi("(multipart\\alternative|content-type:|cc:|bcc:|boundary=)", $firstName )){
	// 	die('Sorry but my email server does not like you.');	
	// }else if( eregi("(multipart\\alternative|content-type:|cc:|bcc:|boundary=)", $email )){
	// 	die('Sorry but my email server does not like you.');	
	// }else if( eregi("(multipart\\alternative|content-type:|cc:|bcc:|boundary=)", $lastName )){
	// 	die('Sorry but my email server does not like you.');	
	// }else if( eregi("(multipart\\alternative|content-type:|cc:|bcc:|boundary=)", $msg )){
	// 	die('Sorry but my email server does not like you.');	
	// }
	
	
	/***************************************************
	PREVENTING INVALID EMAIL AND BLANK FIELDS
	****************************************************/	
	function is_valid_email($email) {
		$result = true;
		// if((!eregi("^[_a-z0-9-]+(\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,4})$", $email)) && ( !empty($email))) {
		// 	$result = false;
		// }
		return $result;
	}
	
	if( empty($firstName)){
	    $valid = false;
	    $errMsg1 = "Your name?";
  }	
  if( empty($lastName)){
    $valid = false;
    $errMsg1 = "Your name?";
}	
	if( empty($email)){
	    $valid = false;
	    $errMsg2 = "Your email?";
	}	
	if (!is_valid_email($email) && !empty($email)){
		$valid = false;
		$errMsg3 = "Invalid email.";
	}	
	
	if( empty($msg)){
	    $valid = false;
	    $errMsg6 = "Please type in your message.";
	}
	
	if($valid){
      //send the email	
      $fullName = $firstName.' '.$lastName;
			$headers = "From: $fullName <$email>";
			$headers .= "Reply-To: $fullName <$email>";			
			$subject = 'Message from potential client';		
			$msg = trim($_POST['message']);
			$sendTheMail = mail('achirinos@asdsoftlabs.com', $subject, $msg, $headers);
			$feedback = '<p id="emailSent">The email was successfully sent. <span>Thank you.</span></p>';
      $posted = true;
      

      /* Attempt MySQL server connection. Assuming you are running MySQL
      server with default setting (user 'root' with no password) */
      $link = mysqli_connect("localhost", "root", "", "demo");
      
      // Check connection
      if($link === false){
          die("ERROR: Could not connect. " . mysqli_connect_error());
      }
      
      // Attempt insert query execution
      $sql = "INSERT INTO message (first_name, last_name, email) VALUES
                  ('John', 'Rambo', 'johnrambo@mail.com')";
      
      if(mysqli_query($link, $sql)){
          echo "Records added successfully.";
      } else{
          echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
      }
      
      // Close connection
      mysqli_close($link);

	}else{
	    //do not send the email	
  }  
}
