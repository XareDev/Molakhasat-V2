var p = Notification.permission
if (p) {
	
	document.cookie = "permission="+ p+"; path=/"
	console.log(document.cookie)

}

window.addEventListener("load", function() {
	var notification_status = document.cookie.split(";")[2].split("=")[1]
	if (notification_status == "granted" || notification_status == "denined") {
		console.log("done")
		closePopUps()
	} else {
		//body
	}
})