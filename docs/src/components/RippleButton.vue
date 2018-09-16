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
      width: $grid80x;
      height: $grid20x;
      margin: auto;
      outline: none;
      display: table;
      cursor: pointer;
      position: absolute;
      border-radius: $grid20x;
      transform: translateY(-50%);
      background-color: $brand;
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

  [ripple] .ripple--container span {
    -webkit-transform: scale(0);
            transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75 !important;
    background-color: rgba(0, 0, 0, 0.1) !important;
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
}
</style>
