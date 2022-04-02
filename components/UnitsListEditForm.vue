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
					<ValidationProvider rules="required" name="activity" v-slot="{ errors, invalid }">
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
					<ValidationProvider rules="required|between:0,100|integer" v-slot="{ errors, invalid }">
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
				<div class="mb-2 text-left col-9 mx-auto" v-if="editedUnit.description">
					<ValidationProvider v-slot="{ errors, invalid }" class="d-flex flex-column">
						<label for="description">Description:</label>
						<textarea
							rows="3"
							cols="33"
							:class="{ 'border-danger': invalid, 'bg-danger': invalid }"
							name="description"
							id="description"
							v-model="editedUnit.description"
						/>
						<p class="text-danger error-message">{{ errors[0] }}</p>
					</ValidationProvider>
				</div>
				<div class="mb-3 text-left col-9 mx-auto" v-if="editedUnit.date">
					<ValidationProvider rules="required" v-slot="{ errors, invalid }">
						<label for="date">Date:</label>
						<input
							type="date"
							class="form-control-sm"
							:class="{ 'border-danger': invalid, 'bg-danger': invalid }"
							name="date"
							id="date"
							v-model="editedUnit.simpleDate"
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
import throwToast from "../mixins/throwToast";
import convertDate from "../mixins/convertDate";

export default {
	mixins: [throwToast, convertDate],

	data() {
		return {
			editedUnit: { ...this.unitToEdit, simpleDate: this.convertToSimpleDate(this.unitToEdit.date, true) }
		};
	},

	components: {
		ValidationObserver,
		ValidationProvider
	},

	props: {
		unitToEdit: {
			type: Object,
			required: true
		}
	},

	methods: {
		onEditFormSubmit() {
			const { date, ...finalUnit } = this.editedUnit;
			finalUnit.date = this.convertToIsoDate(this.editedUnit.simpleDate);
			this.$emit("onSave", finalUnit);
		},

		onBackdropClick() {
			this.$emit("backdropClicked");
		}
	}
};
</script>

<style>
.modal-fader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
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
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
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
