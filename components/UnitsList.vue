<template>
	<div class="mb-5">
		<h2 class="py-4 mt-5">Training units</h2>
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
						<span>{{ unit.date }}</span>
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
			@editSaved="onEditFormSave()"
			@backdropClicked="hideEditForm"
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
			sortBy: "timestamp",
			sortDirection: "asc",
			icons
		};
	},

	components: {
		UnitsListEditForm,
		UnitsListTableHead
	},

	computed: {
		allUnits() {
			return this.$store.getters.savedUnits;
		},

		sortedUnits() {
			return this.$store.getters.sortedSavedUnits(this.sortBy, this.sortDirection);
		}
	},

	methods: {
		onDeleteClick(id) {
			this.showDeleteForm = true;
			this.deleteItemId = id;
		},

		async onDeleteConfirm(id) {
			const res = await this.$store.dispatch("deleteSavedUnit", id);
			res ? this.successToast('b-toaster-bottom-left', true)  : this.errorToast('b-toaster-bottom-left', true);
		},

		onEditClick(id) {
			this.editItemId = id;
			this.showEditForm = true;
			document.querySelector("body").classList.add("modal-open");
		},

		onEditFormSave() {
			this.showEditForm = false;
			document.querySelector("body").classList.remove("modal-open");
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

		successToast(toaster, append = false) {
			this.$bvToast.toast(`Unit has been removed successfully.`, {
				title: `Success!`,
				toaster: toaster,
				solid: true,
				appendToast: append,
				variant: "success"
			});
		},

		errorToast(toaster, append = false) {
			this.$bvToast.toast(`Unit hasn't been removed. Try again.`, {
				title: `Error!`,
				toaster: toaster,
				solid: true,
				appendToast: append,
				variant: "danger"
			});
		}
	},

	async fetch() {
		this.$store.dispatch("fetchSavedUnits");
	}
};
</script>

<style>
ul {
	position: relative;
	margin: 0;
	padding: 0;
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
