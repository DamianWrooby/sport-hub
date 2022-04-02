<template>
	<div class="border rounded rounded-3 py-4">
		<p>
			<span class="fw-bold">{{ unit.activity.toUpperCase() }}</span> on {{ convertedDate }}
		</p>
		<p>Duration: {{ unit.duration }} min</p>
		<p>Distance: {{ unit.distance }} m</p>
		<p>Intensity: {{ unit.intensity }} %</p>
		<p>Description: {{ unit.description }}</p>
	</div>
</template>

<script>
import convertDate from "../../mixins/convertDate";

export default {
	mixins: [convertDate],

	data() {
		return {
			id: Number(this.$route.params.id)
		};
	},

	computed: {
		unit() {
			return this.$store.getters.completedUnit(this.id);
		},

		convertedDate() {
			return this.convertToSimpleDate(this.unit.date);
		}
	}
};
</script>

<style></style>
