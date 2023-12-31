# blender-ui

> Blender Style UI Components for Web based on Vue. Preview by [histoire](https://histoire.dev/).

**Work in progress...**

Blender UI is an intermediate state for [@advjs/gui](https://github.com/YunYouJun/advjs/tree/main/packages/gui).

## Usage

### NPM

```bash
# not published yet
pnpm add @advjs/blender-ui
```

```ts
import { createBUI, reactive } from '@advjs/blender-ui'

const props = reactive({
  // ...
})

createBUI({
  props
})
```

### CDN

```html
<script src="https://unpkg.com/@advjs/blender-ui@0.0.2-beta.5/dist/blender-ui.umd.cjs"></script>
<script>
const { createBUI, reactive } = window.BUI;
const props = reactive({
  // ...
});

createBUI({
  props
});
</script>
```

## Why?

- I'm developing editors for some projects ([advjs](https://github.com/YunYouJun/advjs) and others), I hope their UI to be refined and uniform.
- Blender is a great 3D software, its UI is also great and fits well with editors.

## Ref

- [User Interface | Blender](https://docs.blender.org/manual/en/latest/interface/index.html)
- [bfanger/pixi-inspector](https://github.com/bfanger/pixi-inspector/tree/main/packages/blender-elements)
