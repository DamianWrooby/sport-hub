<template>
	<div id="add-form-container" class="mx-auto">
		<ValidationObserver v-slot="{ invalid }">
			<form
				id="add-form"
				class="border px-3 py-5 rounded rounded-3 text-center col-md-9 mx-auto"
				:class="{ 'border-danger': invalid }"
				@submit.prevent="onAddFormSubmit"
			>
				<div class="mb-2 text-left col-9 mx-auto">
					<ValidationProvider rules="required" name="activity" v-slot="{ errors, invalid }">
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
					<ValidationProvider rules="required|between:0,100|integer" v-slot="{ errors, invalid }">
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
					<ValidationProvider v-slot="{ errors, invalid }" class="d-flex flex-column">
						<label for="description">Description:</label>
						<textarea
							rows="3"
							cols="33"
							:class="{ 'border-danger': invalid, 'bg-danger': invalid }"
							name="description"
							id="description"
							v-model="newUnit.description"
						/>
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
		<div class="modal-fader" @click="onBackdropClick"></div>
	</div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import throwToast from "~/mixins/throwToast";
import convertDate from "~/mixins/convertDate";

export default {
	mixins: [throwToast, convertDate],

	components: {
		ValidationObserver,
		ValidationProvider
	},
	data() {
		return {
			newUnit: {
				activity: "running",
				distance: 0,
				duration: 0,
				intensity: 0,
				description: "",
				date: this.getCurrentDate()
			}
		};
	},

	methods: {
		getCurrentDate() {
			const local = new Date();
			const month = local.getMonth() + 1 < 10 ? `0${local.getMonth() + 1}` : `${local.getMonth() + 1}`;
			const day = local.getDate() < 10 ? `0${local.getDate()}` : `${local.getDate()}`;

			return `${local.getFullYear()}-${month}-${day}`;
		},

		async onAddFormSubmit() {
			const convertedDate = this.convertToIsoDate(this.newUnit.date);
			const timestamp = this.convertToTimestamp(this.newUnit.date);
			const { date, ...newUnit } = this.newUnit;
			newUnit.date = convertedDate;
			newUnit.timestamp = timestamp;

			const res = await this.$store.dispatch("addCompletedUnit", newUnit);
			res ? this.throwToast("success", "added") : this.throwToast("danger", "added");
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

#add-form-container {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

#add-form {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 500px;
	z-index: 99999;
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
