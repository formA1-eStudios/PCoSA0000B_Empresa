<!--
This file contain the localized texts and contextual information in the page.

!!!ONE FILE LIKE THIS MUST BE CREATED FOR EACH *.html FILE THAT THE USER COULD USE!!!

Copyright ©2015-2016. Juan Camilo Torres Cedano
Creative Commons 3.0 BY-SA.
-->
<?php
	$mail_status = false;

	if (isset($_REQUEST["userMail"])&&($_REQUEST["userMail"]!="")) {
		//if "email" is filled out, send email

		$mail_from = $_POST["userMail"] ;
		$mail_subject = $_POST["mailsubject"] ;
		$mail_message = "From: " . $_POST["userName"] . "\r\nCompany: " . $_POST["company"] . "\r\nTel: " . $_POST["phone"] . "\r\n\n" . $_POST["messagebody"] ;
		//send email
		$mail_status = mail("info@ctdipro.org", $mail_subject, $mail_message, "From:" . $mail_from);
?>
		<script language="javascript" type="text/javascript">
			alert('Thanks for sending us your message.\nWe will be in contact very soon to give you our offer.');
			window.location = 'http://ctdipro.org/home.html';
			document.getElementById("landingForm").innerHTML = "Gracias por enviar el mensaje";
		</script>
<?php
	}
	else {
		//if "email" is not filled out, alert the user
?>
		<script language="javascript" type="text/javascript">
			alert('The message could not be sent due to a server error. Please, check the form and try again.');
			window.location = 'http://ctdipro.org/';
			showLandingForm();
		</script>
<?php
	}
?>