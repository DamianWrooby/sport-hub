export default {
	methods: {
		throwToast(variant, action) {
			let title, message;
			
			switch (variant) {
				case "success":
					title = 'Success!';
					message = `Unit has been ${action} successfully.`
					break;
				case "danger":
					title = `Error!`,
					message = `Unit hasn't been ${action}. Try again.`
				default:
					title = 'Success!';
					message = `Unit has been ${action} successfully.`
					console.log('Toast default variant');
			}

			this.$bvToast.toast(message, {
				title: title,
				toaster: "b-toaster-bottom-left",
				solid: true,
				appendToast: true,
				variant: variant
			});
		}
	}
};
