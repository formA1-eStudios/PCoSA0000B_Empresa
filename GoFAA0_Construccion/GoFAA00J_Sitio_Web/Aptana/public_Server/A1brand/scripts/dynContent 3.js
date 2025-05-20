/*
This file contains the main content of the site's home page

Copyright ©2011-2012. SoftSense Development Group S.A.S
All rights reserved.
*/

//The matrix defines the navigation options; rows=current face, cols=resultant directions
// UP RIGHT DOWN LEFT
var facesNav = new Array(6);
facesNav[0] = new Array(4);
facesNav[1] = new Array(4);
facesNav[2] = new Array(4);
facesNav[3] = new Array(4);
facesNav[4] = new Array(4);
facesNav[5] = new Array(4);

facesNav = [[1, 3, 5, 2 ],
			[0, 2, 4, 3 ],
			[4, 1, 0, 5 ],
			[5, 0, 1, 4 ],
			[2, 5, 3, 1 ],
			[4, 2, 0, 3 ]];

var cubeFaceContent = new Array(6);

const trans_start = 1;		/* initial frame for the transition */
const trans_end = 25;		/* final frame for the transition */
var fade_state = 0;			/* opacity value for the fade effect*/
var fade_Step = 0.1;		/* determines the speed of the transition */
var is_fadeout = true;		/* trigger for the fading effect */

var fadeTimer;
var transTimer;
var fadeinInterval;
var fadeoutInterval;
var transInterval;

var rotDir;
var currentFace = 0;
var activeFace;
var dirIndex;
var loaded = false;

//This function stablishes the information that goes in the showing face of the cube.
function setFaceContent(currentFaceIndex) {
	loaded = true;
	var curCubeFace = document.getElementById("contentCube");
	curCubeFace.style.background = "rgb(255,255,255) url('images/bg" + currentFaceIndex + ".png') no-repeat top center";
	curCubeFace.innerHTML = cubeFaceContent[currentFaceIndex];
}

//This function cyle through the animation's frames.
function cubeTransition() {
	frameLabel = rotDir+frame;
	document.getElementById("cubeAnim").style.background = "url('../Images/cubeAnimation/" +frameLabel+ ".png') no-repeat top center";
	frame++;
	if (frame < trans_end) {
		transTimer = setTimeout("cubeTransition()",100);
	}else {
		clearTimeout(transTimer);
		document.getElementById("cubeAnim").style.background = "url('../Images/cubeAnimation/cubeBase.png') no-repeat top center";
		setFaceContent((facesNav[activeFace][dirIndex]));
		currentFace = (facesNav[activeFace][dirIndex]);
		updateDynamicContent();
		fadeTimer = setTimeout(fadingCube,10);
	}
}

//This function make the active-cube-face dissapear, then rotate and then reappear
function fadingCube() {
	if (is_fadeout == false) {
		document.getElementById("contentCube").style.opacity = 1; /* support for Safari, Opera, Chrome and FireFox */
		document.getElementById("contentCube").style.filter = "alpha(opacity= 100)"; /* support for IE 4, 5, 6 and 7 */
		document.getElementById("contentCube").style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=100)"; /* support for IE 8 */
	}

	if (is_fadeout) {
		fade_state += fade_Step;
		if (fade_state>1) {
			clearTimeout(fadeTimer);
			is_fadeout = false;
		}
	} else {
		fade_state -= fade_Step;
		if (fade_state<0) {
			clearTimeout(fadeTimer);
		}
	}

	var animatedCube = document.getElementById("cubeAnim");
	if (fade_state<=1) {
		if (is_fadeout) animatedCube.style.height = "1000px";
		if (fade_state>0) {
			animatedCube.style.opacity = fade_state;  /* support for Safari, Opera, Chrome and FireFox */
			animatedCube.style.filter = "alpha(opacity="+fade_state*100+")";  /* support for IE 4, 5, 6 and 7 */
			animatedCube.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity="+fade_state*100+")";  /* support for IE 8 */
			fadeTimer = setTimeout(fadingCube,10);
		} else {
			animatedCube.style.height = "0px";
			is_fadeout = true;
			updateDynamicContent();
		}
	} else {
		document.getElementById("contentCube").style.background ="";
		document.getElementById("contentCube").style.opacity = 0;  /* support for Safari, Opera, Chrome and FireFox */
		document.getElementById("contentCube").style.filter = "alpha(opacity= 0)";    /* support for IE 4, 5, 6 and 7 */
		document.getElementById("contentCube").style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"; /* support for IE 8 */
		fade_state = 1;
		document.getElementById("socialButtons").style.display = "none";
		transTimer = setTimeout(cubeTransition,50);
	}
}

