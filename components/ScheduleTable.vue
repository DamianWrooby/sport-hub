<template>
	<div>
		<div class="grid-container">
			<div class="labels"></div>
			<div class="label-mon" :class="{'current': dayOfWeek === 'monday'}">Monday</div>
			<div class="label-tue" :class="{'current': dayOfWeek === 'tuesday'}">Tuesday</div>
			<div class="label-wed" :class="{'current': dayOfWeek === 'wednesday'}">Wednesday</div>
			<div class="label-thu" :class="{'current': dayOfWeek === 'thursday'}">Thursday</div>
			<div class="label-fri" :class="{'current': dayOfWeek === 'friday'}">Friday</div>
			<div class="label-sat" :class="{'current': dayOfWeek === 'saturday'}">Saturday</div>
			<div class="label-sun" :class="{'current': dayOfWeek === 'sunday'}">Sunday</div>
			<div class="label-1">1</div>
			<div class="label-2">2</div>
			<div class="label-3">3</div>
			<div class="label-4">4</div>
			<div class="mon-1 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="tue-1 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="wed-1 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="thu-1 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="fri-1 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="sat-1 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="sun-1 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="mon-2 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="tue-2 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="wed-2 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="thu-2 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="fri-2 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="sat-2 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="sun-2 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="mon-3 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="tue-3 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="wed-3 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="thu-3 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="fri-3 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="sat-3 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="sun-3 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="mon-4 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="tue-4 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="wed-4 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="thu-4 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="fri-4 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="sat-4 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
			<div class="sun-4 day-cell">
				<span>Activity: running</span>
				<span>Distance: 1000</span>
				<span>Duration: 60</span>
				<span>Intensity: 50</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dayOfWeek: this.getDayOfWeek(),
		}
	},

	methods: {
		getDayOfWeek() {
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

			return daysOfWeek[local.getDay()];
		}
	}
};
</script>

<style>
.grid-container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
	gap: 0px 0px;
	grid-auto-flow: row;
	grid-template-areas:
		"labels label-mon label-tue label-wed label-thu label-fri label-sat label-sun"
		"label-1 mon-1 tue-1 wed-1 thu-1 fri-1 sat-1 sun-1"
		"label-2 mon-2 tue-2 wed-2 thu-2 fri-2 sat-2 sun-2"
		"label-3 mon-3 tue-3 wed-3 thu-3 fri-3 sat-3 sun-3"
		"label-4 mon-4 tue-4 wed-4 thu-4 fri-4 sat-4 sun-4";
}

.labels {
	grid-area: labels;
}

.label-1 {
	grid-area: label-1;
}

.label-2 {
	grid-area: label-2;
}

.label-3 {
	grid-area: label-3;
}

.label-4 {
	grid-area: label-4;
}

.label-1,
.label-2,
.label-3,
.label-4,
.label-mon,
.label-tue,
.label-wed,
.label-thu,
.label-fri,
.label-sat,
.label-sun {
	justify-self: center;
	align-self: center;
}

.day-cell {
	justify-self: start;
	align-self: start;
	text-align: left;
	padding: 10px 5px;
	font-size: 13px;
	border: 1px solid #ffffff6b;
}

.current {
	color: #9a88e4;
}
</style>
