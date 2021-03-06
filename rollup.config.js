import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-import-css'

export default {
  input: 'src/index.js',
  output: {
    file: 'a11y-assistant.min.js',
  },
  plugins: [
    css({ minify: true }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true
    }),
    nodeResolve({ browser: true }),
    babel({ 
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
      babelHelpers: 'bundled' 
    }),
    commonjs(),
    terser(),
  ],
};