/* SIDEBAR */
const SIDEBAR = document.querySelector(".sidebar");
const SIDEBAR_BUTTON = document.querySelector(".sidebar__button");

SIDEBAR_BUTTON.addEventListener("click", () => {
	SIDEBAR.classList.toggle("expanded");
	SIDEBAR_BUTTON.classList.toggle("expanded");
});
