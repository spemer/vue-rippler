<template lang="pug">
  div#hero
    div.container
      div.hero__container
        img.hero__container--img(
          src="../assets/metacard.png"
        )
</template>

<script>
export default {
  data () {
    return {
    }
  },

}
</script>

<style lang="scss">

#hero {

  .hero__container {

    .hero__container--img {
      margin: 0 auto;
      display: block;
      height: $grid40x;
    }
  }
}
</style>
