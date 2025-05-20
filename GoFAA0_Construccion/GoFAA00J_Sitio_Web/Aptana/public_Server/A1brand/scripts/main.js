/*
This file contain the scripts for trnaslating and localizing
the site's content to match the selection of the user.

Copyright ©2015-2016. Juan Camilo Torres Cedano
Creative Commons 3.0 BY-SA.
*/

preloadImages = new Array();
	preloadImages[0]="/brand/resources/images/CTDi_nlogo_sq.png";
	preloadImages[1]="/brand/resources/images/CTDi_nlogo_HD.png";
	/*Initially we load up the images for the animation and transition effects
	preloadImages[0]="../Images/cubeAnimation/cubeBase.png";
	preloadImages[1]="../Images/cubeAnimation/do1.png";
	preloadImages[2]="../Images/cubeAnimation/do2.png";
	preloadImages[3]="../Images/cubeAnimation/do3.png";
	preloadImages[4]="../Images/cubeAnimation/do4.png";
	preloadImages[5]="../Images/cubeAnimation/do5.png";
	preloadImages[6]="../Images/cubeAnimation/do6.png";
	preloadImages[7]="../Images/cubeAnimation/do7.png";
	preloadImages[8]="../Images/cubeAnimation/do8.png";
	preloadImages[9]="../Images/cubeAnimation/do9.png";
	preloadImages[10]="../Images/cubeAnimation/do10.png";
	preloadImages[11]="../Images/cubeAnimation/do11.png";
	preloadImages[12]="../Images/cubeAnimation/do12.png";
	preloadImages[13]="../Images/cubeAnimation/do13.png";
	preloadImages[14]="../Images/cubeAnimation/do14.png";
	preloadImages[15]="../Images/cubeAnimation/do15.png";
	preloadImages[16]="../Images/cubeAnimation/do16.png";
	preloadImages[17]="../Images/cubeAnimation/do17.png";
	preloadImages[18]="../Images/cubeAnimation/do18.png";
	preloadImages[19]="../Images/cubeAnimation/do19.png";
	preloadImages[20]="../Images/cubeAnimation/do20.png";
	preloadImages[21]="../Images/cubeAnimation/do21.png";
	preloadImages[22]="../Images/cubeAnimation/do22.png";
	preloadImages[23]="../Images/cubeAnimation/do23.png";
	preloadImages[24]="../Images/cubeAnimation/do24.png";
	preloadImages[25]="../Images/cubeAnimation/ri1.png";
	preloadImages[26]="../Images/cubeAnimation/ri2.png";
	preloadImages[27]="../Images/cubeAnimation/ri3.png";
	preloadImages[28]="../Images/cubeAnimation/ri4.png";
	preloadImages[29]="../Images/cubeAnimation/ri5.png";
	preloadImages[30]="../Images/cubeAnimation/ri6.png";
	preloadImages[31]="../Images/cubeAnimation/ri7.png";
	preloadImages[32]="../Images/cubeAnimation/ri8.png";
	preloadImages[33]="../Images/cubeAnimation/ri9.png";
	preloadImages[34]="../Images/cubeAnimation/ri10.png";
	preloadImages[35]="../Images/cubeAnimation/ri11.png";
	preloadImages[36]="../Images/cubeAnimation/ri12.png";
	preloadImages[37]="../Images/cubeAnimation/ri13.png";
	preloadImages[38]="../Images/cubeAnimation/ri14.png";
	preloadImages[39]="../Images/cubeAnimation/ri15.png";
	preloadImages[40]="../Images/cubeAnimation/ri16.png";
	preloadImages[41]="../Images/cubeAnimation/ri17.png";
	preloadImages[42]="../Images/cubeAnimation/ri18.png";
	preloadImages[43]="../Images/cubeAnimation/ri19.png";
	preloadImages[44]="../Images/cubeAnimation/ri20.png";
	preloadImages[45]="../Images/cubeAnimation/ri21.png";
	preloadImages[46]="../Images/cubeAnimation/ri22.png";
	preloadImages[47]="../Images/cubeAnimation/ri23.png";
	preloadImages[48]="../Images/cubeAnimation/ri24.png";
	preloadImages[49]="../Images/cubeAnimation/up1.png";
	preloadImages[50]="../Images/cubeAnimation/up2.png";
	preloadImages[51]="../Images/cubeAnimation/up3.png";
	preloadImages[52]="../Images/cubeAnimation/up4.png";
	preloadImages[53]="../Images/cubeAnimation/up5.png";
	preloadImages[54]="../Images/cubeAnimation/up6.png";
	preloadImages[55]="../Images/cubeAnimation/up7.png";
	preloadImages[56]="../Images/cubeAnimation/up8.png";
	preloadImages[57]="../Images/cubeAnimation/up9.png";
	preloadImages[58]="../Images/cubeAnimation/up10.png";
	preloadImages[59]="../Images/cubeAnimation/up11.png";
	preloadImages[60]="../Images/cubeAnimation/up12.png";
	preloadImages[61]="../Images/cubeAnimation/up13.png";
	preloadImages[62]="../Images/cubeAnimation/up14.png";
	preloadImages[63]="../Images/cubeAnimation/up15.png";
	preloadImages[64]="../Images/cubeAnimation/up16.png";
	preloadImages[65]="../Images/cubeAnimation/up17.png";
	preloadImages[66]="../Images/cubeAnimation/up18.png";
	preloadImages[67]="../Images/cubeAnimation/up19.png";
	preloadImages[68]="../Images/cubeAnimation/up20.png";
	preloadImages[69]="../Images/cubeAnimation/up21.png";
	preloadImages[70]="../Images/cubeAnimation/up22.png";
	preloadImages[71]="../Images/cubeAnimation/up23.png";
	preloadImages[72]="../Images/cubeAnimation/up24.png";
	preloadImages[73]="../Images/cubeAnimation/le1.png";
	preloadImages[74]="../Images/cubeAnimation/le2.png";
	preloadImages[75]="../Images/cubeAnimation/le3.png";
	preloadImages[76]="../Images/cubeAnimation/le4.png";
	preloadImages[77]="../Images/cubeAnimation/le5.png";
	preloadImages[78]="../Images/cubeAnimation/le6.png";
	preloadImages[79]="../Images/cubeAnimation/le7.png";
	preloadImages[80]="../Images/cubeAnimation/le8.png";
	preloadImages[81]="../Images/cubeAnimation/le9.png";
	preloadImages[82]="../Images/cubeAnimation/le10.png";
	preloadImages[83]="../Images/cubeAnimation/le11.png";
	preloadImages[84]="../Images/cubeAnimation/le12.png";
	preloadImages[85]="../Images/cubeAnimation/le13.png";
	preloadImages[86]="../Images/cubeAnimation/le14.png";
	preloadImages[87]="../Images/cubeAnimation/le15.png";
	preloadImages[88]="../Images/cubeAnimation/le16.png";
	preloadImages[89]="../Images/cubeAnimation/le17.png";
	preloadImages[90]="../Images/cubeAnimation/le18.png";
	preloadImages[91]="../Images/cubeAnimation/le19.png";
	preloadImages[92]="../Images/cubeAnimation/le20.png";
	preloadImages[93]="../Images/cubeAnimation/le21.png";
	preloadImages[94]="../Images/cubeAnimation/le22.png";
	preloadImages[95]="../Images/cubeAnimation/le23.png";
	preloadImages[96]="../Images/cubeAnimation/le24.png";*/

	//Now we load up the images needed for the background(s)
	preloadImages[97]="../senses_theme/images/background.png";
	preloadImages[98]="images/bg0.png";
	preloadImages[99]="images/bg1.png";
	preloadImages[100]="images/bg2.png";
	preloadImages[101]="images/bg3.png";
	preloadImages[102]="images/bg4.png";
	preloadImages[103]="images/bg5.png";
	preloadImages[104]="images/cubeHelp.png";

