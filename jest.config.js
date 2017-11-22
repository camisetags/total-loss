module.exports = {
  verbose: true,
  // setupTestFrameworkScriptFile: 'raf/polyfill',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  modulePaths: ['src/app', 'src/styles', 'src/images'],
  mapCoverage: true,
  unmockedModulePathPatterns: [
    'node_modules/react/',
    'node_modules/enzyme/',
    'node_modules/axios/',
  ],
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  testMatch: ['/**/*.(spec|test).(ts|tsx|js)'],
};
