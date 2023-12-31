module.exports = {
  preset: 'ts-jest',
  bail: 1,
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {},
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', 'test', 'src'],
  collectCoverage: true,
  coverageReporters: ['text'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/reportWebVitals.ts',
    '!<rootDir>/src/index.tsx',
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    'index.tsx',
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/reportWebVitals.ts',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
