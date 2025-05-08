<!--
Copyright ©2015-2016. Juan Camilo Torres Cedano
Creative Commons 4.0 BY-SA.
-->
<?php




	$mail_status = false;

   function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
   }

	if (empty($_POST["userName"])) {
	   $nameErr = "Tu nombre es requerido.";
   } else {
      $name = test_input($_POST["userName"]);
      // check if name only contains letters and whitespace
      if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
         $nameErr = "Solo se permiten letras y espacios en blanco.";
      }
   }

   if (empty($_POST["companyName"])) {
      $nameErr = "Tu empresa es requerido.";
   } else {
      $name = test_input($_POST["companyName"]);
      // check if name only contains letters and whitespace
      if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
         $nameErr = "Solo se permiten letras y espacios en blanco.";
      }
   }

   if (empty($_POST["userMail"])) {
      $emailErr = "Tu email es requerido.";
   } else {
      $email = test_input($_POST["userMail"]);
      // check if e-mail address is well-formed
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
         $emailErr = "Formato de email invalido.";
      }
   }

   if (empty($_POST["userPhone"])) {
      $phoneErr = "Tu teléfono es requerido.";
   } else {
      $phone = test_input($_POST["userPhone"]);
      // check if phone only contains valid data
      if (!preg_match("/^[0-9-' ]*$/",$phone)) {
         $phoneErr = "Solo se permiten letras y espacios en blanco.";
      }
   }

	if (isset($_POST["userMail"])&&($_POST["userMail"]!="")) {
      // composing the email message.
		$mail_receiver = "info@forma1.pro, forma1.estudios.co@gmail.com";
		$mail_sender = $_POST["userMail"];
		$mail_subject = $_POST["mailsubject"];
		$mail_message = "From: ".$_POST["userName"]."\r\nCompany: ". $_POST["companyName"]."\r\nTel: ".$_POST["userPhone"]."\r\r\nInterés: ".$_POST["typeofProject"]."\r\nPúblico: ".$_POST["typeofCostumer"]."\r\nPlazo: ".$_POST["typeofSchedule"]."\r\r\n\n".$_POST["messagebody"];
      $mail_headers = "Reply to: ".$_POST["userMail"];
		// then send email mesage.
		$mail_status = mail($mail_receiver, $mail_subject, $mail_message, $mail_headers);
      echo ($mail_receiver." >".$mail_subject." >".$mail_message." >".$mail_headers);
?>
		<script language="javascript" type="text/javascript">
			alert('Gracias por enviarnos tu mensaje.\nEstaremos en contacto muy pronto para presentar nuestra oferta.');
			//window.location = 'https://forma1.pro/contacto';
			//document.getElementById("landingForm").innerHTML = "Gracias por enviar tu mensaje";
		</script>
<?php
	}
	else {
		//if "email" is not filled out, alert the user
?>
		<script language="javascript" type="text/javascript">
			alert('El mensaje no pudo ser enviado debido a un error con el servior. Por favor verifica el formulario e intentalo de nuevo.');
			//window.location = 'https://forma1.pro/contacto/';
			//showLandingForm();
		</script>
<?php
	}
?>