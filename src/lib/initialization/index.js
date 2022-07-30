(function (history) {
  var pushState = history.pushState;
  history.pushState = function (state, _, pathname) {
    if (typeof history.onpushstate == "function") {
      history.onpushstate({
        state: state,
        pathname,
      });
    }
    return pushState.apply(history, arguments);
  };
})(window.history);
