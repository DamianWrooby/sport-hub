<template>
	<div class="d-flex flex-column justify-content-center">
		<span class="text-uppercase font-weight-bold day">{{ date.day }}</span>
		<div class="bottom-date">
			<span>{{ date.date }}.</span>
			<span class="text-uppercase">{{ date.month }}</span>
			<span>{{ date.year }}</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			date: this.getCurrentDate()
		};
	},

	methods: {
		getCurrentDate() {
			let local = new Date();
			const daysOfWeek = [
				"sunday",
				"monday",
				"tuesday",
				"wednesday",
				"thursday",
				"friday",
				"saturday"
			];
			const months = [
				"january",
				"february",
				"march",
				"april",
				"may",
				"june",
				"july",
				"august",
				"september",
				"october",
				"november",
				"december"
			];

			return {
				day: daysOfWeek[local.getDay()],
				date: local.getDate(),
				month: months[local.getMonth()],
				year: local.getFullYear()
			};
		}
	}
};
</script>

<style>
.day {
	font-size: 2rem;
}

.bottom-date {
	position: relative;
	top: -10px;
	font-size: 19px;
	color: rgb(163, 163, 163);
}
</style>
