<template>
	<div class="mb-5">
		<h2 class="py-4 mt-5">Training units</h2>
		<div class="row py-4 mb-2 d-flex flex-row justify-content-between">
			<div class="col"><span>Activity</span></div>
			<div class="col"><span>Distance</span></div>
			<div class="col"><span>Duration</span></div>
			<div class="col"><span>Intensity</span></div>
			<div class="col"><span>Date</span></div>
			<div class="col"></div>
		</div>
		<div
			class="border rounded rounded-3 row py-4 mb-2 d-flex flex-row justify-content-between"
			v-for="item in list"
			:key="item.id"
		>
			<div class="col">
				<span><font-awesome-icon :size="'2x'" :icon="icons[item.activity]"/></span>
			</div>
			<div class="col">
				<span>{{ item.distance }} m</span>
			</div>
			<div class="col">
				<span>{{ item.duration }} min</span>
			</div>
			<div class="col">
				<span>{{ item.intensity }} %</span>
			</div>
			<div class="col">
				<span>{{ item.date }}</span>
			</div>
			<div class="col">
				<button class="btn btn-danger btn-sm" @click="onDeleteClick(item.id)">
					<font-awesome-icon :icon="['fas', 'trash-alt']"/>
				</button>
				<button class="btn btn-info btn-sm" @click="onEditClick(item.id)">
					<font-awesome-icon :icon="['fas', 'edit']"/>
				</button>
			</div>
		</div>
		<edit-unit-form
			v-if="showEditForm"
			:itemId="editItemId"
			@onSave="onEditFormSave($event)"
		/>
	</div>
</template>

<script>
import EditUnitForm from "./EditUnitForm.vue";

export default {
	data() {
		return {
			showEditForm: false,
			editItemId: null,
			icons: {
				running: ["fas", "running"],
				cycling: ["fas", "biking"],
				walking: ["fas", "walking"],
				swimming: ["fas", "swimmer"],
				hiking: ["fas", "mountain"],
				gym: ["fas", "dumbbell"],
			}
		};
	},

	components: {
		EditUnitForm
	},

	props: {
		list: Array
	},

	methods: {
		onDeleteClick(id) {
			this.$emit("removeUnit", id);
		},

		onEditClick(id) {
			this.editItemId = id;
			this.showEditForm = true;
		},

		onEditFormSave(editedItem) {
			this.$emit("editUnit", editedItem);
			this.showEditForm = false;
		}
	}
};
</script>

<style>
.space {
	width: 250px;
}
</style>
