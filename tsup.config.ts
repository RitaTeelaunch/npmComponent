import { defineConfig } from 'tsup';

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/index.ts'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
    splitting: false,
    sourcemap: true,
    target: 'esnext',
    external: [],
    outDir: 'dist',
    cssModules: true, // Enable CSS Modules
});