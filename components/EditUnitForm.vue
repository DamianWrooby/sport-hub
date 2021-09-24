<template>
	<div id="edit-form-container">
		<form
			id="edit-form"
			class="border px-3 py-5 rounded rounded-3 text-center col-md-9 mx-auto"
			@submit.prevent="onEditFormSubmit"
		>
			<div class="mb-3 text-left col-9 mx-auto">
				<label for="activity">Activity:</label>
				<select
					class="form-select"
					aria-label="Activity type select"
					id="activity"
					v-model="editedUnit.activity"
				>
					<option value="running">Running</option>
					<option value="cycling">Cycling</option>
					<option value="swimming">Swimming</option>
					<option value="walking">Walking</option>
					<option value="hiking">Hiking</option>
					<option value="gym">Gym</option>
				</select>
			</div>
			<div class="mb-3 text-left col-9 mx-auto">
				<label for="distance">Distance:</label>
				<input
					type="number"
					class="form-control-sm"
					name="distance"
					id="distance"
					v-model="editedUnit.distance"
					required
				/>
				metres
			</div>
			<div class="mb-3 text-left col-9 mx-auto">
				<label for="duration">Duration:</label>
				<input
					type="number"
					class="form-control-sm"
					name="duration"
					id="duration"
					v-model="editedUnit.duration"
					required
				/>
				minutes
			</div>
			<div class="mb-3 text-left col-9 mx-auto">
				<label for="intensity">Intensity:</label>
				<input
					type="number"
					class="form-control-sm"
					name="intensity"
					id="intensity"
					v-model="editedUnit.intensity"
					max="100"
					required
				/>
				%
			</div>
			<div class="mb-3 text-left col-9 mx-auto">
				<label for="date">Date:</label>
				<input
					type="date"
					class="form-control-sm"
					name="date"
					id="date"
					v-model="editedUnit.date"
					required
				/>
			</div>
			<input type="submit" class="btn submit" value="Save" />
		</form>
		<div class="modal-fader"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			editedUnit: { ...this.$store.getters.getUnitById(this.itemId) }
		};
	},

	props: {
		itemId: Number
	},

	methods: {
		onEditFormSubmit() {
			this.$emit("onSave", this.editedUnit);
		}
	}
};
</script>

<style>
.modal-fader {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	z-index: 99998;
	background: rgba(0, 0, 0, 0.8);
}

#edit-form-container {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

#edit-form {
	position: relative;
	transform: translateY(29vh);
	max-width: 500px;
	z-index: 99999;
	background-color: #2c2538;
}
</style>
