import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	roots: ['<rootDir>/../..'],
	collectCoverageFrom: [
		'<rootDir>/../../**/*.ts',
		'!<rootDir>/../../modules/**/ports/*.ts',
    '!<rootDir>/../../config/*.ts',
    '!<rootDir>/../../config/**/*.ts'
	],
	coverageDirectory: 'coverage',
	testEnvironment: 'node',
	transform: {
	'^.+\\.ts?$': 'ts-jest',	
	},
  extensionsToTreatAsEsm: ['.ts'],
	moduleNameMapper: {
		'@/tests/(.*)': '<rootDir>/../../modules/**/tests/$1',
		'@/(.*)': '<rootDir>/../../$1',
	},
	setupFiles: ['dotenv/config'],
};

export default config;
