<?php
	
	include_once( dirname( __FILE__ ) . '/../class/Database.class.php' );
	$pdo = Database::getInstance()->getPdoObject();
	
	$user = $_POST[ 'user' ];
	$email = $_POST[ 'email' ];
	echo $user .'  '.$email;

	$stmt = $pdo->prepare('INSERT INTO account (user, email) values (:user, :email)');
	$data = array('user'=> $user, 'email'=> $email);
	$stmt->execute($data);
?>