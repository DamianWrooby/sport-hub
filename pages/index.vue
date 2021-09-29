<template>
	<div class="container text-center">
		<transition name="heading" appear>
			<div id="heading">
				<h1 id="main-heading">Training Tracker</h1>
				<p id="sub-heading">Track your physical activities</p>
			</div>
		</transition>
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

.heading-enter-active,
.heading-leave-active {
	transition: all 0.5s;
}

.heading-enter,
.heading-leave-to {
	opacity: 0;
}

.heading-enter {
	transform: translateY(30px);
}
</style>
