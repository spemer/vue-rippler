# vue-rippler

> Simple Vue.js plugin for custom ripple effect

[![Codeship](https://img.shields.io/codeship/3a192ae0-9502-0134-8f6e-1e693cf3975e/master.svg)](https://www.npmjs.com/package/vue-rippler)
[![Version](https://img.shields.io/npm/v/vue-rippler.svg)](https://www.npmjs.com/package/vue-rippler)
[![License](https://img.shields.io/npm/l/vue-rippler.svg)](https://www.npmjs.com/package/vue-rippler)

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

### Set ripple style, and customize as you want

``` css
<style>
/* play with some lines below */
[ripple] .ripple--container span {
  -webkit-transform: scale(0);
          transform: scale(0);
  border-radius: 100%;
  position: absolute;
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-animation: ripple 1000ms;
          animation: ripple 1000ms;
}

@-webkit-keyframes ripple {
  to {
    opacity: 0;
    -webkit-transform: scale(2);
            transform: scale(2);
  }
}

@keyframes ripple {
  to {
    opacity: 0;
    -webkit-transform: scale(2);
            transform: scale(2);
  }
}
</style>
```
