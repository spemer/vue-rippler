const VueRippler = {
  install(Vue, options) {

  	Vue.mixin({
      mounted() {
        var cleanUp,
            debounce,
            i,
            len,
            ripple,
            rippleContainer,
            ripples,
            makeRipple;

        debounce = function(func, delay) {
          var inDebounce;

          inDebounce = undefined;

          return function() {
            var args,
                context;

                context = this;
                args = arguments;
                clearTimeout(inDebounce);

                return inDebounce = setTimeout(function() {
                  return func.apply(context, args);
                }, delay);
          }
        }

        makeRipple = function(e) {
          var pos,
              ripple,
              setRipple,
              size,
              style,
              x,
              y;

              ripple = this;
              setRipple = document.createElement('span');

              size = ripple.offsetWidth;
              pos = ripple.getBoundingClientRect();
              x = e.clientX - pos.left - (size / 2);
              y = e.clientY - pos.top - (size / 2);
              style = 'top:' + y + 'px;left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;';

              ripple.rippleContainer.appendChild(setRipple);

          return setRipple.setAttribute('style', style);
        }

        cleanUp = function() {
          while (this.rippleContainer.firstChild) {
            this.rippleContainer.removeChild(this.rippleContainer.firstChild)
          }
        }

        ripples = document.querySelectorAll('[ripple]');

        for (i = 0, len = ripples.length; i < len; i++) {
          ripple = ripples[i];

          // set ripple parent style
          ripple.style.zIndex = '10000';
          ripple.style.position = 'relative';
          ripple.style.overflow = 'hidden';

          rippleContainer = document.createElement('div');
          rippleContainer.className = 'ripple--container';

          // set ripple container style
          rippleContainer.style.position = 'absolute';
          rippleContainer.style.top = '0';
          rippleContainer.style.right = '0';
          rippleContainer.style.bottom = '0';
          rippleContainer.style.left = '0';

          ripple.addEventListener('mousedown', makeRipple);
          ripple.addEventListener('mouseup', debounce(cleanUp, 2000));
          ripple.rippleContainer = rippleContainer;
          ripple.appendChild(rippleContainer);
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
          -webkit-animation: ripple 1000ms;\
                  animation: ripple 1000ms;\
        }\
        @-webkit-keyframes ripple {\
          to {\
            opacity: 0;\
            -webkit-transform: scale(2);\
                    transform: scale(2);\
          }\
        }\
        @keyframes ripple {\
          to {\
            opacity: 0;\
            -webkit-transform: scale(2);\
                    transform: scale(2);\
          }\
        }\
        '
        document.head.appendChild(styleEl)
      }
    })
  }
}

export default VueRippler;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueRippler);
}
