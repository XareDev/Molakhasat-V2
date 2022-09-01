window.onscroll = function(){scrollFunction()};

var nav_items = document.querySelectorAll(".nav_links li")

function scrollFunction() {
	var nav_items = document.querySelectorAll(".nav_links li a")
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  	// Scroll Down Condtion
    if(window.outerWidth <= 960) {
		document.querySelector("#table-of-content").style.top = "35px"
    	document.getElementById("logo").style.height = "24px";
    	document.querySelector(".cta button").style.fontSize = "10px"
	    document.getElementById("logo").style.width = "24px";
	    for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "10px"
			};
			}


 		else if(window.outerWidth > 960) {
            document.querySelector("#table-of-content").style.top = "85px"
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
		document.querySelector("#table-of-content").style.top = "43px"
    	document.getElementById("logo").style.height = "32px";
	    document.getElementById("logo").style.width = "32px";
		document.querySelector(".cta button").style.fontSize = "12px"
        
	    for (var i = 0 ; i < nav_items.length; i++) {
		   	nav_items[i].style.fontSize = "12px"
				};
			}

		else {
            document.querySelector("#table-of-content").style.top = "94px"
		  document.getElementById("logo").style.height = "64px";
		  document.getElementById("logo").style.width = "64px";
		  for (var i = 0 ; i < nav_items.length; i++) {
		 	nav_items[i].style.fontSize = "24px"
			};
		}

		 document.querySelector("header").style.position = "static";

  }
}