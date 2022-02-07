import Vue from "vue";
import { SavedUnitsService } from "../api/api.service";

export const state = () => ({
	savedUnits: [],
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
	],
	isLoading: false
});

export const actions = {
	async fetchSavedUnits({ commit }) {
		commit("FETCH_START");
		try {
			const res = await SavedUnitsService.get();
			const units = await res.data;
			commit("FETCH_END", units);
		} catch (err) {
			console.log(err);
		}
	},

	async addSavedUnit({ dispatch }, newUnit) {
		const dateArr = newUnit.date.split("-");
		const timestamp = new Date(Number(dateArr[0]), Number(dateArr[1]) - 1, Number(dateArr[2]), 0, 0, 0).getTime();
		const timestampString = timestamp.toString();
		try {
			const res = await SavedUnitsService.create({ ...newUnit, "timestamp": timestampString });
			const result = await res.data;
			console.log(result);
			dispatch("fetchSavedUnits");
			return true;
		} catch (err) {
			console.log(`Error message: ${err}`);
			return false;
		}
	},

	async deleteSavedUnit({ dispatch }, id) {
		try {
			const res = await SavedUnitsService.destroy(id);
			const result = await res.data;
			console.log(result);
			dispatch("fetchSavedUnits");
			return true;
		} catch (err) {
			console.log(`Error message: ${err}`);
			return false;
		}
	},

	async editSavedUnit({ dispatch }, payload) {
		try {
			const res = await SavedUnitsService.update(payload.id, payload);
			const result = await res.data;
			console.log(result);
			// Prisma is here returning added object or page html in case of wrong api route
			dispatch("fetchSavedUnits");
			return true;
		} catch (err) {
			console.log(`Error message: ${err}`);
			return false;
		}
	},
	
	async editScheduledUnit({ commit }, payload) {
		try {
			commit("EDIT_SCHEDULED_UNIT", payload);
			return payload;
		} catch (err) {
			console.log(`Error message: ${err}`);
			return false;
		}
	},
};

export const mutations = {
	FETCH_START(state) {
		state.isLoading = true;
	},

	FETCH_END(state, units) {
		let {timestamp, ...y} = units;
		const mappedUnits = units.map(unit => { 
			const { timestamp, ...mappedUnit } = unit;
			return ({
				...mappedUnit, "timestamp": parseInt(unit.timestamp, 10)
			});
			});
		state.savedUnits = units;
		state.isLoading = false;
	},

	EDIT_SCHEDULED_UNIT(state, payload) {
		let index = state.scheduledUnits.findIndex(unit => unit.dayID === payload.dayID);
		Vue.set(state.scheduledUnits, index, payload);
	}
};

export const getters = {
	savedUnits: state => state.savedUnits,

	savedUnit: state => id => [...state.savedUnits].find(unit => unit.id === id),

	sortedSavedUnits: state => (sortBy, sortDirection) => {
		const compareFn = (a, b) => (a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0);
		const units = [...state.savedUnits].sort(compareFn);

		if (sortDirection === "desc") {
			units.reverse();
		}

		return units;
	},

	scheduledUnits: state => state.scheduledUnits,

	scheduledUnit: state => dayID => [...state.scheduledUnits].find(unit => unit.dayID === dayID)
};
