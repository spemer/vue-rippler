# vue-rippler

> Simple Vue.js plugin for custom ripple effect

[![Gzipsize](https://img.badgesize.io/spemer/vue-rippler/master/src/vue-rippler.js?compression=gzip)](https://www.npmjs.com/package/vue-rippler)
[![Version](https://img.shields.io/npm/v/vue-rippler.svg)](https://www.npmjs.com/package/vue-rippler)
[![License](https://img.shields.io/npm/l/vue-rippler.svg)](https://www.npmjs.com/package/vue-rippler)

[Live Demo](https://spemer.github.io/vue-rippler/)

## Installation

``` bash
npm i vue-rippler --save
```

## Usage

``` javascript
// main.js
import Vue from 'vue'
import VueRippler from 'vue-rippler'

Vue.use(VueRippler)
```

### Use in component

``` javascript
// Vue.js template
<template>
  <my-component ripple="ripple"></my-component>
</template>
```

### Set ripple style, and customize as you want(Optional)

``` css
<style>
/*
play with some lines below
*/
[ripple] .ripple--container span {
  -webkit-transform: scale(0);
          transform: scale(0);
  border-radius: 100%;
  position: absolute;
  opacity: 0.75;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-animation: rippler 1000ms;
          animation: rippler 1000ms;
}
</style>
```

## Author

[Hyouk Seo(Spemer)](https://github.com/spemer)
