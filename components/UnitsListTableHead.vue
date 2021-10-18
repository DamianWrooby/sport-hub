<template>
	<div class="row py-4 mb-2 d-flex flex-row justify-content-between table-head">
		<div class="col" @click="onHeadingClick('activity')" :class="{'fw-bold': sortBy === 'activity'}">
			<span>Activity</span>
			<font-awesome-icon
				v-show="
					sortBy === 'activity'
				"
				:icon="icons.angleUp"
				:class="{down: sortBy === 'activity' && sortDirection === 'desc'}"
				class="arrow"
			/>
		</div>
		<div class="col" @click="onHeadingClick('distance')" :class="{'fw-bold': sortBy === 'distance'}">
			<span>Distance</span>
			<font-awesome-icon
				v-show="
					sortBy === 'distance'
				"
				:icon="icons.angleUp"
				:class="{down: sortBy === 'distance' && sortDirection === 'desc'}"
				class="arrow"
			/>
		</div>
		<div class="col" @click="onHeadingClick('duration')" :class="{'fw-bold': sortBy === 'duration'}">
			<span>Duration</span>
			<font-awesome-icon
				v-show="
					sortBy === 'duration'
				"
				:icon="icons.angleUp"
				:class="{down: sortBy === 'duration' && sortDirection === 'desc'}"
				class="arrow"
			/>
		</div>
		<div class="col" @click="onHeadingClick('intensity')" :class="{'fw-bold': sortBy === 'intensity'}">
			<span>Intensity</span>
			<font-awesome-icon
				v-show="
					sortBy === 'intensity'
				"
				:icon="icons.angleUp"
				:class="{down: sortBy === 'intensity' && sortDirection === 'desc'}"
				class="arrow"
			/>
		</div>
		<div class="col" @click="onHeadingClick('timestamp')" :class="{'fw-bold': sortBy === 'timestamp'}">
			<span>Date</span>
			<font-awesome-icon
				v-show="
					sortBy === 'timestamp'
				"
				:icon="icons.angleUp"
				:class="{down: sortBy === 'timestamp' && sortDirection === 'desc'}"
				class="arrow"
			/>
		</div>
		<div class="col"></div>
	</div>
</template>

<script>
import { icons } from "../assets/icons.js";

export default {
	props: {
		sortBy: String,
		sortDirection: String
	},

	data() {
		return {
			icons
		};
	},

	methods: {
		onHeadingClick(sortKey) {
			this.$emit("setSorting", sortKey);
		}
	},
};
</script>

<style>
.table-head div {
	position: relative;
	cursor: pointer;
	white-space: nowrap;
}

.arrow {
	transition: all .2s ease-in-out;
}

.down {
	transform: rotate(180deg);
}

.fw-bold {
	font-weight: 900;
}

</style>
