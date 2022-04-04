export default {
	ssr: false,
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

	css: ["~/assets/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],
	plugins: ["~/plugins/fontawesome.js", "~/plugins/vee-validate.js"],
	components: true,
	buildModules: ["@nuxtjs/google-fonts"],

	googleFonts: {
		families: {
			Montserrat: [100, 400],
			Raleway: [100, 400, 900]
		},
		prefetch: true
	},

	modules: ["bootstrap-vue/nuxt"],
	bootstrapVue: {
		componentPlugins: ["ModalPlugin", "ToastPlugin"]
	},
	build: {
		transpile: ["vee-validate"]
	},

	serverMiddleware: ["~/api/index.js"]
};
