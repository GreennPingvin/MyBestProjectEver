import path from 'path'
import type webpack from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import { type BuildPaths } from '../build/types/config'
import { type RuleSetRule } from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: Pick<BuildPaths, 'src'> = {
    src: path.resolve(__dirname, '../../src/'),
  }
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('ts', 'tsx')

  config.module.rules = config.module.rules.map(
    (rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/ }
      }
      return rule
    }
  )
  config.module.rules.push(buildSvgLoader())
  config.module.rules.push(buildCssLoader(true))
  return config
}
