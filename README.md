# vue-rippler 🎉

> Simple Vue.js plugin for custom ripple effect

[![Gzipsize](https://img.badgesize.io/spemer/vue-rippler/master/src/vue-rippler.js?compression=gzip)](https://www.npmjs.com/package/vue-rippler)
[![Version](https://img.shields.io/npm/v/vue-rippler.svg)](https://www.npmjs.com/package/vue-rippler)
[![License](https://img.shields.io/npm/l/vue-rippler.svg)](https://github.com/spemer/vue-rippler)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/vuejs/awesome-vue#miscellaneous)

[Live Demo](https://spemer.github.io/vue-rippler/)

![vue-rippler.gif](https://github.com/spemer/vue-rippler/blob/master/docs/src/assets/vue-rippler.gif)

## Installation

``` bash
npm i vue-rippler --save
```

``` bash
yarn add vue-rippler
```

### CDNs

[jsDelivr](https://cdn.jsdelivr.net/npm/vue-rippler/),
[UNPKG](https://unpkg.com/vue-rippler/),
[bundle.run](https://bundle.run/vue-rippler)

## Usage

### main.js

``` javascript
// main.js
import Vue from 'vue'
import VueRippler from 'vue-rippler'

Vue.use(VueRippler)
```

### Use in component

``` javascript
// .vue template
<template>
  <my-component ripple></my-component>
</template>
```

### Set ripple style, and customize as you want(Optional)

``` css
<style>
/*
play with some lines below
*/
[ripple] .ripple--container .ripple--body {
  opacity: 0.5 !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  -webkit-animation: rippler 1000ms;
          animation: rippler 1000ms;
}
</style>
```

## Author

[Hyouk Seo(Spemer)](https://github.com/spemer)
