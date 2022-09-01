var Permission_asked = false

function Loading_off(){
	var loader = document.getElementById("loading");
	loader.style.display ="none";
   document.querySelector("body").style.overflow = "visible"

   var notification_status = Notification.permission
	if (notification_status == "granted" || notification_status == "denined") {
		document.querySelector("#Notification-popup").style.display = "none"
		document.querySelector(".pop-up").style.display = "none"
	} else {

	}
}

window.addEventListener("load", Loading_off)

window.onscroll = function(){scrollFunction()};

var nav_items = document.querySelectorAll(".nav_links li")

function scrollFunction() {
	var nav_items = document.querySelectorAll(".nav_links li a")
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  	// Scroll Down Condtion
    if(window.outerWidth <= 960) {
    	document.getElementById("logo").style.height = "24px";
    	document.querySelector(".cta button").style.fontSize = "10px"
	    document.getElementById("logo").style.width = "24px";
	    for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "10px"
			};
			}


 		else if(window.outerWidth > 960) {
 			document.getElementById("logo").style.height = "56px";
	  	document.getElementById("logo").style.width = "56px";
	  	for (var i = 0 ; i < nav_items.length; i++) {
	   			nav_items[i].style.fontSize = "18px"
	   		};
 		}

 		 document.querySelector("header").style.position = "fixed";

  } 

  else {
  	// Scroll up condition
    if(window.outerWidth <= 960) {
		document.getElementById("logo").style.height = "24px";
		document.getElementById("logo").style.width = "24px";
		document.querySelector(".cta button").style.fontSize = "10px"
		for (var i = 0 ; i < nav_items.length; i++) {
				nav_items[i].style.fontSize = "9px"
				};
			}
			
	else {
		document.getElementById("logo").style.height = "64px";
		document.getElementById("logo").style.width = "64px";
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
			let notify = await Notification.requestPermission()
			console.log(notify)
			granted = notify === 'granted'

			if (granted) {
				subscribeUserToPush()
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


function subscribeUserToPush() {
	navigator.serviceWorker.register('service-worker.js').then(
  function(serviceWorkerRegistration) {
  	serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey:
        'BIqFbK6le-lpXtluPacwdtg27410gloxurzpuQyPKTQi4tJgltNWY1VeBNrsPBTsgtcLcy9olkEtlS2vj6HWuFw'
 }).then(
      function(pushSubscription) {
        console.log(pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      }, function(error) {
        // During development it often helps to log errors to the
        // console. In a production environment it might make sense to
        // also report information about errors back to the
        // application server.
        console.log(error);
      }
    );
  });
}

if ( Notification.permission === 'granted') {
  navigator.serviceWorker.ready.then(function(registration) {
    registration.showNotification('شكرا لإشتراككم في خدمة الإشعارات', {
      body: 'نتمنى لكم تجربة ممتعة في موقع ملخصات',
      icon: 'logo.png',
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      tag: 'New-Molakhasat'
    });
  });
}
