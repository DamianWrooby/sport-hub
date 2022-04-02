import { mount } from "@vue/test-utils";
import TheHeader from "@/components/layout/TheHeader.vue";

describe("TheHeader component unit tests", () => {
	test("is a Vue instance", () => {
		const wrapper = mount(TheHeader, {});

		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});
