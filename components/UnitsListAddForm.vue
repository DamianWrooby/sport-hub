<template>
	<div id="add-form-container" class="mx-auto">
		<ValidationObserver v-slot="{ invalid }">
			<form
				id="add-form"
				class="border px-3 py-5 rounded rounded-3 text-center"
				:class="{ 'border-danger': invalid }"
				@submit.prevent="onAddFormSubmit"
			>
				<div class="mb-2 text-left col-9 mx-auto">
					<ValidationProvider
						rules="required"
						name="activity"
						v-slot="{ errors, invalid }"
					>
						<label for="activity">Activity:</label>
						<select
							class="form-select"
							:class="{ 'border-danger': invalid, 'bg-danger': invalid }"
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
						<p class="text-danger error-message">{{ errors[0] }}</p>
					</ValidationProvider>
				</div>
				<div class="mb-2 text-left col-9 mx-auto">
					<ValidationProvider rules="required|positive" v-slot="{ errors, invalid }">
						<label for="distance">Distance:</label>
						<input
							type="number"
							class="form-control-sm"
							:class="{ 'border-danger': invalid, 'bg-danger': invalid }"
							name="distance"
							id="distance"
							value="0"
							required
							v-model.number="newUnit.distance"
						/>
						<span>metres</span>
						<p class="text-danger error-message">{{ errors[0] }}</p>
					</ValidationProvider>
				</div>
				<div class="mb-2 text-left col-9 mx-auto">
					<ValidationProvider rules="required|positive" v-slot="{ errors, invalid }">
						<label for="duration">Duration:</label>
						<input
							type="number"
							class="form-control-sm"
							:class="{ 'border-danger': invalid, 'bg-danger': invalid }"
							name="duration"
							id="duration"
							value="0"
							required
							v-model.number="newUnit.duration"
						/>
						<span>minutes</span>
						<p class="text-danger error-message">{{ errors[0] }}</p>
					</ValidationProvider>
				</div>
				<div class="mb-2 text-left col-9 mx-auto">
					<ValidationProvider
						rules="required|between:0,100|integer"
						v-slot="{ errors, invalid }"
					>
						<label for="intensity">Intensity:</label>
						<input
							type="number"
							class="form-control-sm"
							:class="{ 'border-danger': invalid, 'bg-danger': invalid }"
							name="intensity"
							id="intensity"
							value="0"
							max="100"
							required
							v-model.number="newUnit.intensity"
						/>
						<span>%</span>
						<p class="text-danger error-message">{{ errors[0] }}</p>
					</ValidationProvider>
				</div>
				<div class="mb-2 text-left col-9 mx-auto">
					<ValidationProvider rules="required" v-slot="{ errors, invalid }">
						<label for="date">Date:</label>
						<input
							type="date"
							class="form-control-sm"
							:class="{ 'border-danger': invalid, 'bg-danger': invalid }"
							name="date"
							id="date"
							required
							v-model="newUnit.date"
						/>
						<p class="text-danger error-message">{{ errors[0] }}</p>
					</ValidationProvider>
				</div>
				<input type="submit" class="btn submit" value="Add" :disabled="invalid" />
			</form>
		</ValidationObserver>
	</div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
	components: {
		ValidationObserver,
		ValidationProvider
	},
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
			let day =
				local.getDate() < 10
					? `0${local.getDate()}`
					: `${local.getMonth()}`;
				
			return `${local.getFullYear()}-${month}-${day}`;
		},

		onAddFormSubmit() {
			this.$emit("addUnit", { ...this.newUnit });
			this.newUnit.id = this.generateId();
		},

		generateId() {
			let id;
			do {
				id = Math.floor(Math.random() * 1000);
			} while (this.$store.getters.units.find(el => el.id === id));
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

.error-message {
	font-size: 12px;
	margin-bottom: 0;
	min-height: 18px;
}
</style>
