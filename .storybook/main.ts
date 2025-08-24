import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async (config, { configType }) => {
    // Set base path for GitHub Pages
    config.base = "/makyo-searchable-dropdown-list/";
    return config;
  }
};

export default config;
