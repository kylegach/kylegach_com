if ('classList' in document.createElement('div') && 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {
  document.documentElement.classList += 'js';
  var scriptSources = [
    'http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenLite.min.js',
    'http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TimelineMax.min.js',
    'http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/AttrPlugin.min.js',
    'http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/CSSPlugin.min.js',
    'http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/easing/EasePack.min.js',
    '/bundle.js'
  ];
  for ( var i=0; i<scriptSources.length; i++ ) {
    var script = document.createElement('script');
    script.src = scriptSources[i];
    document.getElementsByTagName('body')[0].appendChild(script);
  }
}
