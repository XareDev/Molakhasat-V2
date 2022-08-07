var Permission_asked = false

function Loading_off(){
	var loader = document.getElementById("loading");
	loader.style.display ="none";
   document.querySelector("body").style.overflow = "visible"
}


window.addEventListener("load", Loading_off)
window.addEventListener("load", console.log(document.cookie))

window.onscroll = function() {scrollFunction()};

var nav_items = document.getElementsByClassName("nav_items")

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  	// Scroll Down Condtion
    if(window.outerWidth <= 960) {
    	document.getElementById("logo").style.height = "32px";
	    document.getElementById("logo").style.width = "32px";
	    for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "16px"
			};
			}


 		else if(window.outerWidth > 960) {
 			document.getElementById("logo").style.height = "64px";
	  	document.getElementById("logo").style.width = "64px";
	  	for (var i = 0 ; i < nav_items.length; i++) {
	   			nav_items[i].style.fontSize = "18px"
	   		};
 		}

 		 document.querySelector("header").style.position = "fixed";

  } 

  else {
  	// Scroll up condition
    if(window.outerWidth <= 960) {
    	document.getElementById("logo").style.height = "32px";
	    document.getElementById("logo").style.width = "32px";
	    for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "22px"
				};
			}

		else {
		  document.getElementById("logo").style.height = "80px";
		  document.getElementById("logo").style.width = "80px";
		  for (var i = 0 ; i < nav_items.length; i++) {
		 	nav_items[i].style.fontSize = "24px"
			};
		}

		 document.querySelector("header").style.position = "static";

  }
}

function hide_Notification_PopUp() {
	var popupbody = document.querySelector("#Notification-popup")
	popupbody.style.animationPlayState = "running"
	 setTimeout(function() {
	 	popupbody.style.display = "none"
	 }, 500); 
}

function hide_Success_PopUp() {
	var popupbody = document.querySelector("#success-popup")
	popupbody.style.animationPlayState = "running"
	 setTimeout(function() {
	 	popupbody.style.display = "none"
	 }, 500); 
}

function hidePopUp() {
	var popup = document.querySelector(".pop-up")
	popup.style.display = "none"
}

function closePopUps() {
	hide_Success_PopUp()
	hide_Notification_PopUp()
	setTimeout(hidePopUp, 500)
}


async function Permission() {

			var granted = false
			var notify = await Notification.requestPermission()
			console.log(notify)
			Permission_asked = true
			granted = notify === 'granted'

			if (granted) {
				hide_Notification_PopUp();

				setTimeout(showSuccess, 750);
			} else {
				closePopUps();
			}

		}

		function showSuccess() {
			var success = document.querySelector("#success-popup")
			success.style.display = "flex"

		}
