export const state = () => ({
	trainingUnits: [
		{
			id: 1,
			activity: "running",
			distance: 10,
			duration: 60,
			intensity: 70,
			date: "2021-09-24",
		},
		{
			id: 2,
			activity: "swimming",
			distance: 3,
			duration: 30,
			intensity: 50,
			date: "2021-09-24",
		},
	]
});


export const mutations = {
	addUnit (state, payload) {
        state.trainingUnits.push(payload);
    },

    removeUnit (state, id) {
        state.trainingUnits = state.trainingUnits.filter((el) => el.id !== id);
    },

    editUnit (state, payload) {
        let index = state.trainingUnits.findIndex((unit) => unit.id === payload.id);
		state.trainingUnits[index] = payload;
    }
};

export const getters = {
    getUnits: state => state.trainingUnits,
	getUnitById: (state) => (id) => state.trainingUnits.find(unit => unit.id === id), 
}