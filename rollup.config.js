import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'dest/index.js',
    name: 'formvalidation',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
};
