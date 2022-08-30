const { resolve } = require("node:path")
const { loadConfigFromFile, mergeConfig } = require("vite")

const filter = [
  "vite:react-babel",
  "vite:react-jsx",
  "vite:react-refresh",
]

const filterPlugins = obj => {
  if(Array.isArray(obj))
    return obj
      .map(filterPlugins)
      .filter(v => Array.isArray(v) ? v.length : v)
  if(filter.includes(obj.name))
    return undefined
  return obj
}

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/story.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: async orig => {
    const path = resolve(__dirname, "../vite.config.ts")
    const { config } = await loadConfigFromFile(path)
    orig.plugins = filterPlugins(orig.plugins)
    return mergeConfig(orig, config)
  },
}
