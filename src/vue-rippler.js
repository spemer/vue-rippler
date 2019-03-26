var VueRippler = {
  install: function install(Vue, options) {
    Vue.mixin({
      mounted: function mounted() {
        var length,
          bounce,
          ripple,
          rippleContainer

        function debounce(func, delay) {
          return function () {
            var context = this,
              args = arguments
            clearTimeout(bounce)

            return bounce = setTimeout(function () {
              return func.apply(context, args)
            }, delay)
          }
        }

        function makeRipple(e) {
          ripple = this
          var setRipple = document.createElement('span')
          setRipple.className = 'ripple--body'

          var size = ripple.offsetWidth,
            pos = ripple.getBoundingClientRect(),
            x = e.clientX - pos.left - size / 2,
            y = e.clientY - pos.top - size / 2,
            style = 'will-change: top, left, height, width, auto; zoom: 1; top: ' + y + 'px; left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;'

          ripple.rippleContainer.appendChild(setRipple)

          return setRipple.setAttribute('style', style)
        }

        function removeRipple() {
          while (this.rippleContainer.firstChild)
            this.rippleContainer.removeChild(this.rippleContainer.firstChild)
        }

        var ripples = document.querySelectorAll('[ripple]')

        for (var i = 0, length = ripples.length; i < length; i++) {
          ripple = ripples[i]
          ripple.style.overflow = 'hidden'
          ripple.style.position = 'relative'

          rippleContainer = document.createElement('div')
          rippleContainer.className = 'ripple--container'
          rippleContainer.style.zoom = '1'
          rippleContainer.style.overflow = 'hidden'
          rippleContainer.style.position = 'absolute'
          rippleContainer.style.transform = 'translate3d(0, 0, 0)'
          rippleContainer.style.webkitTransform = 'translate3d(0, 0, 0)'
          rippleContainer.style.willChange = 'top, left, right, bottom, auto'
          rippleContainer.style.top = '0'
          rippleContainer.style.left = '0'
          rippleContainer.style.right = '0'
          rippleContainer.style.bottom = '0'

          ripple.addEventListener('mousedown', makeRipple)
          ripple.addEventListener('mouseup', debounce(removeRipple, 2000))
          ripple.rippleContainer = rippleContainer
          ripple.appendChild(rippleContainer)
        }

        var styleEl = document.createElement('style')
        styleEl.innerHTML = '[ripple] .ripple--container .ripple--body {will-change:transform,opacity,auto;zoom:1;overflow:hidden;-webkit-transform:scale(0);-moz-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;position:absolute;opacity:0.5;background-color:rgba(0,0,0,0.1);-webkit-animation:rippler 1000ms;-moz-animation:rippler 1000ms;-o-animation:rippler 1000ms;animation:rippler 1000ms;}@-webkit-keyframes rippler{to{opacity:0;-webkit-transform:scale(2);transform:scale(2);}}@-moz-keyframes rippler{to{opacity:0;-webkit-transform:scale(2);-moz-transform:scale(2);transform:scale(2);}}@-o-keyframes rippler{to{opacity:0;-webkit-transform:scale(2);-o-transform:scale(2);transform:scale(2);}}@keyframes rippler{to{opacity:0;-webkit-transform:scale(2);-moz-transform:scale(2);-o-transform:scale(2);transform:scale(2);}}'
        styleEl.id = 'ripple-effect-style'
        if (!document.getElementById('ripple-effect-style'))
          document.head.appendChild(styleEl)
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue)
  window.VueRippler = VueRippler

export default VueRippler
