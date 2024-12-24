import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  alias: {
    '@ant-design/v5-patch-for-react-19$': path.resolve('src'),
    '@ant-design/v5-patch-for-react-19/es': path.resolve('src'),
  },
  mfsu: false,
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Patch for React 19',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  styles: [
    `
      .dumi-default-previewer-demo {
        position: relative;
        min-height: 300px;
      }
    `,
  ]
});
