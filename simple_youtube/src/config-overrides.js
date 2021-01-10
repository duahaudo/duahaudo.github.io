const {
  removeModuleScopePlugin, override, disableChunk, setWebpackOptimizationSplitChunks
} = require('customize-cra')

module.exports = override([
  setWebpackOptimizationSplitChunks({
    cacheGroups: {
      default: false,
    },
  }),
  disableChunk(),
  removeModuleScopePlugin(),
  function override(config, env) {
    config.output = {
      ...config.output, // copy all settings
      filename: "static/js/main.js",
      chunkFilename: "static/js/[name].chunk.js",
    };
    // console.log(config)
    return config;
  }
])