import { InlineConfig, UserConfig, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setup.js',
    },
    server: {
      proxy: {
        '/api/v1': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
        },
      },
    },
  } as VitestConfigExport;
});
