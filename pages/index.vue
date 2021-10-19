<template>
	<div class="container text-center">
		<units-list-add-form @addUnit="addUnit($event)" />
		<units-list @removeUnit="removeUnit($event)" @editUnit="editUnit($event)" />
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

	methods: {
		addUnit(payload) {
			return this.$store.dispatch("addSavedUnit", payload);
		},

		removeUnit(id) {
			return this.$store.dispatch("deleteSavedUnit", id);
		},

		editUnit(payload) {
			return this.$store.dispatch("editSavedUnit", payload);
		}
	}
};
</script>

<style>
body {
	background: linear-gradient(
		60deg,
		rgba(75, 56, 105, 1) 0%,
		rgba(9, 83, 121, 1) 87%
	);
	color: #fff;
	min-height: 100vh;
	font-family: "Montserrat";
}

h1#main-heading {
	font-family: "Raleway";
	font-weight: 900;
	font-size: 50px;
	padding: 50px 0;
}

#sub-heading {
	position: relative;
	font-family: "Montserrat";
	font-weight: 400;
	text-transform: uppercase;
	top: -58px;
	letter-spacing: 4px;
	color: #9a88e4;
}
</style>