function goUp(toFace){
	if(loaded==true) {
	rotDir = "up";
	frame = trans_start;
	activeFace = toFace ;
	dirIndex = 0;
	fadeTimer = setTimeout(fadingCube,10);
	}
}

function goRight(toFace){
	if(loaded==true) {
	rotDir = "ri";
	frame = trans_start;
	activeFace = toFace ;
	dirIndex = 1;
	fadeTimer = setTimeout(fadingCube,10);}
}

function goDown(toFace){
	if(loaded==true) {
	rotDir = "do";
	frame = trans_start;
	activeFace = toFace ;
	dirIndex = 2;
	fadeTimer = setTimeout(fadingCube,10);}
}

function goLeft(toFace){
	if(loaded==true) {
	rotDir = "le";
	frame = trans_start;
	activeFace = toFace ;
	dirIndex = 3;
	fadeTimer = setTimeout(fadingCube,10);}
}



//	Begining of third-party script. Modified by Juan Camilo Torres, SoftSense Studios.
// ORIGINAL: TOUCH-EVENTS SINGLE-FINGER SWIPE-SENSING JAVASCRIPT
// Courtesy of PADILICIOUS.COM and MACOSXAUTOMATION.COM

            // this script can be used with one or more page elements to perform actions based on them being swiped with a single finger

            var triggerElementID = null; // this variable is used to identity the triggering element
            var fingerCount = 0;
            var startX = 0;
            var startY = 0;
            var curX = 0;
            var curY = 0;
            var deltaX = 0;
            var deltaY = 0;
            var horzDiff = 0;
            var vertDiff = 0;
            var minLength = 150; // the shortest distance the user may swipe
            var swipeLength = 0;
            var swipeAngle = null;
            var swipeDirection = null;

            // The 4 Touch Event Handlers

            // NOTE: the touchStart handler should also receive the ID of the triggering element
            // make sure its ID is passed in the event call placed in the element declaration, like:
            // <div id="picture-frame" ontouchstart="touchStart(event,'picture-frame');"  ontouchend="touchEnd(event);" ontouchmove="touchMove(event);" ontouchcancel="touchCancel(event);">

            function touchStart(event,passedName) {
                // get the total number of fingers touching the screen
                fingerCount = event.touches.length;
                // since we're looking for a swipe gesture (multiple fingers), check that 2 fingers were used
                if ( fingerCount == 2 ) {
					// disable the standard ability to select the touched object
					event.preventDefault();
                    // get the coordinates of the touch
                    startX = event.touches[0].pageX;
                    startY = event.touches[0].pageY;
                    // store the triggering element ID
                    triggerElementID = passedName;
                } else {
                    touchCancel(event);
                }
            }

            function touchMove(event) {
                if ( event.touches.length == 2 ) {
					event.preventDefault();
                    curX = (event.touches[0].pageX+event.touches[1].pageX)/2;
                    curY = (event.touches[0].pageY+event.touches[1].pageY)/2;
                } else {
					touchCancel(event);
                }
            }

            function touchEnd(event) {
                // check to see if more than one finger was used and that there is an ending coordinate
                if ( fingerCount == 2 && curX != 0 ) {
					event.preventDefault();
                    // use the Distance Formula to determine the length of the swipe
                    swipeLength = Math.round(Math.sqrt(Math.pow(curX - startX,2) + Math.pow(curY - startY,2)));
                    // if the user swiped more than the minimum length, perform the appropriate action
                    if ( swipeLength > minLength ) {
                        calculateAngle();
                        determineSwipeDirection();
                        processingRoutine();
                        touchCancel(event); // reset the variables
                    } else {
                        touchCancel(event);
                    }
                } else {
                    touchCancel(event);
                }
            }

            function touchCancel(event) {
                // reset the variables back to default values
				triggerElementID = null;
				fingerCount = 0;
				startX = 0;
				startY = 0;
				curX = 0;
				curY = 0;
				deltaX = 0;
				deltaY = 0;
				horzDiff = 0;
				vertDiff = 0;
				swipeLength = 0;
				swipeAngle = null;
				swipeDirection = null;
            }

            function calculateAngle() {
                var X = startX-curX;
                var Y = curY-startY;
                var Z = Math.round(Math.sqrt(Math.pow(X,2)+Math.pow(Y,2))); //the distance - rounded - in pixels
                var r = Math.atan2(Y,X); //angle in radians (Cartesian system)
                swipeAngle = Math.round(r*180/Math.PI); //angle in degrees
                if ( swipeAngle < 0 ) { swipeAngle =  360 - Math.abs(swipeAngle); }
            }

            function determineSwipeDirection() {
                if ( (swipeAngle <= 45) && (swipeAngle >= 0) ) {
                    swipeDirection = 'left';
                } else if ( (swipeAngle <= 360) && (swipeAngle >= 315) ) {
                    swipeDirection = 'left';
                } else if ( (swipeAngle >= 135) && (swipeAngle <= 225) ) {
                    swipeDirection = 'right';
                } else if ( (swipeAngle > 45) && (swipeAngle < 135) ) {
                    swipeDirection = 'down';
                } else {
                    swipeDirection = 'up';
                }
            }
