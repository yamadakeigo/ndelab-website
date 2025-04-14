import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

export default {
  preprocess: preprocess({
    postcss: {
      configFilePath: path.resolve('./postcss.config.cjs'), // 明示的に指定
    },
  }),
  kit: {
    adapter: adapter(),
  },
};