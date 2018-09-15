<template lang="pug">
  div#app
    Header
    Install.header__below
    RippleButton
    Footer
</template>

<script>
import Header from './components/Header'
import Install from './components/Install'
import RippleButton from './components/RippleButton'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Install,
    RippleButton,
    Footer
  }
}
</script>

<style lang="scss">
.header__below {
  margin-top: $grid14x + $grid16x;
}
</style>
