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
    console.log("asdf"); 
  }
}


class Point {
  constructor(xVal, yVal) {
    this.xVal = xVal
    this.yVal = yVal
  }
}

  var mapXMax = 1000;
  var mapYMax = 1000;

  var GridXLength = 100
  var GridYLength = 100

  var xScalar = mapXMax / GridXLength;
  var yScalar = mapYMax / GridYLength;

  var grid = new Array(GridXLength);


  var testObjects;

  //initialize 2D array
  for(var i = 0; i < GridXLength; i++) {
    grid[i] = new Array(GridYLength);
  }



  //test rectangles
  var a = new Point(1,2);
  var b = new Point(1,2);
  var c = new Point(1,2);
  var d = new Point(1,2);

  var rectTest = new Rectangle(a,b,c,d);
  var CircleTest = new Circle(a, 10);


