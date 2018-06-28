class Rectangle {
  constructor(topLeft, topRight, bottomLeft, bottomRight){
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }
}

class Circle {
  constructor(center, radius){
    this.center = center;
    this.radius = radius;
  }
}

class Point {
  constructor(xVal, yVal) {
    this.xVal = xVal;
    this.yVal = yVal;
  }
}

initialize(Point, Rectangle, Circle);

function initialize(Point, Rectangle, Circle) {
  var grid = createArray();


}

function createArray() {
  var mapXMax = 1000;
  var mapYMax = 1000;

  var GridXLength = 100
  var GridYLength = 100

  var xScalar = mapXMax / GridXLength;
  var yScalar = mapYMax / GridYLength;

  var grid = new Array(GridXLength);

  for(var i = 0; i < GridXLength; i++) {
    grid[i] = new Array(GridYLength);
  }
  //make sure to watch for synchronous errors
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      grid[i][j] = ;
    }
  }

  return grid;
}
