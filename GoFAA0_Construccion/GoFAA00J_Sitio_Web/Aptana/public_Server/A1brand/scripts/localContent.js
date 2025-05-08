/*
This file contain the localized texts and contextual information in the page.

!!!ONE FILE LIKE THIS MUST BE CREATED FOR EACH *.html FILE THAT THE USER COULD USE!!!

Copyright ©2015-2016. Juan Camilo Torres Cedano
Creative Commons 3.0 BY-SA.
*/

const idList = [
	/*
	 DO NOT USE THE 0 INDEX FOR ANY ACTUAL INFORMATION IN THE PAGE
	 (the id's must be 12 characters or less)
	 * */
	["id",
		"EN Localized",
		"ES Localized",
		"DE Localized",
		"FR Localized",
		"IT Localized",
		"RU Localized",
		"KO Localized",
		"ZH Localized",
		"JA Localized"],
	["homeTitle",
		"Home",
		"Inicio",
		"deutsch",
		"française",
		"italiano",
		"русский",
		"한국어",
		"中国",
		"日本"],
	["teamTitle",
		"Our team",
		"Nosotros",
		"deutsch",
		"française",
		"italiano",
		"русский",
		"한국어",
		"中国",
		"日本"],
	["projTitle",
		"Projects",
		"Proyectos",
		"deutsch",
		"française",
		"italiano",
		"русский",
		"한국어",
		"中国",
		"日本"],
	["jobsTitle",
		"Work with CTD",
		"Trabaja con CTD",
		"deutsch",
		"française",
		"italiano",
		"русский",
		"한국어",
		"中国",
		"日本"],
	["contTitle",
		"Contact us",
		"Contactanos",
		"deutsch",
		"française",
		"italiano",
		"русский",
		"한국어",
		"中国",
		"日本"],
	["configH2",
		"Configuration",
		"Configuración",
		"deutsch",
		"française",
		"italiano",
		"русский",
		"한국어",
		"中国",
		"日本"],
	["configP",
		"Personalize your experience",
		"Personaliza tu experiencia",
		"deutsch",
		"française",
		"italiano",
		"русский",
		"한국어",
		"中国",
		"日本"],
	["fontSizeTtl",
		"|    Text size    |",
		"| Tamaño de texto |",
		"deutsch",
		"française",
		"italiano",
		"русский",
		"한국어",
		"中国",
		"日本"],
	["imgSizeTtl",
		"|    Icon size    |",
		"| Tamaño de icono |",
		"deutsch",
		"française",
		"italiano",
		"русский",
		"한국어",
		"中国",
		"日本"],
	["langSelecTtl",
		"| Other languages |",
		"|  Otros idiomas  |",
		"deutsch",
		"française",
		"italiano",
		"русский",
		"한국어",
		"中国",
		"日本"],
	["configHelp",
		'If you have any question for us, send your e-mail to our <a href="mailto:info@ctdipro.org">contact</a> service.',
		'Si tienes alguna inquietud, envía tu e-mail a nuestro servicio de <a href="mailto:info@ctdipro.org">contacto</a>.',
		'deutsch',
		'française',
		'italiano',
		'русский',
		'한국어',
		'中国',
		'日本'],
	["Fcontent",
		'Testing',
		'probando',
		'deutsch',
		'française',
		'italiano',
		'русский',
		'한국어',
		'中国',
		'日本'],
];

function showLandingForm() {
	document.getElementById("landingForm").style.left = "-800px";
}
function showLForm(panel) {
	if(panel==2){
		currLeft = "-600px";
	}
	if(panel==3){
		currLeft = "-1200px";
	}
	if(panel==4){
		currLeft = "-1800px";
	}
	if(panel==5){
		currLeft = "-2400px";
	}
	document.getElementById("landingForm").style.left = currLeft;
}
