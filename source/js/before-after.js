var thumb = toggle.querySelector(".range-controls__bar");
var scale = document.querySelector(".range-controls__toggle");
var photoBefore = document.querySelector(".example__photo-before");
var scaleWidth = scale.offsetWidth;
var thumbWidth = thumb.offsetWidth;

thumb.onmousedown = function(event) {
  event.preventDefault();

  var shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    var newLeft = event.clientX - shiftX - toggle.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    var rightEdge = toggle.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + "px";
    resizeImage(newLeft);
  }

  function onMouseUp() {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }

};

thumb.ondragstart = function() {
  return false;
};

var resizeImage = function (value) {

  var togglePositionRel = parseInt(value / (scaleWidth - thumbWidth) * 100);
  photoBefore.style.width = 100 - togglePositionRel + "%";
};
