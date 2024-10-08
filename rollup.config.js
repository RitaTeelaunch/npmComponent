import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';


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
            modules: true, // Enable CSS Modules
            extract: true, // Extract CSS to a separate file
            // extract: 'dist/index.css', // Extract CSS to a separate file
            minimize: true, // Minify the CSS
            sourceMap: true, // Generate source maps
        }),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
        }),
      ],
    external: ['react', 'react-dom'],
},{
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
},
]