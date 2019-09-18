<?php
	
	include_once( dirname( __FILE__ ) . '/../class/Database.class.php' );
	$pdo = Database::getInstance()->getPdoObject();

	$stmt = $pdo->prepare('SELECT * FROM account');
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_OBJ);
	// var_dump($result);
	echo json_encode($result);
?>