//	End of third-party script


//This function trigger the animation of the cube from the touch gestures on compatible devices.
function processingRoutine() {
	var swipedElement = document.getElementById(triggerElementID);
	if ( swipeDirection == 'left' ) {
		goRight(currentFace);
	} else if ( swipeDirection == 'right' ) {
		goLeft(currentFace);
	} else if ( swipeDirection == 'up' ) {
		goDown(currentFace);
	} else if ( swipeDirection == 'down' ) {
		goUp(currentFace);
	}
}


//The following code sets up the video in the start-content face.
var videoHLTimer;
var videoHLsize;
var videoData;
var activeHL=-1;

function setupVideoHLs() {
	videoHLsize = videoHighlights.length;
	var videoswitcher = document.getElementById("videoSwitch");
	videoswitcher.innerHTML = " ";		// Make sure the switch is blank
	for (var i =0; (i<videoHLsize); i++) {
		videoswitcher.innerHTML += '<div id="node'+i+'" class="videoNode" onclick="updateVideoHL('+i+')"> </div>';
	}
	videoswitcher.innerHTML += '<div id="smallsep"></div> <div id="subtitleInfo" onclick="redirectPage()"></div>';
	document.getElementById("subtitleInfo").style.width = (550 - ((30*videoHLsize) + 50))+"px";
}

