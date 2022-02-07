<template>
	<div class="pb-5">
		<div class="grid-container">
			<div class="labels"></div>
			<div class="label-mon" :class="{ 'current-head': dayOfWeek === 'monday' }">Monday</div>
			<div class="label-tue" :class="{ 'current-head': dayOfWeek === 'tuesday' }">Tuesday</div>
			<div class="label-wed" :class="{ 'current-head': dayOfWeek === 'wednesday' }">Wednesday</div>
			<div class="label-thu" :class="{ 'current-head': dayOfWeek === 'thursday' }">Thursday</div>
			<div class="label-fri" :class="{ 'current-head': dayOfWeek === 'friday' }">Friday</div>
			<div class="label-sat" :class="{ 'current-head': dayOfWeek === 'saturday' }">Saturday</div>
			<div class="label-sun" :class="{ 'current-head': dayOfWeek === 'sunday' }">Sunday</div>
			<div class="label-1">1</div>
			<div class="label-2">2</div>
			<div class="label-3">3</div>
			<div class="label-4">4</div>
			<div
				v-for="unit in scheduledUnits"
				:key="unit.dayID"
				class="day-cell"
				:class="[dayOfWeek.includes(unit.dayID.substr(0, 3)) ? 'current-cell' : '', unit.dayID]"
				title="Click to add"
			>
				<span>Activity: {{ unit.activity }}</span>
				<span>Distance: {{ unit.distance }}</span>
				<span>Duration: {{ unit.duration }}</span>
				<span>Intensity: {{ unit.intensity }}</span>
				<button class="edit-btn" @click="onEditClick(unit.dayID)" ><font-awesome-icon :size="'1x'" :icon="icons['edit']" /></button>
			</div>
		</div>
		<units-list-edit-form
			v-if="showEditForm"
			:unitToEdit="editedUnit"
			@backdropClicked="hideEditForm"
			@onSave="onEditFormSubmit($event)"
		/>
	</div>
</template>

<script>
import UnitsListEditForm from "../components/UnitsListEditForm.vue";
import { icons } from "../assets/icons.js";
import throwToast from "../mixins/throwToast";

export default {
	mixins: [throwToast],

	data() {
		return {
			dayOfWeek: this.getDayOfWeek(),
			showEditForm: false,
			editItemId: null,
			icons
		};
	},

	components: {
		UnitsListEditForm
	},

	computed: {
		scheduledUnits() {
			return this.$store.getters.scheduledUnits;
		},

		editedUnit() {
			return this.$store.getters.scheduledUnit(this.editItemId);
		}
	},

	methods: {
		getDayOfWeek() {
			let local = new Date();
			const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

			return daysOfWeek[local.getDay()];
		},

		onEditClick(id) {
			this.editItemId = id;
			this.showEditForm = true;
			document.querySelector("body").classList.add("modal-open");
		},

		hideEditForm() {
			this.showEditForm = false;
			document.querySelector("body").classList.remove("modal-open");
		},

		async onEditFormSubmit(editedUnit) {
			try {
				this.hideEditForm();
				const res = await this.$store.dispatch("editScheduledUnit", editedUnit);
				res
					? this.throwToast("success", "edited")
					: this.throwToast("danger", "edited");
				console.log(res);
				return true;
			} catch (err) {
				console.log(err);
				return false;
			}
		},
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
	position: relative;
	justify-self: start;
	align-self: start;
	text-align: left;
	padding: 10px 5px;
	font-size: 13px;
	border: 1px solid #ffffff6b;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
}

.day-cell:hover {
	background-color: rgba(255, 255, 255, 0.103);
}

.current-head {
	color: #9a88e4;
}

.current-cell {
	border: 1px solid #9a88e4;
}

.edit-btn {
	position: absolute;
	top: 2px;
	right: 2px;
	background-color: transparent;
	color: #fff;
	border: none;
	opacity: 0;
	transition: all 0.2s ease-in-out;
}

.day-cell:hover .edit-btn {
	opacity: 1;
}

.edit-btn:hover {
	color: rgb(126, 126, 126);
}
</style>
