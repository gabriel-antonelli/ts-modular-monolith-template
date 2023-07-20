import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	rootDir: '../../../',
	roots: ['<rootDir>/src'],
	coverageProvider: 'v8',
	collectCoverageFrom: [
		'**/*.ts',
		'!**/config/**',
		'!**/ports/**',
		'!**/tests.**',
		'!**/dto/**',
	],
	coverageDirectory: 'coverage',
	testEnvironment: 'node',
	transform: {
		'^.+\\.ts?$': 'ts-jest',
	},
	extensionsToTreatAsEsm: ['.ts'],
	moduleNameMapper: {
		'@/tests/(.*)': '<rootDir>/modules/**/tests/$1',
		'@/(.*)': '<rootDir>/src/$1',
	},
	setupFiles: ['dotenv/config'],
};

export default config;
