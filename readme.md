# Animation

Custom element for rendering Lottie animations.

[![npm publish](https://github.com/cortado-holding/animation/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/cortado-holding/animation/actions/workflows/npm-publish.yml)
![npm (scoped)](https://img.shields.io/npm/v/@cortado-holding/animation)

## Installation

```bash
npm install @cortado-holding/animation
```

## Usage

Add the module to your HTML `<head>`:

```html
<script
  type="module"
  src="/node_modules/@cortado-holding/animation/dist/animation/animation.esm.js"
></script>
```

Or import the module in your JavaScript module:

```javascript
import '@cortado-holding/animation/dist/animation/animation.esm'
```

Pass an URL to a JSON file, containing the animation data:

```html
<ctd-animation url="/path/to/animation.json"></ctd-animation>
```

Pass a JSON string, containing the animation data:

```html
<ctd-animation
  data='{"v": "5.0.1","fr": 10,"ip": 0,"op": 20,"w": 320,"h": 320, ...}'
></ctd-animation>
```

Optionally, set width and height of the animation:

```html
<ctd-animation url="/path/to/animation.json" width="320px" height="240px"></ctd-animation>
```

Or use CSS custom properties to control the animation dimensions responsively:

```css
:root {
  --ctd-animation-width: 320px;
  --ctd-animation-height: 240px;
}

@media (min-width: 720px) {
  :root {
    --ctd-animation-width: 480px;
    --ctd-animation-height: 360px;
  }
}
```

---

You can find an overview of all supported attributes in the [component docs.](https://github.com/Cortado-Holding/animation/tree/main/src/components/ctd-animation)
