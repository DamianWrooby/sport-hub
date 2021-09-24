<template>
	<div id="add-form-container" class="mx-auto">
		<form
			id="add-form"
			class="border px-3 py-5 rounded rounded-3 text-center"
			@submit.prevent="onAddFormSubmit"
		>
			<div class="mb-3 text-left col-9 mx-auto">
				<label for="activity">Activity:</label>
				<select
					class="form-select"
					aria-label="Activity type select"
					id="activity"
					v-model="newUnit.activity"
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
					value="0"
					required
					v-model="newUnit.distance"
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
					value="0"
					required
					v-model="newUnit.duration"
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
					value="0"
					max="100"
					required
					v-model="newUnit.intensity"
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
					required
					v-model="newUnit.date"
				/>
			</div>
			<input type="submit" class="btn submit" value="Add" />
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newUnit: {
				id: this.generateId(),
				activity: "running",
				distance: 0,
				duration: 0,
				intensity: 0,
				date: this.getCurrentDate()
			}
		};
	},
	methods: {
		getCurrentDate() {
			let local = new Date();
			let month =
				local.getMonth() + 1 < 10
					? `0${local.getMonth() + 1}`
					: `${local.getMonth() + 1}`;
			return `${local.getFullYear()}-${month}-${local.getDate()}`;
		},

		onAddFormSubmit() {
			this.$emit("addUnit", { ...this.newUnit });
			this.newUnit.id = this.generateId();
		},

		generateId() {
			let id;
			do {
				id = Math.floor(Math.random() * 1000);
			} while (this.$store.state.trainingUnits.find(el => el.id === id));
			return id;
		}
	}
};
</script>

<style>
#add-form-container {
	max-width: 500px;
}

#add-form {
	background-color: #2c2538;
}

input[type="number"] {
	max-width: 6rem;
}

.btn.submit {
	color: #fff;
	background-color: blueviolet;
	transition: all 0.1s ease-in;
}
.btn.submit:hover {
	background-color: #9a88e4;
}
</style>
