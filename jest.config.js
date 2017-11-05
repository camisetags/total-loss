module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: 'raf/polyfill',
  moduleFileExtensions: ['js', 'jsx'],
  modulePaths: ['src/app', 'src/styles'],
  unmockedModulePathPatterns: ['node_modules/react/', 'node_modules/enzyme/'],
};
