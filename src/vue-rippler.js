const VueRippler = {
  install(Vue, options) {

  	Vue.mixin({
      mounted() {
        let removeRipple,
            debounce,
            length,
            ripple,
            rippleContainer,
            ripples,
            makeRipple;

        debounce = function(func, delay) {
          let inDebounce = undefined;

          return function() {
            let context = this
            let args = arguments
            clearTimeout(inDebounce)

            return inDebounce = setTimeout(function() {
              return func.apply(context, args)
            }, delay)
          }
        }

        makeRipple = function(e) {
          let ripple = this
          let setRipple = document.createElement('span')

          let size = ripple.offsetWidth
          let pos = ripple.getBoundingClientRect()
          let x = e.clientX - pos.left - (size / 2)
          let y = e.clientY - pos.top - (size / 2)
          let style = 'top:' + y + 'px;left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;'

          ripple.rippleContainer.appendChild(setRipple)

          return setRipple.setAttribute('style', style)
        }

        removeRipple = function() {
          while (this.rippleContainer.firstChild)
            this.rippleContainer.removeChild(this.rippleContainer.firstChild)
        }

        ripples = document.querySelectorAll('[ripple]')

        for (let i = 0, length = ripples.length; i < length; i++) {
          ripple = ripples[i]

          // set ripple parent style
          ripple.style.zIndex = '10000'
          ripple.style.position = 'relative'
          ripple.style.overflow = 'hidden'

          rippleContainer = document.createElement('div')
          rippleContainer.className = 'ripple--container'

          // set ripple container style
          rippleContainer.style.position = 'absolute'
          rippleContainer.style.top = '0'
          rippleContainer.style.right = '0'
          rippleContainer.style.bottom = '0'
          rippleContainer.style.left = '0'

          ripple.addEventListener('mousedown', makeRipple)
          ripple.addEventListener('mouseup', debounce(removeRipple, 2000))
          ripple.rippleContainer = rippleContainer
          ripple.appendChild(rippleContainer)
        }

        // ripple style
        let styleEl = document.createElement('style')
        styleEl.innerHTML = '\
          [ripple] .ripple--container span {\
            -webkit-transform: scale(0);\
                    transform: scale(0);\
            border-radius: 100%;\
            position: absolute;\
            opacity: 0.5;\
            background-color: rgba(0, 0, 0, 0.1);\
            -webkit-animation: rippler 1000ms;\
                    animation: rippler 1000ms;\
          }\
          @-webkit-keyframes rippler {\
            to {\
              opacity: 0;\
              -webkit-transform: scale(2);\
                      transform: scale(2);\
            }\
          }\
          @keyframes rippler {\
            to {\
              opacity: 0;\
              -webkit-transform: scale(2);\
                      transform: scale(2);\
            }\
          }'
        document.head.appendChild(styleEl)
      }
    })
  }
}

export default VueRippler

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueRippler)
}
