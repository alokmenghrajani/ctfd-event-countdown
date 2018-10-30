(() => {
  var now = Date.now();

  var f = ((element, seconds, prefix) => {
    if (seconds <= 0) {
      element.innerHTML = '&nbsp;';
      return;
    }
    var days = (seconds / 86400)|0;
    var hours = ((seconds % 86400) / 3600)|0;
    var minutes = ((seconds % 3600) / 60)|0;
    var seconds = seconds % 60;

    if (days > 0) {
      element.textContent = prefix + days + ' day' + (days > 1 ? 's' : '') +
          ', ' + hours + ' hour' + (hours > 1 ? 's' : '');
    } else if (hours > 0) {
      element.textContent = prefix + hours + ' hour' + (hours > 1 ? 's' : '') +
          ', ' + minutes + ' minute' + (minutes > 1 ? 's' : '');
    } else if (minutes > 0) {
      element.textContent = prefix + minutes + ' minute' + (minutes > 1 ? 's' : '') +
          ', ' + seconds + ' second' + (seconds > 1 ? 's' : '');
    } else {
      element.textContent = prefix + seconds + ' second' + (seconds > 1 ? 's' : '');
    }
  });

  setInterval(() => {
    var elapsed = ((Date.now() - now)/1000)|0;
    var elements = document.getElementsByClassName('ctfd-event-countdown');
    for (var i=0; i<elements.length; i++) {
      var element = elements[i];
      var seconds = document.getElementsByName("start_in")[0].content - elapsed;
      if (seconds > 0) {
        f(element, seconds, "Event starts in ");
      } else {
        seconds = document.getElementsByName("ends_in")[0].content - elapsed;
        f(element, seconds, "Event ends in ");
      }
    }
  }, 1000);
})()
