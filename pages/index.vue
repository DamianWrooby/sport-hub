<template>
	<div class="container text-center">
		<h1 id="main-heading">Training Tracker</h1>
		<p id="sub-heading">Track your physical activities</p>
		<add-unit-form @addUnit="addUnit($event)" />
		<units-list
			:list="allUnits"
			@removeUnit="removeUnit($event)"
			@editUnit="editUnit($event)"
		/>
	</div>
</template>

<script>
import AddUnitForm from "../components/AddUnitForm.vue";
import UnitsList from "../components/UnitsList.vue";

export default {
	components: {
		AddUnitForm,
		UnitsList
	},

	computed: {
		allUnits() {
			return this.$store.getters.getUnits;
		}
	},

	methods: {
		addUnit(payload) {
			return this.$store.commit("addUnit", payload);
		},

		removeUnit(id) {
			return this.$store.commit("removeUnit", id);
		},

		editUnit(payload) {
			return this.$store.commit("editUnit", payload);
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
