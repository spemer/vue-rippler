<template>
  <div class="example" ripple="ripple">
    <p>Click me!</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
  position: relative;

  .example {
    top: 50%;
    width: 320px;
    height: 80px;
    margin: auto;
    outline: none;
    display: table;
    cursor: pointer;
    position: absolute;
    border-radius: 80px;
    transform: translateY(-50%);
    background-color: #42b883;

    p {
      color: white;
      text-align: center;
      display: table-cell;
      vertical-align: middle;
      font-family: sans-serif;
    }
  }
}



// ripple
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
</style>
