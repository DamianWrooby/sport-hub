export default {
	methods: {
		generateID(elements) {
			let id;
			do {
				id = Math.floor(Math.random() * 1000);
			} while (elements.find(el => el.id === id));
			return id;
		},
	}
};
