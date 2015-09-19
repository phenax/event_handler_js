/*
A very simple event handler(pubsub)
*/

var events = {
  events: {},
  emit: function (e, moData) {
    if (this.events[e]) {
      this.events[e].forEach(function(func) {
        func(moData);
      });
    }
  },
  bind: function (e, func) {
    this.events[e] = this.events[e] || [];
    this.events[e].push(func);
  },
  unbind: function(e, func) {
    if (this.events[e]) {
      for (var i = 0; i < this.events[e].length; i++) {
        if (this.events[e][i] === func) {
          this.events[e].splice(i, 1);
          break;
        }
      }
    }
  }
};
