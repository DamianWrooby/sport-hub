import Vue from "vue";

export const state = () => ({
	savedUnits: [
		{
			id: 1,
			activity: "running",
			distance: 10,
			duration: 60,
			intensity: 70,
			description: "",
			date: "2021-09-24",
			timestamp: 1632434400000
		},
		{
			id: 2,
			activity: "swimming",
			distance: 3,
			duration: 30,
			intensity: 50,
			description: "",
			date: "2021-09-24",
			timestamp: 1632434410000
		}
	],
	scheduledUnits: [
		{
			dayID: "mon-1",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "tue-1",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "wed-1",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "thu-1",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "fri-1",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "sat-1",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "sun-1",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "mon-2",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "tue-2",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "wed-2",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "thu-2",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "fri-2",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "sat-2",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "sun-2",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "mon-3",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "tue-3",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "wed-3",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "thu-3",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "fri-3",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "sat-3",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "sun-3",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "mon-4",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "tue-4",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "wed-4",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "thu-4",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "fri-4",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "sat-4",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		},
		{
			dayID: "sun-4",
			activity: "running",
			distance: 5,
			duration: 40,
			intensity: 60,
			description: ""
		}
	]
});

export const mutations = {
	addUnit(state, payload) {
		let dateArr = payload.date.split("-");
		let timestamp = new Date(
			Number(dateArr[0]),
			Number(dateArr[1]) - 1,
			Number(dateArr[2]),
			0,
			0,
			0
		).getTime();
		state.savedUnits.push({ ...payload, timestamp });
	},

	removeUnit(state, id) {
		state.savedUnits = state.savedUnits.filter(el => el.id !== id);
	},

	editUnit(state, payload) {
		let index = state.savedUnits.findIndex(unit => unit.id === payload.id);
		Vue.set(state.savedUnits, index, payload);
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
	savedUnits: state => state.savedUnits,

	savedUnit: state => id => [...state.savedUnits].find(unit => unit.id === id),

	sortedSavedUnits: state => (sortBy, sortDirection) => {
		const compareFn = (a, b) =>
			a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0;
		const units = [...state.savedUnits].sort(compareFn);

		if (sortDirection === "desc") {
			units.reverse();
		}

		return units;
	},

	scheduledUnits: state => state.scheduledUnits,

	scheduledUnit: state => dayID =>
		[...state.scheduledUnits].find(unit => unit.dayID === dayID)
};
