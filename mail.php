<?php $name = $_POST['name'];
$email = $_POST['email'];
$queries = $_POST['queries'];
$formcontent="From: $name \n queries: $queries";
$recipient = "mauaa.datta@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
