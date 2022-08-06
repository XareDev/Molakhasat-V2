var s = true
if (s) {
	
	document.cookie = "hello=world; path=/"
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