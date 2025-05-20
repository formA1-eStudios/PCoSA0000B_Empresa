<?php

require_once __DIR__.'/resources/src/php/vendor/autoload.php';
require_once __DIR__.'/resources/src/php/config.php';

session_start();

if (!empty($_SESSION['_contact_form_error'])) {
    $error = $_SESSION['_contact_form_error'];
    unset($_SESSION['_contact_form_error']);
}

if (!empty($_SESSION['_contact_form_success'])) {
    $success = true;
    unset($_SESSION['_contact_form_success']);
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<!--
=============================================================

Copyright (c) HTML5 Boilerplate

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

=============================================================
COPYRIGHT (c) JUAN CAMILO TORRES
12025 (PERPETUAL HOLOCENE CALENDAR)
THIS DOCUMENT IS LICENSED UNDER CREATIVE COMMONS 4.0 BY-SA.
=============================================================
-->

<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="es-CO"> <!--<![endif]-->

   <head>
      <meta charset="UTF-8" http-equiv="Content-Type" content="text/html">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!--meta name="viewport" content="width=device-width, height=device-height, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, shrink-to-fit=no""-->

<!--
===========================================================
BASIC TAGS FOR SEO OPTIMIZATION
===========================================================
-->
      <title>formA1 eStudios – Contacto</title>
      <meta name="description" content="Formulario de contacto para consultoría & gestión de tus proyectos.">
      <meta name="author" content="juanKme">
      <meta name="web_author" content="formA1 eStudios. Bogotá, Colombia">
      <meta name="contact" content="info@forma1.pro">
      <meta name="rating" content="general">
      <meta name="keywords" content="profesionales, professionals, consultoria, consultancy, investigación, desarrollo, innovación, research, development, R&D+di, proyectos, projects, ingenieria, engineering, arquitectura, architechture, construccion, construction, AECO, ecodiseño, ecodesign, consultoría ambiental, environmental consultancy, estructuras, structures, concreto reforzado, reinforced concrete, acero estructural, structural steel, software, BIM, project management, piim, games, juegos, apps, aplicacines, aplicativos, software development, desarrollo de software, marketing, publicity, publicidad, bogota, colombia, creative studios, estudio, estudio de proyectos, diseño web, paginas web, animation, animacion, 3D, 4D, modelado digital, digital arts, creatividad, creativity">
      <meta name="copyright" content="formA eStudios ©2024-2025">
      <meta name="distribution" content="global">
      <meta name="language" content="spanish">
      <meta name="google" content="notranslate">
      <meta name="robots" content="noindex, nofollow">
      <meta name="generator" content="Axway Group; Aptana Studio 3">
      <meta name="version" content="0.3.5">
      <meta name="last modified" content="12/may/12025"> <!-- (CPH) -->
      <base href="https://forma1.pro/contacto/" target="_parent" />
      <meta name="theme-color" content="#696969">
      <link rel="manifest" href="/site.webmanifest">

      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any">
      <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any">
      <link rel="shortcut icon" href="/favicon.ico">
      <link rel="apple-touch-startup-image" href="/launch.png">
      <link rel="apple-touch-icon" href="/icon.png" sizes="57x57 60x60 72x72 114x114 120x120 144x144 152x152 180x180 256x256 512x512">

      <meta property="og:site_name" content="formA1 eStudios">
      <meta property="og:title" content="formA1 eStudios — Contacto">
      <meta property="og:description" content="Formulario de contacto para consultoría & gestión de tus proyectos.">
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://forma1.pro/">
      <meta property="og:image" content="/A1brand/assets/img/splash.png">
      <meta property="og:locale" content="es_CO">

      <!-- SOCIALS' TAGS FOR IMPROVED VISIBILITY VIA LINKEDIN -->
      <meta prefix="og: http://ogp.me/ns#" property="og:title" content="formA1 eStudios — Contacto">
      <meta prefix="og: http://ogp.me/ns#" property="og:description" content="Formulario de contacto para consultoría & gestión de tus proyectos.">
      <meta prefix="og: http://ogp.me/ns#" property="og:image" content="/A1brand/assets/img/splash.png">

      <!-- SOCIALS' TAGS FOR IMPROVED VISIBILITY VIA X/TWITTER -->
      <!-- for more information read https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards -->
      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="@formA1_eStudios">
      <meta name="twitter:site:id" content="@formA1_eStudios">
      <meta name="twitter:creator" content="@juanKme_">
      <meta name="twitter:creator:id" content="@juanKme_">
      <meta name="twitter:title" content="formA1 eStudios — Contacto">
      <meta name="twitter:description" content="Formulario de contacto para consultoría & gestión de tus proyectos.">
      <meta name="twitter:image" content="resources/img/formA1_logoB_amplio.png">
      <meta name="twitter:image:alt" content="This image shows the company's logo in a white background.">

<!--
===========================================================
STYLING CSS CODE FOR BRANDING COMPLIANCE
===========================================================
-->

      <!-- DELETE THIS <link> ELEMENT ONCE PROPRIETARY WEB DESIGN IS COMPLETE!
         the following code has been created using assistance from DeepSeek's R1 AI model.
         It is being used as reference for the creation of the proprietary styling code. -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

      <!-- the next styling code has been recovered from previous projects; needs curation -->
      <link rel="stylesheet" type="text/css" media="all" href="/A1brand/styles/mainPages.css">
      <link rel="stylesheet" type="text/css" media="print" href="/A1brand/styles/print.css">
      <link rel="stylesheet" type="text/css" media="screen" href="/A1brand/styles/screen.css">
      <link rel="stylesheet" type="text/css" media="handheld" href="/A1brand/styles/handheld.css">
      <link rel="stylesheet" type="text/css" media="tv,projector and (scan:progresive)" href="/A1brand/styles/tvset.css">

      <link rel="stylesheet" type="text/css" media="all" href="resources/src/css/customStyles.css">
      <!--
         END OF STYLING CODE
      -->

      <!-- MINIMAL JAVASCRIPT CODE FOR IMPROVED LOADING TIMES
      Modernizr enables HTML5 elements & feature detects; Respond is a polyfill for min/max-width CSS3 Media Queries -->
      <script src="/A1brand/scripts/libs/modernizr-custom.js"></script>
      <!--script src="/A1brand/scripts/libs/modernizr-2.0.6.min.js"></script-->
   </head>
   <body id="pageHTMLbody">
<!--
===========================================================
THIS HEADER SECTION MUST BE LEFT UNMODIFIED AS PER BRANDING
GUIDELINES PUBLISHED BY THE ORGANIZATION
===========================================================
-->
      <header id="pagesMainHeader" class="container">
         <nav id="pageMainNavigator" class="aNavigator">
            <a id="homeLogoAnchor" class="brandAnchor" href="/"><img id="headingLogoformA1" class="brandingLogo" src="/A1brand/assets/img/logo_formA1_light_header.png" alt="formA1 Logo"/><img id="headingLogoeStudios" class="brandingLogo" src="/A1brand/assets/img/logo_eStudios_header.png" alt="eStudios Logo"/></a>
            <button id="navigationToggleButton" class="mobile-menu-btn">
               <i class="fas fa-bars"> </i>
            </button>
            <ul class="nav-links">
               <li><a href="/contacto">contacto</a></li>
            </ul>
         </nav>
      </header>

<!--
===========================================================
THE MAIN CONTENT OF THE PAGE IS PLACED IN THIS SECTION
===========================================================
-->

<div class="container">
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">Contáctanos</h1>

                    <?php
                    if (!empty($success)) {
                        ?>
                        <div class="alert alert-success">Tu mensaje ha sido enviado con éxito!</div>
                        <?php
                    }
                    ?>

                    <?php
                    if (!empty($error)) {
                        ?>
                        <div class="alert alert-danger"><?= $error ?></div>
                        <?php
                    }
                    ?>

                    <form method="post" action="resources/src/php/formContact.php">
                        <div class="form-group">
                            <label for="userName">Tu nombre</label>
                            <input type="text" name="userName" id="name" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="userMail">Tu dirección email</label>
                            <input type="email" name="userMail" id="email" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="mailSubject">Tu asunto</label>
                            <input type="text" name="mailSubject" id="subject" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="messageBody">Tu mensaje detallado</label>
                            <textarea name="messageBody" id="messageBody" class="form-control" rows="12"></textarea>
                        </div>

                        <div class="form-group text-center">
                            <div class="g-recaptcha" data-sitekey="<?= CONTACTFORM_RECAPTCHA_SITE_KEY ?>"></div>
                        </div>
                        <button class="btn btn-primary btn-block">Enviar ahora mismo</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<!--
===========================================================
THIS FOOTER SECTION MUST BE LEFT UNMODIFIED AS PER BRANDING
GUIDELINES PUBLISHED BY THE ORGANIZATION
===========================================================
-->
      <footer id="pagesMainFooter">
         <div class="container">
            <div class="footerContent">
               <div class="footerColumn">
                  <h3>Enlaces</h3><br/>
                  <ul class="footer-links">
                     <li><a href="https://formA1.pro">nuestra web</a></li>
                     <li><a href="/">nuestro trabajo</a></li>
                     <li><a href="/">nuestra oferta</a></li>
                     <li><a href="/">nuestra identidad</a></li>
                     <li><a href="/">nuestro blog</a></li>
                     <li><a href="/">nuestras alianzas</a></li>
                     <li><a href="/">nuestros canales</a></li>
                   </ul>
               </div>
               <div class="footerColumn">
                  <h3>Iniciativas</h3><br/>
                  <ul class="footer-links">
                     <li><a href="/">calendario CPH</a></li>
                     <li><a href="/">gestión PiiM</a></li>
                     <li><a href="/">evaluación iSTATE</a></li>
                     <li><a href="/">finanzas para todos</a></li>
                  </ul>
               </div>
               <div class="footerColumn">
                  <h3>Servicios</h3><br/>
                  <ul class="footer-links">
                     <li><a href="/">gestión de proyectos</a></li>
                     <li><a href="/">consultoría en GP</a></li>
                     <li><a href="/">sistemas de gestión empresarial</a></li>
                     <li><a href="/">consultoría en SGE</a></li>
                     <li><a href="/">auditoría en calidad SGI/SGE</a></li>
                     <li><a href="/">consultoría en certificación</a></li>
                     <li><a href="/">formación &amp; capacitación</a></li>
                     <li><a href="/">tienda en línea</a></li>
                  </ul>
               </div>
               <div class="footerColumn">
                  <h3>Recursos</h3><br/>
                  <ul class="footer-links">
                     <li><a href="">eStudios<span class="inlineTrademark">&trade;</span> dedicados</a></li>
                     <li><a href="">documentación</a></li>
                     <li><a href="">soporte técnico</a></li>
                  </ul>
               </div>
               <div id="organisationFooterColumn" class="footerColumn">
                  <h2><img id="footingLogoformA1" class="formA1Logo" src="/A1brand/assets/img/logo_formA1_dark_header.png" alt="formA1 Logo"/><br/><br/>formA1 eStudios</h2>
                  <p>Impulsamos el desarrollo empresarial de proyectos, clientes y aliados con base en nuestros servicios de gestión de información, así fomentamos la toma de decisiones que construyen BienEstar<span class="inlineTrademark">&trade;</span> colectivo.</p><br/>
                  <div class="social-links">
                     <a id="tagSocial_openCollective" target="_blank" href="https://www.opencollective.com/forma1estudios"><i class="fab fa-patreon"> </i></a>
                     <a id="tagSocial_linkedin" target="_blank" href="https://www.linkedin.com/company/formA1-eStudios/"><i class="fab fa-linkedin-in"> </i></a>
                     <a id="tagSocial_github" target="_blank" href="https://www.github.com/formA1-eStudios/"><i class="fab fa-github"> </i></a>
                     <a id="tagSocial_discord" target="_blank" href="https://discord.gg/sgs5zxzgZx"><i class="fab fa-discord"> </i></a>
                     <a id="tagSocial_youtube" target="_blank" href="https://www.youtube.com/@formA1_eStudios/"><i class="fab fa-youtube"> </i></a>
                     <a id="tagSocial_twitter" target="_blank" href="https://www.x.com/formA1_eStudios/"><i class="fab fa-twitter"> </i></a><br/><br/><br/>
                  </div>
                  <br/><h3>Contacto</h3><br/>
                  <address>
                     <p id="tagKey_geo" class="tagKey"><i class="fas fa-map-marker-alt">&nbsp; Carrera 5#45-30, Ed. Cramer 45.<br/>&nbsp; &nbsp; &nbsp; Bogotá D.C. Colombia. (112031)</i></p>
                     <p id="tagKey_tel" class="tagKey"><i class="fas fa-phone">&nbsp; (+57) 6017 665 942</i></p>
                     <p id="tagKey_env" class="tagKey"><i class="fas fa-envelope">&nbsp; info@formA1.pro</i></p>
                     <p id="tagKey_clo" class="tagKey"><i class="fas fa-clock">&nbsp; 07:00h ~ 20:00h, lunes a sábados</i><br/></p><br/>
                  </address><br/>
               </div>
            </div>
         </div>
         <div>
            <div id="pagesFooter" class="footerBottom">
               <p id="legalLinksSet">| &nbsp; <a href="/">Legales</a> &nbsp; | &nbsp; <a href="/">Privacidad</a> &nbsp; | &nbsp; <a href="/">Términos</a> &nbsp; | &nbsp; <a href="/">Conducta</a> &nbsp; | &nbsp; <a href="/">Licenciamiento</a> &nbsp; | &nbsp; <a href="/">Cookies</a> &nbsp; |<br/></p>
               <p><br/><img id="pagesSignatureLight" class="A1signature" src="https://forma1.pro/A1brand/assets/img/signature_dark.png" alt="pequeño icono de la organización"><br/></p>
               <p id="legalNoticeQuote" class="legalNotice" xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
                  &nbsp; &copy; 12025 (<abbr title="Calendario Perenne-Holoceno">CPH</abbr>). La propiedad intelectual de este <a property="dct:title" rel="cc:attributionURL" href="https://www.forma1.pro/">sitio web</a> creado por <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.linkedin.com/in/juankme/" target="_blank">Juan Torres</a> está licenciada bajo <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-SA 4.0</a> <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;"><img style="height:13px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:13px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:13px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a>
               </p>
            </div>
         </div>
      </footer>
<!--
===========================================================
ALL SCRIPTING CODE MUST BE PLACED AFTER THE FOOTER OF THE
PAGE FOR IMPROVED RESPONSIVENESS AS PER BRANDING GUIDELINES
===========================================================
-->
         <!-- Google tag (gtag.js) for web analytics -->
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8PLEC17BR"></script>
         <script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-S8PLEC17BR');</script>

         <!-- All third party scripts referenced here to be used within the website -->
         <script src="/A1brand/scripts/UX.4.47.0.js" crossorigin=""></script>
         <script>window.jQuery || document.write('<script src="js/libs/jquery-3.7.1.min.js"><\/script>');</script>
         <!--script src="//ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
         <!--script>"use strict";Core.utils.onAllowCookieTracking(function () {const queryString = window.location.search;const urlParams = new URLSearchParams(queryString);const whiteList = ['gclid', 'fbclid', 'gdan_clid'];const belongToList = list => item => list.includes(item);const belongToWhiteList = belongToList(whiteList);Array.from(urlParams).forEach(param => {const [queryKey, queryResult] = param;if (!belongToWhiteList(queryKey)) return;localStorage.setItem(queryKey, queryResult);});});</script>

<!-- reCAPTCHA Javascript -->
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

         <!-- All proprietary scripts included/referenced here to be used within the website -->
         <script src="/A1brand/scripts/main.js"></script>
         <script defer src="resources/src/js/plugins.js"></script>
         <script defer src="resources/src/js/script.js"></script>

         <!--
            END OF SCRIPTS
         -->

<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
<!--[if lt IE 7 ]>
   <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
   <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
<![endif]-->
   </body>
</html>