var imgIndex=0;


function setupAnimCube() {
	var cubeAnim = document.getElementById("cubeAnim");
	cubeAnim.style.height = "0px";
	cubeAnim.style.opacity = 0.0;  /* support for Safari, Opera, Chrome and FireFox */
    cubeAnim.style.filter = "alpha(opacity=" + 0 + ")";    /* support for IE 4, 5, 6 and 7 */
    cubeAnim.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + 0 + ")"; /* support for IE 8 */
	cubeAnim.style.background = "url('../Images/cubeAnimation/cubeBase.png') no-repeat top center";
}

function imgLoadComplete() {
	imgIndex++;
	if (imgIndex <= (preloadImages.length)) {
		loadImages();
	}
}

function loadImages(){
	/* This code cycle through the array to load up the large images specified by the webmaster.
	 * Other images not included in the array should be small and might not need pre-load.
	 */
	var loadingImg = new Image();
	if (imgIndex<(preloadImages.length)) {
		loadingImg.src = preloadImages[imgIndex];
		loadingImg.onload = imgLoadComplete();
	}
	if (imgIndex==(preloadImages.length)) {
		return;
	}
}

function startupLoad() {
	loadImages();
	setupContent();
	setupAnimCube();

	//aditional code at startup
	setFaceContent(currentFace);
	updateDynamicContent();
}



