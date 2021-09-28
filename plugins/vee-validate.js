import { extend } from "vee-validate";
import { required, integer, between } from "vee-validate/dist/rules";

extend("required", {
	...required,
	message: "This field is required"
});

extend("integer", {
	...integer,
	message: "This field should be integer number."
});

extend("between", {
	...between,
	message: "This field should be a number between {min} and {max}"
});


extend("positive", {
	validate(value) {
		return value >= 0;
	},
	message: "This field should be positive number."
});
