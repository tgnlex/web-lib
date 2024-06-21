{
	"compilerOptions": {
		"target": "ES2020",
		"module": "ESNext",
		"moduleResolution": "bundler",
		"noEmit": true,
		"allowJs": true,
		"checkJs": true,

		/* Preact Config */
		"jsx": "react-jsx",
		"jsxImportSource": "preact",
		"skipLibCheck": true,
		"baseUrl": ".",
		"paths": {
			"react": ["./node_modules/preact/compat/"],
			"react-dom": ["./node_modules/preact/compat/"],
			"@lib/*": ["src/lib/*"],
			"@css/*": ["src/style"],
			"@assets/*": ["src/assets/*"],
			"@comps/*": ["src/components/*"],
			"@pages/*": ["src/pages/*"],
		  "@public/*": ["/public/*"],
		}
	},
	"include": ["node_modules/vite/client.d.ts", "**/*"]
}
