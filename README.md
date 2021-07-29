# Donut Chart JS

<p align="center">
  <img src="https://user-images.githubusercontent.com/22045163/127536703-c31300ef-23e4-4831-8191-1600c40012db.gif" alt="preview" />
</p>

<h3 align="center">Donut-Chart-JS</h3>

<p align="center">
  <a href="./LICENSE">
    <img alt="NPM" src="https://img.shields.io/npm/l/donut-chart-js">
  </a>
  <a href="https://github.com/Seogeurim/donut-chart-js/releases">
    <img alt="npm" src="https://img.shields.io/npm/v/donut-chart-js">
  </a>
</p>

<p align="center">Simple Donut Chart using JavaScript and HTML5 Canvas.</p>

## Installation

```shell
yarn add donut-chart-js
```

or

```shell
npm install donut-chart-js
```

then

```js
import DonutChart from 'donut-chart-js';
```

## Usage

Create canvas element on your HTML

```html
<canvas id="myChart" width="500px" height="500px"></canvas>
```

then write script

```js
new DonutChart(document.getElementById('myChart'), {
  data: [
    { label: 'red', value: 120, color: '#F15F5F' },
    { label: 'green', value: 250, color: '#BCE55C' },
    { label: 'blue', value: 180, color: '#B2CCFF' },
    { label: 'yellow', value: 70, color: '#FFE08C' },
  ],
  holeSize: 0.6,
  animationSpeed: 0.5,
});
```

## options

|               option | type     | default | description                                               |
| -------------------: | :------- | :------ | :-------------------------------------------------------- |
|     **`data.label`** | `string` | `0`     | The name or label of the donut.                           |
|     **`data.value`** | `number` | `100`   | The value of the donut.                                   |
|     **`data.color`** | `string` | `50`    | The color of the donut.                                   |
|       **`holeSize`** | `number` | `0`     | (Optional) The hole size of the donut. Use `0-1` value.   |
| **`animationSpeed`** | `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
