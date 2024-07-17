interface GraphObject extends Object {
  x: number, 
  y: number
}
function moveObject(obj: GraphObject, dx: number, dy: number) {
  obj.x += dx;
  obj.y += dy;
}