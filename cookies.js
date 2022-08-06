import Cookies from '/js.cookie.mjs'
var s = true
if (s) {
	
	document.cookie = "hello=world;"
	console.log(document.cookie)

}

window.addEventListener("load", function() {
	var notification_status = Cookies.get("Notification_Permission")
	if (notification_status == "granted" || notification_status == "denined") {
		console.log("done")
		closePopUps()
	} else {
		//body
	}
})