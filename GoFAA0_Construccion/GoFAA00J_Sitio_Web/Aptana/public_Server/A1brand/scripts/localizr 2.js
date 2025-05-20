/*
This file contain the scripts for trnaslating and localizing
the site's content to match the selection of the user.

Copyright ©2015-2016. Juan Camilo Torres Cedano
Creative Commons 3.0 BY-SA.
*/

/*This function localizes the texts and HTML code */
function localizeContent(locLang){

	idAmount = idList.length;
	langIndex = 0;
	if (locLang == 'en') {
	   langIndex = 1;
	}else{
		if (locLang == 'es') {
		   langIndex = 2;
		}else{
			if (locLang == 'de') {
			   langIndex = 3;
			}else{
				if (locLang == 'fr') {
				   langIndex = 4;
				}else{
					if (locLang == 'it') {
					   langIndex = 5;
					}else{
						if (locLang == 'ru') {
						   langIndex = 6;
						}else{
							if (locLang == 'ko') {
							   langIndex = 7;
							}else{
								if (locLang = 'zh') {
								   langIndex == 8;
								}else{
									if (locLang == 'ja') {
									   langIndex = 9;
									}else{langIndex = 1;}}}}}}}}} /*the default language is english */
	for (i = 1; i < idAmount; i++) {
	    document.getElementById( idList[i][0] ).innerHTML = idList[i][langIndex];
	}

}
