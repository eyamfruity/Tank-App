<?php
    $email = $_POST['email'];

	$to = "littleanter@gmail.com"; 
	// $date = date ("d.m.Y"); 
	// $time = date ("h:i");
	$subject = "Заявка c сайта";

	
	$msg="
    Почта: $email /n";
	mail($to, $subject, $msg, "From: $to "); //Как бы отправляем сами себе, чтобы избежать попадания в спам.
?>