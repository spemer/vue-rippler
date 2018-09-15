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
            showRipple;

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

        showRipple = function(e) {
          var pos,
              ripple,
              rippler,
              size,
              style,
              x,
              y;

              ripple = this;
              rippler = document.createElement('span');

              size = ripple.offsetWidth;
              pos = ripple.getBoundingClientRect();
              x = e.pageX - pos.left - (size / 2);
              y = e.pageY - pos.top - (size / 2);
              style = 'top:' + y + 'px;left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;';
              ripple.rippleContainer.appendChild(rippler);

          return rippler.setAttribute('style', style);
        }

        cleanUp = function() {
          while (this.rippleContainer.firstChild) {
            this.rippleContainer.removeChild(this.rippleContainer.firstChild)
          }
        }

        ripples = document.querySelectorAll('[ripple]');

        for (i = 0, len = ripples.length; i < len; i++) {
          ripple = ripples[i];

          ripple.style.position = 'relative';
          ripple.style.overflow = 'hidden';

          rippleContainer = document.createElement('div');
          rippleContainer.className = 'ripple--container';

          rippleContainer.style.position = 'absolute';
          rippleContainer.style.top = '0';
          rippleContainer.style.right = '0';
          rippleContainer.style.bottom = '0';
          rippleContainer.style.left = '0';

          ripple.addEventListener('mousedown', showRipple);
          ripple.addEventListener('mouseup', debounce(cleanUp, 2000));
          ripple.rippleContainer = rippleContainer;
          ripple.appendChild(rippleContainer);
        }
      }
    })
  }
}

export default VueRippler

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueRippler);
}
