export const state = () => ({
	trainingUnits: [
		{
			id: 1,
			activity: "running",
			distance: 10,
			duration: 60,
			intensity: 70,
			date: "2021-09-24",
			timestamp: 1632434400000
		},
		{
			id: 2,
			activity: "swimming",
			distance: 3,
			duration: 30,
			intensity: 50,
			date: "2021-09-24",
			timestamp: 1632434410000
		}
	],
	sortBy: "timestamp",
	sortDirection: "asc"
});

export const mutations = {
	addUnit(state, payload) {
		let dateArr = payload.date.split('-');
		let timestamp = new Date(Number(dateArr[0]), Number(dateArr[1]) - 1, Number(dateArr[2]), 0, 0 ,0).getTime();
		state.trainingUnits.push({...payload, timestamp });
	},

	removeUnit(state, id) {
		state.trainingUnits = state.trainingUnits.filter(el => el.id !== id);
	},

	editUnit(state, payload) {
		let index = state.trainingUnits.findIndex(unit => unit.id === payload.id);
		state.trainingUnits[index] = payload;
	},

	setSorting(state, sortKey) {
		if (state.sortBy === sortKey) {
			state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
		} else {
			state.sortBy = sortKey;
			state.sortDirection = "asc";
		}
	}
};

export const getters = {
	getUnits: state => state.trainingUnits,

	getUnitById: state => id => [...state.trainingUnits].find(unit => unit.id === id),

	getSortedUnits: state => {
		const compareFn = (a, b) =>  (a[state.sortBy] > b[state.sortBy]) ? 1 : ((a[state.sortBy] < b[state.sortBy]) ? -1 : 0);
		const units = [...state.trainingUnits].sort(compareFn);

		if (state.sortDirection === "desc") {
			units.reverse();
		}
		
		return units;
	},

	getSortingInfo: state => ({
		sortBy: state.sortBy,
		sortDirection: state.sortDirection
	}),
};
