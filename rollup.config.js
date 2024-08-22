import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

export default [{
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'es',
            sourcemap: true,
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
}),
        postcss({
            modules: true, // Enables CSS modules
            extract: true, // Extracts CSS into a separate file
            minimize: true,
            sourceMap: true,
            namedExports: true, // Allows you to use named exports for classes
        }),
    ],
    external: ['react', 'react-dom'],
},{
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
},
]