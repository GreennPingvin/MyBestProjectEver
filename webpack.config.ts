import path from 'path'
import type webpack from 'webpack'
import {
  type BuildEnv,
  type BuildMode,
  type BuildOptions,
  type BuildPaths
} from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
  locales: path.resolve(__dirname, 'public', 'locales'),
  buildLocales: path.resolve(__dirname, 'build', 'locales')
}

export default (env: BuildEnv): webpack.Configuration => {
  const mode: BuildMode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000

  const buildOptions: BuildOptions = {
    mode,
    paths,
    isDev,
    port: PORT
  }

  return buildWebpackConfig(buildOptions)
}
