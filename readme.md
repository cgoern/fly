# fly

Custom element for rendering Lottie animations.

[![npm publish](https://github.com/cgoern/fly/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/cgoern/fly/actions/workflows/npm-publish.yml)
![npm (scoped)](https://img.shields.io/npm/v/@cgoern/fly)

## Installation

```bash
npm install @cgoern/fly
```

## Usage

Add the module to your HTML `<head>`:

```html
<script type="module" src="/node_modules/@cgoern/fly/dist/animation/animation.esm.js"></script>
```

Or import the module in your JavaScript module:

```javascript
import '@cgoern/fly/dist/animation/animation.esm'
```

Pass an URL to a JSON file, containing the animation data:

```html
<fly-animation url="/path/to/animation.json"></fly-animation>
```

Pass a JSON string, containing the animation data:

```html
<fly-animation
  data='{"v": "5.0.1","fr": 10,"ip": 0,"op": 20,"w": 320,"h": 320, ...}'
></fly-animation>
```

Optionally, set width and height of the animation:

```html
<fly-animation url="/path/to/animation.json" width="320px" height="240px"></fly-animation>
```

Or use CSS custom properties to control the animation dimensions responsively:

```css
:root {
  --fly-animation-width: 320px;
  --fly-animation-height: 240px;
}

@media (min-width: 720px) {
  :root {
    --fly-animation-width: 480px;
    --fly-animation-height: 360px;
  }
}
```

---

You can find an overview of all supported attributes in the [component docs.](https://github.com/cgoern/fly/tree/main/src/components/fly-animation)

## Control play state

Pass a `name` to the animation element & add some controls:

```html
<fly-animation name="my-animation" url="/path/to/animation.json"></fly-animation>

<button id="play">Play</button>
<button id="pause">Pause</button>
<button id="stop">Stop</button>
```

Ensure the custom element is defined:

```javascript
;(async () => {
  await customElements.whenDefined('fly-animation')

  // ...
})()
```

Query selectors and call the element's methods:

```javascript
;(async () => {
  await customElements.whenDefined('fly-animation')

  const animation = document.querySelector('fly-animation')
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
