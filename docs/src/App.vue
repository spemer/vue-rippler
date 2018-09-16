<template lang="pug">
  div#app
    Header
    Install.header__below
    //- Gist
    RippleButton
    Footer
</template>

<script>
import Header from './components/Header'
import Install from './components/Install'
// import Gist from './components/Gist'
import RippleButton from './components/RippleButton'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Install,
    // Gist,
    RippleButton,
    Footer
  }
}
</script>

<style lang="scss">
.header__below {
  margin-top: $grid14x + $grid28x;
}
</style>
