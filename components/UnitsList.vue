<template>
	<div class="mb-5">
		<h2 class="py-4 mt-5">Training units</h2>
		<units-list-table-head @setSorting="setSorting($event)" />
		<div
			class="border rounded rounded-3 row py-4 mb-2 d-flex flex-row justify-content-between"
			v-for="item in sortedUnits"
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
					<font-awesome-icon :icon="icons.delete" />
				</button>
				<button class="btn btn-info btn-sm" @click="onEditClick(item.id)">
					<font-awesome-icon :icon="icons.edit" />
				</button>
			</div>
		</div>
		<b-modal
			id="modal-delete"
			v-model="showDeleteForm"
			@ok="onDeleteConfirm(deleteItemId)"
			centered
			ok-title="Delete"
			ok-variant="danger"
			modal-header="false"
			size="sm"
			:body-bg-variant="'dark'"
			:header-bg-variant="'dark'"
			:footer-bg-variant="'dark'"
			hide-header
		>
			<p class="my-4 fs-1">Are you sure?</p>
		</b-modal>
		<units-list-edit-form
			v-if="showEditForm"
			:itemId="editItemId"
			@onSave="onEditFormSave($event)"
		/>
	</div>
</template>

<script>
import UnitsListEditForm from "./UnitsListEditForm.vue";
import UnitsListTableHead from "./UnitsListTableHead.vue";
import { icons } from "../assets/icons.js";

export default {
	data() {
		return {
			showDeleteForm: false,
			deleteItemId: null,
			showEditForm: false,
			editItemId: null,
			icons,
		};
	},

	components: {
		UnitsListEditForm,
		UnitsListTableHead,
	},

	computed: {
		allUnits() {
			return this.$store.getters.getUnits;
		},

		sortedUnits() {
			return this.$store.getters.getSortedUnits;
		}
	},

	methods: {
		onDeleteClick(id) {
			this.showDeleteForm = true;
			this.deleteItemId = id;
		},

		onDeleteConfirm(id) {
			this.$emit("removeUnit", id);
		},

		onEditClick(id) {
			this.editItemId = id;
			this.showEditForm = true;
		},

		onEditFormSave(editedItem) {
			this.$emit("editUnit", editedItem);
			this.showEditForm = false;
		},

		setSorting(sortKey) {
			this.$store.commit("setSorting", sortKey);
		}
	}
};
</script>
