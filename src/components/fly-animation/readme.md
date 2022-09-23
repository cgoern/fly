# fly-animation

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description                                            | Type      | Default     |
| ---------- | ---------- | ------------------------------------------------------ | --------- | ----------- |
| `autoplay` | `autoplay` | Wether the animation should start automatically.       | `boolean` | `false`     |
| `data`     | `data`     | The animation data as JSON-parsable string.            | `string`  | `undefined` |
| `height`   | `height`   | The height of the animation.                           | `string`  | `undefined` |
| `loop`     | `loop`     | Wether the animation should repeat infinitely          | `boolean` | `true`      |
| `name`     | `name`     | The name of the animation.                             | `string`  | `''`        |
| `url`      | `url`      | The URL to a JSON file, containing the animation data. | `string`  | `undefined` |
| `width`    | `width`    | The width of the animation.                            | `string`  | `undefined` |

## Methods

### `pause() => Promise<void>`

Pauses the animation.

#### Returns

Type: `Promise<void>`

### `play() => Promise<void>`

Plays the animation.

#### Returns

Type: `Promise<void>`

### `stop() => Promise<void>`

Stops the animation.

#### Returns

Type: `Promise<void>`

## CSS Custom Properties

| Name                     | Description                                      |
| ------------------------ | ------------------------------------------------ |
| `--fly-animation-height` | The height of the animation. Defaults to `auto`. |
| `--fly-animation-width`  | The width of the animation. Defaults to `auto`.  |

---
