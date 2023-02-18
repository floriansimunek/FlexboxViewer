class App {
	constructor() {
		this.view = document.querySelector(".view");
		this.addParentBlock = document.querySelector(".addParentBlock");
		this.parentModal = document.querySelector(".modal__addParentBlock");
		this.parentWidth = document.querySelector("#parentWidth");
		this.parentHeight = document.querySelector("#parentHeight");
		this.parentPadding = document.querySelector("#parentPadding");
		this.submitParentParams = document.querySelector(".submitParentBlock");
		this.blocksList = document.querySelector(".blocksList");
	}

	init() {
		this.initParentModal();
		this.initChildsModal();
	}

	initParentModal() {
		this.addParentBlock.addEventListener("click", () => {
			this.parentModal.classList.toggle("open");
		});

		this.submitParentParams.addEventListener("click", () => {
			const parentBlock = new Element("div", [
				{ name: "class", value: "parentBlock" },
				{ name: "data-name", value: "Parent" },
				{
					name: "style",
					value: `width: ${this.parentWidth.value}%; height: ${this.parentHeight.value}%; padding: ${this.parentPadding.value}px;`,
				},
			]);
			this.view.append(parentBlock);

			const optionParentBlock = new Element("div", [
				{ name: "class", value: "optionParentBlock options" },
			]);
			const optionText = new Element(
				"p",
				[],
				[{ name: "textContent", value: parentBlock.dataset.name }],
			);
			optionParentBlock.append(optionText);
			this.blocksList.append(optionParentBlock);

			this.parentModal.classList.toggle("open");
			this.addParentBlock.classList.add("disabled");
		});
	}

	initChildsModal() {}
}

const app = new App();
app.init();