function updateVideoHL (selectedHL) {
	clearTimeout(videoHLTimer);
	document.getElementById("videoBanner").src = "../Images/blank.png";
	if (activeHL != selectedHL) {
		videoData = videoHighlights[selectedHL];
		var videoHL = document.getElementById("HLvideoObj");

		document.getElementById("videoBorder").innerHTML=" ";
		videoHL.innerHTML = " ";
		for (var i=0; (i<videoData.resources.length); i++) {
			videoHL.innerHTML += '<source src="'+videoData.resources[i].location+'" type="video/'+videoData.resources[i].type+'" />';
		}
		videoHL.poster = videoData.poster;
		videoHL.innerHTML += html5videoError;

		for (var j=0; (j<videoHighlights.length) ; j++) {
			document.getElementById("node"+j).style.background = 'url("../Images/gNewsNode.png") no-repeat bottom center';
		}
		document.getElementById("subtitleInfo").innerHTML = videoData.subtitle;
		document.getElementById("node"+selectedHL).style.background = 'url("../Images/gNewsNode.png") no-repeat top center';
		activeHL = selectedHL;
		videoHL.load();
		if (!(navigator.appVersion.match("Mobile"))) {
			videoHL.play();
		}
	}
}

function cycleVideoHL() {
	if (activeHL >= (videoHLsize-1)) {
		activeHL = -1;
	}
	updateVideoHL (activeHL+1);
}

var titleSwipe = 1;

function videoEnded() {
	document.getElementById("videoBanner").src = videoData.banner;
	document.getElementById("videoBorder").innerHTML='<div id="videoHLTitle"><h2>'+videoData.title+'</h2></div>';
	document.getElementById("videoHLTitle").style.bottom = "-50px";
	titleSwipe=1;
	videoHLTimer = setTimeout(swipevTitle,25);
	videoHLTimer = setTimeout(cycleVideoHL,5000);
}

function swipevTitle() {
	var swipedTitle = document.getElementById("videoHLTitle");
	titleSwipe *= swipe_step;
	if (titleSwipe>100) {
		titleSwipe = 100;
		clearTimeout(swipeEffect);
	} else {
		swipeEffect = setTimeout(swipevTitle,15);
	}
	swipedTitle.style.bottom = (-50+Math.floor(titleSwipe))+"px";
}

//This function setsup the content of the 4 headlights news of the page.
function setupGraphicNews() {
	document.getElementById("gnewNW").style.background = "url('"+generalNews[0].preview+"') no-repeat center center";
	document.getElementById("titleNW").innerHTML = generalNews[0].title;

	document.getElementById("gnewNE").style.background = "url('"+generalNews[1].preview+"') no-repeat center center";
	document.getElementById("titleNE").innerHTML = generalNews[1].title;

	document.getElementById("gnewSW").style.background = "url('"+generalNews[2].preview+"') no-repeat center center";
	document.getElementById("titleSW").innerHTML = generalNews[2].title;

	document.getElementById("gnewSE").style.background = "url('"+generalNews[3].preview+"') no-repeat center center";
	document.getElementById("titleSE").innerHTML = generalNews[3].title;
}

function redirectPage() {
	window.location = videoData.linkedURL;
}
function redirectNewNW() {
	articleIndex = 0;
	goLeft(currentFace);
}
function redirectNewNE() {
	articleIndex = 1;
	goLeft(currentFace);
}
function redirectNewSW() {
	articleIndex = 2;
	goLeft(currentFace);
}
function redirectNewSE() {
	articleIndex = 3;
	goLeft(currentFace);
}

//This video triggers are used to activate some features of the website.
function addVideoListener() {
    var HLVideo = document.getElementById("HLvideoObj");
    HLVideo.addEventListener('ended',videoEnded,false);
	HLVideo.addEventListener('stalled',videoEnded,false);
	HLVideo.addEventListener('suspend',videoEnded,false);
	HLVideo.addEventListener('error',videoEnded,false);
}

//This code is used to change between content for each product.
var is_swipeout = false;
var swipe_state = 1;
var swipe_step = 1.25;
var swipeEffect;
var activeProduct;
var delta =0;
var refItemIndex;
var refProductIndex;

