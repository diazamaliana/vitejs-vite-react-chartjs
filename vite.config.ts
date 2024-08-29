import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.tsx',
      name: 'ChartWidget',
      fileName: 'chart-widget',
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Mark React and ReactDOM as external
      output: {
        globals: {
          react: 'React',         // Global variable name for React in UMD
          'react-dom': 'ReactDOM' // Global variable name for ReactDOM in UMD
        },
      },
    },
  },
});
