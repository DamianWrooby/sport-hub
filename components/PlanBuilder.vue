<template>
	<div class="plan-builder-container">
		<h2 class="pb-2">Create a skeleton of the plan</h2>
		<plan-builder-macrocycle v-model="newMacrocycle.mesocyclesNumber" />
		<plan-builder-mesocycles
			:mesocyclesNumber="newMacrocycle.mesocyclesNumber"
			v-model="newMacrocycle.microcyclesPerMesocycle"
		/>
	</div>
</template>

<script>
import generateID from "~/mixins/generateID";
import PlanBuilderMacrocycle from "./PlanBuilderMacrocycle.vue";
import PlanBuilderMesocycles from "./PlanBuilderMesocycles.vue";

export default {
	components: {
		PlanBuilderMacrocycle,
		PlanBuilderMesocycles
	},

	mixins: [generateID],

	data() {
		return {
			newMacrocycle: {
				id: null,
				mesocyclesNumber: 1,
				microcyclesPerMesocycle: 1,
				description: "",
				mesocycles: [
					{
						id: null,
						description: ""
					}
				]
			}
		};
	}
};
</script>

<style>
.plan-builder-container {
	width: 90vw;
	position: relative;
	left: 55%;
	margin-left: -48vw;
}
</style>