function swipepInfo() {
	var swipedSheet = document.getElementById("productInfo");
	if (is_swipeout) {
		swipe_state /= swipe_step;
		if (swipe_state<=1) {
			clearTimeout(swipeEffect);
			swipedSheet.style.right = "0px";
			is_swipeout = false;
			swipe_state=1;
		}
	} else {
		swipe_state *= swipe_step;
		if (swipe_state>425) {
			updateProductInfo();
			is_swipeout = true;
		}
	}
	if (swipe_state>1) {
		swipedSheet.style.right = (-1*Math.floor(swipe_state))+"px";
		swipeEffect = setTimeout(swipepInfo,15);
	}
}

function updateProductInfo() {
	document.getElementById("productName").innerHTML = activeProduct.pName;
	document.getElementById("productPreview").src = activeProduct.pPreview;
	document.getElementById("productPreview").style.width = activeProduct.pPreview_width;
	document.getElementById("productPreview").style.height = activeProduct.pPreview_height;
	document.getElementById("productDescription").innerHTML = activeProduct.pDescription;
}
function setActiveProduct(selectedItem) {
	if(activeProduct != selectedItem) {
		activeProduct = selectedItem;
		swipepInfo();
	}
}

function swipeGallery() {
	if (swipe_state>130) {
		swipe_state = 1;
		clearTimeout(swipeEffect);
		refItemIndex -= delta;
		refProductIndex -= delta;
		updateGallery();
	} else {
		swipe_state += 10;

		for (var j=0 ; j<5 ; j++) {
			var i = parseInt(document.getElementById("product"+j).style.left, 10);
			document.getElementById("product"+j).style.left = ((delta*10)+i)+"px";
		}
		swipeEffect = setTimeout(swipeGallery,30);
	}
}

function setupGallery() {
	var productsGallery = document.getElementById("productSlider");
	productsGallery.innerHTML = " ";		// Make sure the gallery is empty
	for (var i=0; (i<=(specificProducts.length)); i++) {
		var productIndex = refProductIndex + i;

		if (productIndex > (specificProducts.length-1)) {
			productIndex = refProductIndex + i - specificProducts.length; }

		productsGallery.innerHTML += '<div id="product'+i+'" class="galleryItem" onclick="setActiveProduct(specificProducts['+productIndex+'])"></div>';
		document.getElementById("product"+i).style.background = 'url("'+specificProducts[productIndex].pIcon+'") no-repeat';
		document.getElementById("product"+i).style.left = ((i*130)-125)+"px";
	}
}

function updateGallery() {

	if (refProductIndex == -1) { refProductIndex = (specificProducts.length-1); }
	if (refProductIndex == specificProducts.length) { refProductIndex = 0; }

	setupGallery();
	delta = 0;
}


//This code is used to switch between news articles.
var is_hidden = false;
var slide_state = 1;
var slide_step = 1.3;
var slideEffect;
var activeArticle;
var articleIndex = 0;

function slideArticle() {
	var articleBody = document.getElementById("selectedArticle");
	if (is_hidden) {
		slide_state /= slide_step;
		if (slide_state<=1) {
			clearTimeout(slideEffect);
			articleBody.style.left = "1px";
			is_hidden = false;
			slide_state=1;
		}
	} else {
		slide_state *= slide_step;
		if (slide_state>500) {
			updateArticleBody();
			is_hidden = true;
		}
	}
	if (slide_state>1) {
		articleBody.style.left = (-1*Math.floor(slide_state))+"px";
		slideEffect = setTimeout(slideArticle,15);
	}
}

function updateArticleBody() {
	document.getElementById("articleTitle").innerHTML = activeArticle.title;
	document.getElementById("articleContent").innerHTML = activeArticle.article;
	document.getElementById("artFooter").innerHTML = createdby + " : <br>"+activeArticle.author+"<br>"+activeArticle.postDate+"<br><a href="+activeArticle.linkedURL+" >"+newmoreinfo+".</a>";

}

