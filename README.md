# vue-rippler

> Simple & clean Vue.js plugin for custom ripple effect

## Installation

``` bash
npm i vue-rippler
```

## Usage

``` javascript
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

### Set ripple style

``` css
<style>
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
