<template>
	<div class="row py-4 mb-2 d-flex flex-row justify-content-between table-head">
		<div class="col" @click="onHeadingClick('activity')" :class="{'fw-bold': sortByInfo === 'activity'}">
			<span>Activity</span>
			<font-awesome-icon
				v-show="
					sortByInfo === 'activity'
				"
				:icon="icons.angleUp"
				:class="{down: sortByInfo === 'activity' && sortDirectionInfo === 'desc'}"
				class="arrow"
			/>
		</div>
		<div class="col" @click="onHeadingClick('distance')" :class="{'fw-bold': sortByInfo === 'distance'}">
			<span>Distance</span>
			<font-awesome-icon
				v-show="
					sortByInfo === 'distance'
				"
				:icon="icons.angleUp"
				:class="{down: sortByInfo === 'distance' && sortDirectionInfo === 'desc'}"
				class="arrow"
			/>
		</div>
		<div class="col" @click="onHeadingClick('duration')" :class="{'fw-bold': sortByInfo === 'duration'}">
			<span>Duration</span>
			<font-awesome-icon
				v-show="
					sortByInfo === 'duration'
				"
				:icon="icons.angleUp"
				:class="{down: sortByInfo === 'duration' && sortDirectionInfo === 'desc'}"
				class="arrow"
			/>
		</div>
		<div class="col" @click="onHeadingClick('intensity')" :class="{'fw-bold': sortByInfo === 'intensity'}">
			<span>Intensity</span>
			<font-awesome-icon
				v-show="
					sortByInfo === 'intensity'
				"
				:icon="icons.angleUp"
				:class="{down: sortByInfo === 'intensity' && sortDirectionInfo === 'desc'}"
				class="arrow"
			/>
		</div>
		<div class="col" @click="onHeadingClick('timestamp')" :class="{'fw-bold': sortByInfo === 'timestamp'}">
			<span>Date</span>
			<font-awesome-icon
				v-show="
					sortByInfo === 'timestamp'
				"
				:icon="icons.angleUp"
				:class="{down: sortByInfo === 'timestamp' && sortDirectionInfo === 'desc'}"
				class="arrow"
			/>
		</div>
		<div class="col"></div>
	</div>
</template>

<script>
import { icons } from "../assets/icons.js";

export default {
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

	computed: {
		sortByInfo() {
			return this.$store.getters.sortingInfo.sortBy;
		},

		sortDirectionInfo() {
			return this.$store.getters.sortingInfo.sortDirection;
		}
	}
};
</script>

<style>
.table-head div {
	position: relative;
	cursor: pointer;
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
