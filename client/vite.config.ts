import { defineConfig } from 'vitest/config'; // Импорт из vitest/config
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: { // Настройки тестов Vitest
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
