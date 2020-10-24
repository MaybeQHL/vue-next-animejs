// rollup.config.js

import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
// import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

import { terser } from 'rollup-plugin-terser';



// 导入package.json
import pkg from './package.json';



export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            name: 'VueNextAnimejs',
            sourcemap: false,
            format: 'umd',
        },
        {
            file: pkg.module,
            name: 'VueNextAnimejs',
            sourcemap: false,
            format: 'esm'
        },
    ],
    watch: {
        include: 'src/**',
    },
    plugins: [
        replace(),
        // All JSON files will be parsed by default,
        json(),
        resolve(),
        commonjs(),

        // Compile TypeScript files
        typescript({ useTsconfigDeclarationDir: true }),
        // babel({
        //     babelHelpers: 'runtime',
        //     extensions: ['.js', '.ts'],
        //     exclude: 'node_modules/**' // only transpile our source code
        // })
        terser(),
    ],
}