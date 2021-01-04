let rectangles = [
  {width: 5, height: 10},
  {width: 5, height: 10},
{width: 5, height: 10}
];
let rectanglesAreas = rectangles.map( function ({width,height}){
  return width*height;
})
console.log(rectanglesAreas);