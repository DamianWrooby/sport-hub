<template>
	<div class="col mx-1 p-0 text-truncate">
		<div class="mesocycle-block border-0  pb-2 rounded">
			<p class="fw-bold block-title">Mesocycle</p>
			<p class="h6 pb-2 text-truncate">Number of microcycles:</p>
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
		<div class="microcycle-container row flex-nowrap mt-2 px-2">
			<div
				v-for="index in microcyclesNumber"
				:key="index"
				class="microcycle-block col p-1 mx-1  border-0 rounded overflow-hidden text-truncate"
				title="Microcycle"
			>
				<p class="block-title-micro text-uppercase text-truncate">Microcycle</p>
			</div>
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
.block-title-micro {
	font-size: 0.6rem;
	top: 5px;
	left: 7px;
	opacity: 0.5;
	user-select: none;
}

.microcycle-block {
	min-height: 10rem;
	background-color: rgb(199 27 25);
}
</style>
