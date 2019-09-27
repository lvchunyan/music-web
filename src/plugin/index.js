import config from '@/libs/config'

export default (Vue) => {
  for (let name in config.plugin) {
    const value = config.plugin[name]
    Vue.use(require(`./${name}`).default, typeof value === 'object' ? value : undefined)
  }
}
