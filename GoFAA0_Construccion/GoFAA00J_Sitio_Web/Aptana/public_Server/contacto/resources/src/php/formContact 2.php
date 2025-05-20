<!--
Copyright ©2015-2016. Juan Camilo Torres Cedano
Creative Commons 4.0 BY-SA.
-->
<?php

require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/functions.php';
require_once __DIR__.'/config.php';

session_start();

// Basic check to make sure the form was submitted.
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    redirectContactWithError("El formulario debe ser enviado con información POST.");
}

// Do some validation, check to make sure the name, email and message are valid.
if (empty($_POST['g-recaptcha-response'])) {
    redirectContactWithError("Por favor complete la validación CAPTCHA.");
}

$recaptcha = new \ReCaptcha\ReCaptcha(CONTACTFORM_RECAPTCHA_SECRET_KEY);
$resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_REQUEST['userMail']);

if (!$resp->isSuccess()) {
    $errors = $resp->getErrorCodes();
    $error = $errors[0];

    $recaptchaErrorMapping = [
        'missing-input-secret' => 'No reCAPTCHA secret key was submitted.',
        'invalid-input-secret' => 'The submitted reCAPTCHA secret key was invalid.',
        'missing-input-response' => 'No reCAPTCHA response was submitted.',
        'invalid-input-response' => 'The submitted reCAPTCHA response was invalid.',
        'bad-request' => 'An unknown error occurred while trying to validate your response.',
        'timeout-or-duplicate' => 'The request is no longer valid. Please try again.',
    ];

    $errorMessage = $recaptchaErrorMapping[$error];
    redirectContactWithError("Please retry the CAPTCHA: ".$errorMessage);
}

if (empty($_POST['userName'])) {
    redirectContactWithError("Por favor ingresa tu nombre en el formulario.");
}

if (empty($_POST['userMail'])) {
    redirectContactWithError("Por favor ingresa tu email en el formulario.");
}

if (!filter_var($_POST['userMail'], FILTER_VALIDATE_EMAIL)) {
    redirectContactWithError("Por favor verifica e ingresa un email válido.");
}

if (empty($_POST['mailSubject'])) {
    redirectContactWithError("Por favor ingresa tu asunto en el formulario.");
}

if (empty($_POST['messageBody'])) {
    redirectContactWithError("Por favor ingresa tu mensaje completo en el formulario.");
}

if (strlen($_POST['messageBody']) < 50) {
    redirectContactWithError("Por favor ingresa un mensaje con al menos 50 caracteres de longitud.");
}

// Everything seems OK, time to send the email.

$mail = new \PHPMailer\PHPMailer\PHPMailer(true);

try {
    // Server settings
    $mail->setLanguage(CONTACTFORM_LANGUAGE);
    $mail->SMTPDebug = CONTACTFORM_PHPMAILER_DEBUG_LEVEL;
    $mail->isSMTP();
    $mail->Host = CONTACTFORM_SMTP_HOSTNAME;
    $mail->SMTPAuth = true;
    $mail->Username = CONTACTFORM_SMTP_USERNAME;
    $mail->Password = CONTACTFORM_SMTP_PASSWORD;
    $mail->SMTPSecure = CONTACTFORM_SMTP_ENCRYPTION;
    $mail->Port = CONTACTFORM_SMTP_PORT;
    $mail->CharSet = CONTACTFORM_MAIL_CHARSET;
    $mail->Encoding = CONTACTFORM_MAIL_ENCODING;

    // Recipients
    $mail->setFrom(CONTACTFORM_FROM_ADDRESS, CONTACTFORM_FROM_NAME);
    $mail->addAddress(CONTACTFORM_TO_ADDRESS, CONTACTFORM_TO_NAME);
    $mail->addReplyTo($_POST['userMail'], $_POST['userName']);

    // Content
    $mail->Subject = "Formulario de Contacto. ".$_POST['mailSubject'];
    $mail->Body    = <<<EOT
Nombre: {$_POST['userName']}
Email: {$_POST['userMail']}

------------------ CONTENIDO DEL MENSAJE ------------------

{$_POST['messageBody']}
EOT;

    $mail->send();
    redirectContactSuccess();
} catch (Exception $e) {
    redirectContactWithError("Un error ha ocurrido mientras intentamos enviar tu mensaje: ".$mail->ErrorInfo);
}
