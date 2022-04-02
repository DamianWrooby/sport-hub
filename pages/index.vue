<template>
	<div class="container text-center">
		<units-list-add-form v-if="showAddForm" @backdropClicked="hideAddForm" />
		<units-list />
	</div>
</template>

<script>
import UnitsListAddForm from "../components/UnitsListAddForm.vue";
import UnitsList from "../components/UnitsList.vue";

export default {
	components: {
		UnitsListAddForm,
		UnitsList
	},

	data() {
		return {
			showAddForm: false
		};
	},

	methods: {
		hideAddForm() {
			this.showAddForm = false;
			document.querySelector("body").classList.remove("modal-open");
		}
	}
};
</script>

<style>
body {
	background: linear-gradient(60deg, rgba(75, 56, 105, 1) 0%, rgba(9, 83, 121, 1) 87%);
	color: #fff;
	min-height: 100vh;
	font-family: "Montserrat";
}
</style>
