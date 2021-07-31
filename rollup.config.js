import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  plugins: [
    nodeResolve(),
    typescript(),
    commonjs,
    postcss({ extract: false, modules: true, minimize: true }),
    terser()
  ],
  external: Object.keys(pkg.peerDependencies || {}),
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true
  }
}
