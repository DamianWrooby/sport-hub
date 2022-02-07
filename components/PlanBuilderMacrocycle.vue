<template>
	<div
		class="block macrocycle-block position-relative d-flex flex-column justify-content-center align-items-center border-0 rounded p-4"
	>
		<p class="position-absolute fw-bold block-title">Macrocycle</p>
		<p class="h5 pb-2">Number of mesocycles:</p>
		<div class="row align-items-baseline">
			<div class="control-col">
				<span
					class="carousel-control-prev-icon control"
					@click="$emit('input', value - 1)"
					v-show="value > 1"
				></span>
			</div>
			<div class="control-col">
				<span class="fw-bold h4 px-3 control-value">{{ value }}</span>
			</div>
			<div class="control-col">
				<span class="carousel-control-next-icon control" @click="$emit('input', value + 1)" v-show="value < 12"></span>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		value: Number,
	}
};
</script>

<style>
.block-title {
	top: 5px;
	left: 7px;
	text-transform: uppercase;
	opacity: 0.3;
	user-select: none;
}

.macrocycle-block {
	background-color: rgb(63 35 54);
}

.control-col {
	width: 50px;
}

.control {
	opacity: 0.5;
	cursor: pointer;
}

.control:hover {
	opacity: 1;
}

.control-value {
	user-select: none;
}
</style>
