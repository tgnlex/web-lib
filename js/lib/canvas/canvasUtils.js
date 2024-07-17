function context(canvas) {
  let canvas = document.querySelector(`${canvas}`);
  let context = canvas.getContext('2d');
  return context
};


function rect(a, b, c, d, ctx = c) {
  return ctx.fillRect(a, b, c, d);
}