function setSelectedArticle(activeArticleIndex) {
	if(activeArticle != generalNews[activeArticleIndex]) {
		activeArticle = generalNews[activeArticleIndex];
		slideArticle();
		for (var i=0; (i<generalNews.length); i++) {
			document.getElementById("articleItem"+i).style.backgroundColor = "rgb(252,255,252)";
			document.getElementById("articleItem"+i).style.color = "rgb(0,0,0)";
			document.getElementById("articleItem"+i).style.textShadow = "none";
		}
		document.getElementById("articleItem"+activeArticleIndex).style.backgroundColor = "#c9d5e0";
		document.getElementById("articleItem"+activeArticleIndex).style.color = "white";
		document.getElementById("articleItem"+activeArticleIndex).style.textShadow = "rgb(100,155,225) 0px 1px 3px";
	}
}

function loadNewsFile() {
	var newsStack = document.getElementById("newsSlider");
	newsStack.innerHTML = " ";
	for (var i=0; (i<generalNews.length); i++) {
		newsStack.innerHTML += '<div id="articleItem'+i+'" class="articleItem" onclick="setSelectedArticle('+i+')" ><table><tr><td id="contentItemCell">'+generalNews[i].title+'</td></tr></table></div>';
		if (i == 0) { document.getElementById("articleItem"+i).style.borderTop = " 0px solid rgb(255,255,255)"; }
		if (i == (generalNews.length-1)) { document.getElementById("articleItem"+i).style.borderBottom = " 0px solid rgb(255,255,255)"; }
	}
}


//This code is used for contact-form security.
var formKey = "";

function formKeyMaker() {
	var gliphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	formKey = "";

	for (var i=0; i<9; i++) {
		gliph = Math.random;
		formKey += gliphs.charAt(Math.floor(Math.random() * gliphs.length));;
	}
}

function validateForm() {

	var nameField = document.forms["contactForm"]["userName"].value;
	var formMail = document.forms["contactForm"]["userMail"].value;
	var subjectField = document.forms["contactForm"]["mailsubject"].value;
	var messageField = document.forms["contactForm"]["messagebody"].value;
	if ((nameField == "")||(subjectField == "")||(messageField == "")||(formMail == "")) {
		alert(formerror1);
		return false;
	}

	var atpos = formMail.indexOf("@");
	var dotpos = formMail.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=formMail.length) {
		alert(formerror2);
		return false;
	}

	var validationKeyCode = document.forms["contactForm"]["validateCode"].value;
	if (validationKeyCode != formKey) {
		alert(formerror3);
		return false;
	}
}


//This code updates the site's content on specific cube's faces.
function updateDynamicContent() {
	switch (currentFace) {
		case 0: //This face has the start content.
			document.getElementById("socialButtons").style.display = "block";

			addVideoListener();
			setupVideoHLs();
			setupGraphicNews();
			cycleVideoHL();
			break;
		case 1: //This face has the products/services detailed info.
			refItemIndex = 0;
			refProductIndex = 0;
			updateGallery();
			break;
		case 2: //This face has tehe news and media section.
			activeArticle = 0;
			new TWTR.Widget({id: "twitter_div",version: 2,type: "profile",rpp: 10,interval: 30000,width: 200,height: 215,theme: {shell: {background: "#c9d5e0",color: "#ffffff"},tweets: {background: "#ffffff",color: "#696969",links: "#5791d9"}},features: {scrollbar: true,loop: false,live: true,behavior: "all"}}).render().setUser("SoftSenseStudio").start();
			loadNewsFile();
			setSelectedArticle(articleIndex);

			break;
		case 3: //This face has the
			// There is no dynamic content in this section (not yet).
			break;
		case 4: //This face has the info for job oportunities.
			document.getElementById("progrjob").innerHTML = programmerJobsCall;
			document.getElementById("designjob").innerHTML = designerJobsCall;
			document.getElementById("gamerjob").innerHTML = gamerJobsCall;
			break;
		case 5: //This face has the contact form.
			formKeyMaker();
			document.getElementById("formKeyLbl").innerHTML = formKey;
			break;
		default:
			currentFace=0;
			updateDynamicContent();
	}
}
