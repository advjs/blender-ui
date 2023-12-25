import { createApp } from 'vue'
import App from '../components/BApp.vue'

import pkg from '../../package.json'

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

export interface PropertyOptions {
  object: object
  property: number | string | symbol
  label?: string
  type: string
  min?: number
  max?: number
  step?: number
  onChange?: (val: number) => void
}

export function createBUI({
  selector = '#advjs-blender-ui-container',
  props,
}: {
  selector?: string
  props: {
    panels: {
      properties: PropertyOptions[]
    }[]
  }
}) {
  const app = createApp(App, props)

  // 如果传入的是字符串，且没有找到对应的元素，则创建一个
  if (typeof selector === 'string' && !document.querySelector(selector)) {
    const targetEl = document.createElement('div')
    targetEl.id = 'advjs-blender-ui-container'
    targetEl.style.position = 'fixed'
    targetEl.style.top = '0'
    targetEl.style.right = '0'
    targetEl.style.zIndex = '9999'
    targetEl.style.width = '300px'

    document.body.appendChild(targetEl)

    selector = `#${targetEl.id}`
  }

  app.mount(selector)

  return {
    app,

    add<K extends string | number | symbol>(obj: Record<K, number | string | object>, property: K, min?: number, max?: number, step?: number) {
      const propertyOptions: PropertyOptions = {
        object: obj,
        property,
        label: property.toString(),
        type: typeof obj[property],
        min,
        max,
        step,
        // onChange: (val: number) => {
        //   obj[property] = val
        // },
      }
      props.panels[0].properties.push(propertyOptions)

      function label(text: string) {
        propertyOptions.label = text
      }
      return {
        /**
         * alias of name
         */
        label,
        name: label,
      }
    },

    addVector(obj: {
      x: number
      y: number
      z: number
    }) {
      const x = this.add(obj, 'x')
      const y = this.add(obj, 'y')
      const z = this.add(obj, 'z')

      function labels(arr: string[]) {
        x.label(arr[0])
        y.label(arr[1])
        z.label(arr[2])
      }

      return {
        /**
         * alias of names
         */
        labels,
        names: labels,
      }
    },
  }
}
