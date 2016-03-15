// this takes in events of all sorts
// if the event is midi, pass the identifier to triggered
// sets up the event listener which eventually triggers animationController
window.addEventListener("keydown", function (e, data){
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    var id = e.keyCode;
    console.log("in key-input", id);
    socket.emit('animation_output', id);
    animationController.trigger(id);
    e.preventDefault();
});