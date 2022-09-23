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

## Control play state

Pass a `name` to the animation element & add some controls:

```html
<ctd-animation name="my-animation" url="/path/to/animation.json"></ctd-animation>

<button id="play">Play</button>
<button id="pause">Pause</button>
<button id="stop">Stop</button>
```

Ensure the custom element is defined:

```javascript
;(async () => {
  await customElements.whenDefined('ctd-animation')

  // ...
})()
```

Query selectors and call the element's methods:

```javascript
;(async () => {
  await customElements.whenDefined('ctd-animation')

  const animation = document.querySelector('ctd-animation')
  const play = document.querySelector('#play')
  const pause = document.querySelector('#pause')
  const stop = document.querySelector('#stop')

  play.onclick = async () => {
    await animation.play()
  }

  pause.onclick = async () => {
    await animation.pause()
  }

  stop.onclick = async () => {
    await animation.stop()
  }
})()
```
