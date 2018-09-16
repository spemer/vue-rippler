<template lang="pug">
  div#app
    Header
    Hero.header__below
    Readme
    Install
    RippleButton
    Footer
</template>

<script>
import Header from './components/Header'
import Hero from './components/Hero'
import Readme from './components/Readme'
import Install from './components/Install'
import RippleButton from './components/RippleButton'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Hero,
    Readme,
    Install,
    RippleButton,
    Footer,
  }
}
</script>

<style lang="scss">
.header__below {
  margin-top: $grid14x + $grid12x;
}
</style>
