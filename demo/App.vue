<template>
  <div class="example" ripple="ripple"></div>
</template>

<script>
export default {

}
</script>

<style>
.example {
  width: 320px;
  height: 80px;
  outline: none;
  margin: 0 auto;
  cursor: pointer;
  background-color: #42b883;
}

[ripple] .ripple--container span {
  -webkit-transform: scale(0);
          transform: scale(0);
  border-radius: 100%;
  position: absolute;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.1);
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
