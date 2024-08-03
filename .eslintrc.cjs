module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/strongly-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [{ files: ['**/*.js', '**/*.vue'] }],
  plugins: ['import', 'vue'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@images', './src/assets/images'],
          ['@styles', './src/styles'],
        ],
      },
    },
  },
};
