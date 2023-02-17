const VIEW = document.querySelector(".view");

const SIDEBAR = document.querySelector(".sidebar");
const SIDEBAR_BUTTON = document.querySelector(".sidebar__button");

SIDEBAR_BUTTON.addEventListener("click", () => {
	SIDEBAR.classList.toggle("expanded");
	SIDEBAR_BUTTON.classList.toggle("expanded");
});

const ADD_BLOCK_BUTTON = document.querySelector(".addBlock");
const ADD_BLOCK_MODAL = document.querySelector(".modal__addBlock");

const PARENT_WIDTH = document.querySelector("#parentWidth");
const PARENT_HEIGHT = document.querySelector("#parentHeight");
const PARENT_PADDING = document.querySelector("#parentPadding");

const SUBMIT_INPUTS = document.querySelector(".submitParentBlock");

ADD_BLOCK_BUTTON.addEventListener("click", () => {
	ADD_BLOCK_MODAL.classList.toggle("open");
});

SUBMIT_INPUTS.addEventListener("click", () => {
	const PARENT = document.createElement("div");
	PARENT.style.width = PARENT_WIDTH.value + "%";
	PARENT.style.height = PARENT_HEIGHT.value + "%";
	PARENT.style.padding = PARENT_PADDING.value + "px";
	PARENT.style.border = "10px solid #0065FF";

	VIEW.append(PARENT);
	ADD_BLOCK_MODAL.classList.toggle("open");
	ADD_BLOCK_BUTTON.classList.add("disabled");
});
