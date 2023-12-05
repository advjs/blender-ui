import { createApp } from 'vue'
import App from '../App.vue'

import pkg from '../package.json'

/**
 * 控制台输出信息
 * @param name 名称
 * @param link 链接
 * @param color 颜色
 * @param emoji
 */
function consoleInfo(
  name: string,
  link: string,
  color = '#0078E7',
  emoji = '☁️',
) {
  // eslint-disable-next-line no-console
  console.log(
    `%c ${emoji} ${name} %c${link}`,
    `color: white; background: ${color}; padding:5px 0;`,
    `padding:4px 6px;border:1px solid ${color};`,
  )
}

export function statement() {
  consoleInfo(`ADV.JS Blender UI v${pkg.version}`, pkg.repository.url, 'black', '🎨')
}

export function init(selector = 'advjs-blender-ui-container') {
  statement()

  const app = createApp(App)
  app.mount(selector)
  return app
}

export function createBUI(selector = 'advjs-blender-ui-container', props: any = {}) {
  const app = createApp(App, {
    // title: 'Blender UI',
    ...props,
  })
  app.mount(selector)
  return app
}
