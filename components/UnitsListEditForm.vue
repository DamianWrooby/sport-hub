<template>
	<div id="edit-form-container">
		<ValidationObserver v-slot="{ invalid }">
			<form
				id="edit-form"
				class="border px-3 py-5 rounded rounded-3 text-center col-md-9 mx-auto"
				:class="{ 'border-danger': invalid }"
				@submit.prevent="onEditFormSubmit"
			>
				<div class="mb-3 text-left col-9 mx-auto">
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
							v-model="editedUnit.activity"
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
				<div class="mb-3 text-left col-9 mx-auto">
					<ValidationProvider rules="required|positive" v-slot="{ errors, invalid }">
						<label for="distance">Distance:</label>
						<input
							type="number"
							class="form-control-sm"
							:class="{ 'border-danger': invalid, 'bg-danger': invalid }"
							name="distance"
							id="distance"
							v-model.number="editedUnit.distance"
							required
						/>
						<span>metres</span>
						<p class="text-danger error-message">{{ errors[0] }}</p>
					</ValidationProvider>
				</div>
				<div class="mb-3 text-left col-9 mx-auto">
					<ValidationProvider rules="required|positive" v-slot="{ errors, invalid }">
						<label for="duration">Duration:</label>
						<input
							type="number"
							class="form-control-sm"
							:class="{ 'border-danger': invalid, 'bg-danger': invalid }"
							name="duration"
							id="duration"
							v-model.number="editedUnit.duration"
							required
						/>
						<span>minutes</span>
						<p class="text-danger error-message">{{ errors[0] }}</p>
					</ValidationProvider>
				</div>
				<div class="mb-3 text-left col-9 mx-auto">
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
							v-model.number="editedUnit.intensity"
							max="100"
							required
						/>
						<span>%</span>
						<p class="text-danger error-message">{{ errors[0] }}</p>
					</ValidationProvider>
				</div>
				<div class="mb-3 text-left col-9 mx-auto">
					<ValidationProvider rules="required" v-slot="{ errors, invalid }">
						<label for="date">Date:</label>
						<input
							type="date"
							class="form-control-sm"
							:class="{ 'border-danger': invalid, 'bg-danger': invalid }"
							name="date"
							id="date"
							v-model="editedUnit.date"
							required
						/>
						<p class="text-danger error-message">{{ errors[0] }}</p>
					</ValidationProvider>
				</div>
				<input type="submit" class="btn submit" value="Save" :disabled="invalid" />
			</form>
		</ValidationObserver>
		<div class="modal-fader" @click="onBackdropClick"></div>
	</div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
	components: {
		ValidationObserver,
		ValidationProvider
	},

	props: {
		itemId: Number
	},

	methods: {
		onEditFormSubmit() {
			this.$emit("onSave", this.editedUnit);
		},

		onBackdropClick() {
			this.$emit("backdropClicked");
		},
	},

	computed: {
		editedUnit() {
			return { ...this.$store.getters.getUnitById(this.itemId) };
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

.error-message {
	font-size: 12px;
	margin-bottom: 0;
	min-height: 18px;
}
</style>
