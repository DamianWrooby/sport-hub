<template>
	<div class="mb-5">
		<div class="row col-12 justify-content-center align-items-center mb-4">
			<h2 class="m-0">Completed units</h2>
			<button class="add-button btn rounded-circle btn-sm ml-2" title="Add unit" @click.stop.prevent="onAddClick">
				<font-awesome-icon :icon="icons.plus" />
			</button>
		</div>
		<units-list-table-head :sortBy="sortBy" :sortDirection="sortDirection" @setSorting="setSorting($event)" />
		<transition-group name="list" tag="ul" appear>
			<li
				class="list-item border rounded rounded-3 row mb-2 d-flex flex-row justify-content-between align-items-center"
				v-for="unit in sortedUnits"
				:key="unit.id"
			>
				<NuxtLink :to="`/units/${unit.id}`" class="unit-link d-flex flex-row align-items-center col-12 py-4 px-0">
					<div class="col">
						<span><font-awesome-icon :size="'2x'" :icon="icons[unit.activity]"/></span>
					</div>
					<div class="col">
						<span>{{ unit.distance }} m</span>
					</div>
					<div class="col">
						<span>{{ unit.duration }} min</span>
					</div>
					<div class="col">
						<span>{{ unit.intensity }} %</span>
					</div>
					<div class="col">
						<span>{{ convertToSimpleDate(unit.date) }}</span>
					</div>
					<div class="col">
						<button class="btn btn-danger btn-sm" @click.stop.prevent="onDeleteClick(unit.id)">
							<font-awesome-icon :icon="icons.delete" />
						</button>
						<button class="btn btn-info btn-sm" @click.stop.prevent="onEditClick(unit.id)">
							<font-awesome-icon :icon="icons.edit" />
						</button>
					</div>
				</NuxtLink>
			</li>
		</transition-group>

		<b-modal
			id="modal-delete"
			v-model="showDeleteForm"
			@ok="onDeleteConfirm(deleteItemId)"
			centered
			ok-title="Delete"
			ok-variant="danger"
			:header-text-variant="'dark'"
			:body-text-variant="'dark'"
			:footer-text-variant="'dark'"
			modal-header="false"
			size="sm"
			title="Deleting unit"
		>
			<p class="my-4 fs-1">Are you sure?</p>
		</b-modal>
		<units-list-edit-form
			v-if="showEditForm"
			:unitToEdit="editedUnit"
			@backdropClicked="hideEditForm"
			@onSave="onEditFormSubmit"
		/>
		<units-list-add-form v-if="showAddForm" @backdropClicked="hideAddForm" @onSave="onAddFormSubmit" />
	</div>
</template>

<script>
import UnitsListEditForm from "./UnitsListEditForm.vue";
import UnitsListAddForm from "./UnitsListAddForm.vue";
import UnitsListTableHead from "./UnitsListTableHead.vue";
import throwToast from "../mixins/throwToast";
import convertDate from "../mixins/convertDate";
import { icons } from "../assets/icons.js";

export default {
	mixins: [throwToast, convertDate],

	data() {
		return {
			showDeleteForm: false,
			deleteItemId: null,
			showEditForm: false,
			showAddForm: false,
			editItemId: null,
			sortBy: "timestamp",
			sortDirection: "asc",
			icons
		};
	},

	components: {
		UnitsListEditForm,
		UnitsListAddForm,
		UnitsListTableHead
	},

	computed: {
		allUnits() {
			return this.$store.getters.completedUnits;
		},

		sortedUnits() {
			return this.$store.getters.sortedCompletedUnits(this.sortBy, this.sortDirection);
		},

		editedUnit() {
			return this.$store.getters.completedUnit(this.editItemId);
		}
	},

	methods: {
		onDeleteClick(id) {
			this.showDeleteForm = true;
			this.deleteItemId = id;
		},

		async onDeleteConfirm(id) {
			const res = await this.$store.dispatch("deleteCompletedUnit", id);
			res ? this.throwToast("success", "removed") : this.throwToast("danger", "removed");
		},

		onEditClick(id) {
			this.editItemId = id;
			this.showEditForm = true;
			document.querySelector("body").classList.add("modal-open");
		},

		onAddClick() {
			this.showAddForm = true;
			document.querySelector("body").classList.add("modal-open");
		},

		async onEditFormSubmit(editedUnit) {
			try {
				this.hideEditForm();
				const res = await this.$store.dispatch("editCompletedUnit", editedUnit);
				res ? this.throwToast("success", "edited") : this.throwToast("danger", "edited");
				return true;
			} catch (err) {
				console.warn(err);
				return false;
			}
		},

		async onAddFormSubmit(newUnit) {
			try {
				const res = await this.$store.dispatch("addCompletedUnit", newUnit);
				res ? this.throwToast("success", "added") : this.throwToast("danger", "added");
				this.hideAddForm();

				return true;
			} catch (err) {
				console.warn(err);
				return false;
			}
		},

		setSorting(sortKey) {
			if (this.sortBy === sortKey) {
				this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
			} else {
				this.sortBy = sortKey;
				this.sortDirection = "asc";
			}
		},

		hideEditForm() {
			this.showEditForm = false;
			document.querySelector("body").classList.remove("modal-open");
		},

		hideAddForm() {
			this.showAddForm = false;
			document.querySelector("body").classList.remove("modal-open");
		}
	},

	async fetch() {
		this.$store.dispatch("fetchCompletedUnits");
	}
};
</script>

<style>
ul {
	position: relative;
	margin: 0;
	padding: 0;
}

.add-button {
	width: 30px;
	height: 30px;
	background-color: rgb(51, 175, 100);
	color: #fff;
}

.add-button:hover {
	background-color: rgb(44, 146, 85);
	color: #fff;
}

.list-item {
	transition: all 0.1s ease-in-out;
}

.list-item:hover {
	transform: scale(1.03);
	background-color: rgba(255, 255, 255, 0.15);
}

.unit-link,
.unit-link:hover {
	color: #fff;
	text-decoration: none;
}

.btn-container {
	right: 0;
}

/* Animations */
.list-enter-active,
.list-leave-active {
	transition: all 0.3s ease-in-out;
}

.list-enter,
.list-leave-to {
	opacity: 0;
}

.list-enter {
	transform: translateY(30px);
}

.list-leave-active {
	position: absolute;
	width: 100%;
	transition: all 0.3s ease-in-out;
}

.list-leave-to {
	transform: translate(300px, -90px);
}

.list-move {
	transition: all 0.3s ease-in-out;
}
</style>
