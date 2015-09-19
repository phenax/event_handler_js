function emitAnother() {
  events.emit("gotohell");  // Emits 'gotohell'
}

events.bind("gogo",emitAnother);  // Listens to "gogo" event.

setTimeout(function() {
  events.emit("gogo");    // Emits 'click' after 5 seconds
},5000);

events.bind("gotohell",function() {
  alert("'gotohell' event fired");   // executes alert() when "gotohell" is fired.
});
