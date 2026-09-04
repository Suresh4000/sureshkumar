//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-1VuO_pcf.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: ["/", "/projects/$slug"],
		preloads: ["/assets/index-DNBzFmdF.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-DNBzFmdF.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-I0RDHU3G.js",
			"/assets/site-shell-WOR-RN1f.js",
			"/assets/mockups-BMEbHoZr.js"
		]
	},
	"/projects/$slug": {
		filePath: "/workspace/src/routes/projects.$slug.tsx",
		children: void 0,
		preloads: [
			"/assets/projects._slug-0VWLZINR.js",
			"/assets/site-shell-WOR-RN1f.js",
			"/assets/projects._slug-UZ9erBzU.js",
			"/assets/mockups-BMEbHoZr.js"
		]
	}
} });
//#endregion
export { tsrStartManifest };
