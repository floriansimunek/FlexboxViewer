class Element {
	constructor(type, attributes, properties) {
		this.type = type;
		this.attributes = attributes;
		this.properties = properties;
		return this.init();
	}

	init() {
		const element = document.createElement(this.type);

		if (this.attributes) {
			this.attributes.forEach((attribute) => {
				element.setAttribute(attribute.name, attribute.value);
			});
		}

		if (this.properties) {
			this.properties.forEach((property) => {
				element[property.name] = property.value;
			});
		}

		return element;
	}
}
