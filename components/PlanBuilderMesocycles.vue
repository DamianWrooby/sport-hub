// TODO: zmienić klucz
<template>
	<div class="block mesocycles-block mt-2">
		<div class="row m-0 flex-nowrap">
			<plan-builder-mesocycle v-for="index in mesocyclesNumber" :key="index" :id="index" />
		</div>
	</div>
</template>

<script>
import PlanBuilderMesocycle from "./PlanBuilderMesocycle.vue";

export default {
	components: { PlanBuilderMesocycle },

	props: {
		value: Number,
		mesocyclesNumber: Number
	}
};
</script>

<style>
.mesocycle-block {
	background-color: rgb(199 77 35);
}

.control-block {
	background-color: rgb(199 77 35);
}

.control-col-sm {
	width: 40px;
}
</style>
