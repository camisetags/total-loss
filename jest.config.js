module.exports = {
  // transform: {
  //   '^.+\\.(tsx|ts)?$': 'ts-jest',
  // },
  verbose: true,
  setupTestFrameworkScriptFile: 'raf/polyfill',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  modulePaths: ['src/app', 'src/styles'],
  unmockedModulePathPatterns: ['node_modules/react/', 'node_modules/enzyme/'],
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  testMatch: ['**/tests/**/*.(ts|tsx|js)'],
};
