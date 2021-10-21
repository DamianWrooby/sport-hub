export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Training Tracker - Track your physical activities",
		htmlAttrs: {
			lang: "en"
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" }
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["~/assets/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["~/plugins/fontawesome.js", "~/plugins/vee-validate.js"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ["@nuxtjs/google-fonts"],

	googleFonts: {
		families: {
			Montserrat: [100, 400],
			Raleway: [100, 400, 900]
		},
		prefetch: true
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		"bootstrap-vue/nuxt"
	],
	bootstrapVue: {
		componentPlugins: ["ModalPlugin", "ToastPlugin"]
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ["vee-validate"]
	},

	serverMiddleware: ["~/api/index.js"]
};
