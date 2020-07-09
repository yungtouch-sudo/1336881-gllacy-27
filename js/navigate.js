var subopen = document.querySelector(".header-nav__link"),
	submenu = document.querySelector(".submenu");

subopen.addEventListener("click", function() {
	if(submenu.classList.contains("visually-hidden") === true) {
		submenu.classList.remove("visually-hidden");
	} else {
		submenu.classList.add("visually-hidden");
	};
}, false);
