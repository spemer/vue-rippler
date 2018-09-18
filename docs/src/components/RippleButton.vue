<template lang="pug">
  div#ripple-button
    div.container
      div.example(
        ripple="ripple"
      )
        p Click me!
</template>

<script>
export default {

}
</script>

<style lang="scss">

#ripple-button {

  .container {
    margin: 0 auto;
    height: $grid40x;
    position: relative;

    .example {
      top: 50%;
      margin: auto;
      outline: none;
      display: table;
      cursor: pointer;
      width: $grid80x;
      height: $grid20x;
      position: absolute;
      border-radius: $grid20x;
      background-color: $brand;
      transform: translateY(-50%);
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;

      @media #{$pablet} {
        width: $grid64x;
      }

      p {
        color: white;
        font-weight: 500;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
      }
    }
  }
}
</style>
