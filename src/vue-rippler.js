var VueRippler = {
  install: function install(Vue, options) {

    Vue.mixin({
      mounted: function mounted() {
        var length, ripple, rippleContainer;

        var debounce = function debounce(func, delay) {
          var bounce = undefined;

          return function () {
            var context = this;
            var args = arguments;
            clearTimeout(bounce);

            return bounce = setTimeout(function () {
              return func.apply(context, args);
            }, delay);
          };
        };

        var makeRipple = function makeRipple(e) {
          ripple = this;
          var setRipple = document.createElement('span');
          setRipple.className = 'ripple--body';

          var size = ripple.offsetWidth;
          var pos = ripple.getBoundingClientRect();
          var x = e.clientX - pos.left - size / 2;
          var y = e.clientY - pos.top - size / 2;
          var style = 'top:' + y + 'px;left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;';

          ripple.rippleContainer.appendChild(setRipple);

          return setRipple.setAttribute('style', style);
        };

        var removeRipple = function removeRipple() {
          while (this.rippleContainer.firstChild)
            this.rippleContainer.removeChild(this.rippleContainer.firstChild);
        };

        var ripples = document.querySelectorAll('[ripple]');

        for (var i = 0, length = ripples.length; i < length; i++) {
          ripple = ripples[i];
          // set ripple parent style
          ripple.style.overflow = 'hidden';
          ripple.style.position = 'relative';

          rippleContainer = document.createElement('div');
          rippleContainer.className = 'ripple--container';
          // set ripple container style
          rippleContainer.style.overflow = 'hidden';
          rippleContainer.style.position = 'absolute';
          rippleContainer.style.top = '0';
          rippleContainer.style.left = '0';
          rippleContainer.style.right = '0';
          rippleContainer.style.bottom = '0';

          ripple.addEventListener('mousedown', makeRipple);
          ripple.addEventListener('mouseup', debounce(removeRipple, 2000));
          ripple.rippleContainer = rippleContainer;
          ripple.appendChild(rippleContainer);
        }

        // ripple style
        var styleEl = document.createElement('style');
        styleEl.innerHTML = '[ripple] .ripple--container span {will-change: transform, opacity;overflow: hidden;-webkit-transform: scale(0);-moz-transform: scale(0);-ms-transform: scale(0);-o-transform: scale(0);transform: scale(0);-webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;position: absolute;opacity: 0.5;background-color: rgba(0, 0, 0, 0.1);-webkit-animation: rippler 1000ms;-moz-animation: rippler 1000ms;-o-animation: rippler 1000ms;animation: rippler 1000ms;}@-webkit-keyframes rippler {to {opacity: 0;-webkit-transform: scale(2);transform: scale(2);}}@-moz-keyframes rippler {to {opacity: 0;-webkit-transform: scale(2);-moz-transform: scale(2);transform: scale(2);}}@-o-keyframes rippler {to {opacity: 0;-webkit-transform: scale(2);-o-transform: scale(2);transform: scale(2);}}@keyframes rippler {to {opacity: 0;-webkit-transform: scale(2);-moz-transform: scale(2);-o-transform: scale(2);transform: scale(2);}}';
        document.head.appendChild(styleEl);
      }
    });
  }
};

if (typeof window !== 'undefined' && window.Vue)
  window.VueRippler = VueRippler;

export default VueRippler;
