module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js,jsx}"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	maxWorkers: "50%",
	moduleNameMapper: {
		"^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
		"^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/RelativeImageStub.js",
		"module_name_(.*)": "<rootDir>/substituted_module_$1.js",
		"assets/(.*)": [],
	},
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: -10,
		},
	},
};
