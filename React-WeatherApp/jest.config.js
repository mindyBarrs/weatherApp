module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js,jsx}"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	maxWorkers: "50%",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/src/utils/jest.setup.js"],
	transform: {
		"^.+\\.(js|jsx)$": "babel-jest",
	},
	transformIgnorePatterns: [
		"node_modules/(?!(react-redux|other-esm-package)/)", // Add libraries here
	],
	moduleNameMapper: {
		"\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
		"^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
		"^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/RelativeImageStub.js",
		"module_name_(.*)": "<rootDir>/substituted_module_$1.js",
		"assets/(.*)": [],
		"^@i18n/(.*)$": "<rootDir>/locales/$1",
	},
	coveragePathIgnorePatterns: [
		"/node_modules/",
		"i18n.js",
		"index.js",
		"test.utils",
		"src/utils/constants",
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: -10,
		},
	},
};
