import Cookies from '/js.cookie.mjs'
if (window.Permission_asked) {
	
	Cookies.set('Notification_Permission', window.notify)

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