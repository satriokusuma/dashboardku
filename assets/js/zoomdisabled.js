const addMaximumScaleToMetaViewport = () => {
    const el = document.querySelector('meta[name=viewport]');
  
    if (el !== null) {
      let content = el.getAttribute('content');
      let re = /maximum\-scale=[0-9\.]+/g;
  
      if (re.test(content)) {
          content = content.replace(re, 'maximum-scale=1.0');
      } else {
          content = [content, 'maximum-scale=1.0'].join(', ')
      }
  
      el.setAttribute('content', content);
    }
  };
  
  const disableIosTextFieldZoom = addMaximumScaleToMetaViewport;
  function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }
  // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios/9039885#9039885
  const checkIsIOS = () =>
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  if (checkIsIOS()) {
    disableIosTextFieldZoom();
  }