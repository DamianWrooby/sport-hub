<template>
	<div class="col mx-1 p-0">
		<div class="mesocycle-block border-0  pb-2 rounded">
			<p class="fw-bold block-title">Mesocycle</p>
			<p class="h6 pb-2">Number of microcycles:</p>
			<div class="row justify-content-center align-items-baseline">
				<div class="control-col-sm">
					<span
						class="carousel-control-prev-icon control"
						@click="microcyclesNumber--"
						v-show="microcyclesNumber > 1"
					></span>
				</div>
				<div class="control-col-sm">
					<span class="fw-bold h5 px-3 control-value">{{ microcyclesNumber }}</span>
				</div>
				<div class="control-col-sm">
					<span
						class="carousel-control-next-icon control"
						@click="microcyclesNumber++"
						v-show="microcyclesNumber < 8"
					></span>
				</div>
			</div>
		</div>
		<div class="microcycle-container row flex-nowrap mt-2">
			<div v-for="index in microcyclesNumber" :key="index" class="microcycle-block col p-1  border-0 rounded"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			microcyclesNumber: 1
		};
	},

	props: {
		id: Number
	}
};
</script>

<style>
.microcycle-block {
	background-color: rgb(199 27 25);
}
</style>
