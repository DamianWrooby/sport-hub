<template>
	<div>
		<schedule-date />
		<schedule-table />
	</div>
</template>

<script>
import ScheduleTable from "../components/ScheduleTable.vue";
import ScheduleDate from "../components/ScheduleDate.vue";

export default {
	components: {
		ScheduleTable
	}
};
</script>

<style></style>
