import type webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
