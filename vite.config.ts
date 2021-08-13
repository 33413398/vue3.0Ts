import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
 
  // 打包后目录,默认dist
  // 别名配置
  alias: {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src')
  },
})