function fadeoutOverlay() {
    document.getElementById('helpPanel').style.opacity = 0;  /* support for Safari, Opera, Chrome and FireFox */
    document.getElementById('helpPanel').style.filter = "alpha(opacity=" + 0 + ")";    /* support for IE 4, 5, 6 and 7 */
    document.getElementById('helpPanel').style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + 0 + ")"; /* support for IE 8 */

    document.getElementById('fadeLayer').style.opacity = 0;  /* support for Safari, Opera, Chrome and FireFox */
    document.getElementById('fadeLayer').style.filter = "alpha(opacity=" + 0 + ")";    /* support for IE 4, 5, 6 and 7 */
    document.getElementById('fadeLayer').style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + 0 + ")"; /* support for IE 8 */

    document.getElementById('fadeLayer').style.display='none';
    document.getElementById('helpPanel').style.display='none';
}

function fadeinOverlay() {
    document.getElementById('helpPanel').style.display='block';
    document.getElementById('fadeLayer').style.display='block';

    document.getElementById('helpPanel').style.opacity = 1;  /* support for Safari, Opera, Chrome and FireFox */
    document.getElementById('helpPanel').style.filter = "alpha(opacity=" + 100 + ")";    /* support for IE 4, 5, 6 and 7 */
    document.getElementById('helpPanel').style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 + ")"; /* support for IE 8 */

    document.getElementById('fadeLayer').style.opacity = 0.32;  /* support for Safari, Opera, Chrome and FireFox */
    document.getElementById('fadeLayer').style.filter = "alpha(opacity=" + 32 + ")";    /* support for IE 4, 5, 6 and 7 */
    document.getElementById('fadeLayer').style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + 32 + ")"; /* support for IE 8 */
}


window.onload = function() {
   ((window.devicePixelRatio > 1)? document.body.className = "hidpi" : null);
};


/* the following code has been created using assistance from DeepSeek's R1 AI model.
            It is being used as reference for the creation of the proprietary styling code. */
  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.innerHTML = navLinks.classList.contains('active') ?
          '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          if(this.getAttribute('href') === '#') return;

          const target = document.querySelector(this.getAttribute('href'));
          if(target) {
              window.scrollTo({
                  top: target.offsetTop - 80,
                  behavior: 'smooth'
              });

              // Close mobile menu if open
              if(navLinks.classList.contains('active')) {
                  navLinks.classList.remove('active');
                  menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
              }
          }
      });
  });

  // Form submission
  function validateForm() {
//  const contactForm = document.getElementById('contactForm');
//  if(contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          submit();
          this.reset();
      });
  }

  // Add scroll animation for sections
  window.addEventListener('scroll', revealSections);

  function revealSections() {
      const sections = document.querySelectorAll('.section');
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          if(sectionTop < windowHeight - revealPoint) {
              section.style.opacity = '1';
              section.style.transform = 'translateY(0)';
          }
      });
  }

  // Initialize sections with hidden state
  document.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
          section.style.opacity = '0';
          section.style.transform = 'translateY(50px)';
          section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      });

      // Show first section immediately
      if(sections.length > 0) {
          sections[0].style.opacity = '1';
          sections[0].style.transform = 'translateY(0)';
      }
  });
