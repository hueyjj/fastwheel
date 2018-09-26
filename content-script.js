var lastPt = null;

window.addEventListener("mousedown", (e) => {
  // Middle mouse button
  if (e.button == 1) {
    lastPt = {
      x: e.x,
      y: e.y,
    }
  }
});

window.addEventListener("mouseup", (e) => {
  if (e.button == 1) {
    let currPt = {
      x: e.x,
      y: e.y,
    };
    let deltaX = currPt.x - lastPt.x;
    let deltaY = lastPt.y - currPt.y;
    if (Math.abs(deltaX) > 100 || Math.abs(deltaY) > 100) {
      let verticalMovement = Math.abs(deltaY) > Math.abs(deltaX) ? true : false;
      if (verticalMovement) {
        if (deltaY > 0) {
          // Wheel up
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        } else {
          // Wheel down
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          })
        }
      } else {
        if (deltaX > 0) {
          // Wheel right
          window.history.forward();
        } else {
          // Wheel left
          window.history.back();
        }
      }
    }
  }
});
