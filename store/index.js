import Vue from "vue";
import axios from "axios";

export const state = () => ({
	savedUnits: [],
	scheduledUnits: [],
	isLoading: false
});

export const actions = {
	async fetchUnits({ commit }) {
		commit("FETCH_START");
		try {
			const res = await axios.get("/api/saved-units");
			const units = await res.data;
			commit("FETCH_END", units);
		} catch (err) {
			console.log(err);
		}
	},

	async addSavedUnit({ dispatch }, newUnit) {
		try {
			const res = await axios.post("/api/saved-unit", newUnit);
			const result = await res.data;
			console.log(result);
			dispatch("fetchUnits");
		} catch (err) {
			console.log(`Error message: ${err}`);
		}
	},

	async deleteSavedUnit({ dispatch }, id) {
		try {
			const res = await axios.delete(`/api/saved-units/${id}`);
			const result = await res.data;
			console.log(result);
			dispatch("fetchUnits");
		} catch (err) {
			console.log(`Error message: ${err}`);
		}
	}
};

export const mutations = {
	FETCH_START(state) {
		state.isLoading = true;
	},
	
	FETCH_END(state, units) {
		state.savedUnits = units;
		state.isLoading = false;
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
