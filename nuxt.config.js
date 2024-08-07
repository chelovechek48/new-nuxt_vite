import path from 'path';

const setAlias = (localPath) => path.resolve(__dirname, localPath);

export default {
  devtools: { enabled: false },
  devServer: { port: '8080' },
  compatibilityDate: '2024-08-03',

  srcDir: './src',
  app: {
    baseURL: '/new-nuxt_vite',
    head: {
      title: 'Шаблон',
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0',
    },
    htmlAttrs: { lang: 'ru' },
  },

  postcss: {
    plugins: {
      'postcss-preset-env': {},
      'postcss-combine-media-query': {},
    },
  },

  alias: {
    '@images': setAlias('./src/assets/images'),
    '@styles': setAlias('./src/styles'),
  },
};
