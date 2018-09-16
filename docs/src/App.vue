<template lang="pug">
  div#app
    Header
    Hero.header__below
    Install
    RippleButton
    Footer
</template>

<script>
import Header from './components/Header'
import Install from './components/Install'
import Hero from './components/Hero'
import RippleButton from './components/RippleButton'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Install,
    Hero,
    RippleButton,
    Footer
  }
}
</script>

<style lang="scss">
.header__below {
  margin-top: $grid14x + $grid12x;
}
</style>
