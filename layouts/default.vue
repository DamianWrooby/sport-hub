<template>
	<div class="container text-center">
		<TheHeader />
		<Nuxt />
	</div>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";

export default {
	components: {
		TheHeader,
	}
};
</script>

<style>
</style>
