//import {obstacles} from './obstacles'
var grid;
var xScalar;
var yScalar;

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

class twoDimensonalIndex {
  constructor(firstIndex, secondIndex) {
    this.firstIndex = firstIndex;
    this.secondIndex = secondIndex;
  }
}

function float2int (value) {
    return value | 0;
}

initialize();

function initialize() {
  createArray().then(function() {
    bufferObjects();
  });

}

function createArray() {
  return new Promise((resolve, reject) => {

  var mapXMax = 1000;
  var mapYMax = 1000;

  var GridXLength = 10;
  var GridYLength = 10;

  var xScalar = mapXMax / GridXLength;
  var yScalar = mapYMax / GridYLength;

  grid = new Array(GridXLength);

  for(var i = 0; i < GridXLength; i++) {
    grid[i] = new Array(GridYLength);
    if(i === GridXLength-1) {
      resolve();
    }
  }
  });
}

function bufferObjects() {
  for(let j = 0; j < obstacles.length; j++) {
    if(obstacles[j].type === "rectangle") {
      let tempCellsArray = [];
      for(let k = 0; k < 4; k++) {
        let xCell = float2int((obstacles[j][k].x / xScalar));
        let yCell = float2int((obstacles[j][k].y / yScalar));
        tempCellsArray[k] = (new twoDimensonalIndex(xCell, yCell));
        if(tempCellsArray.length === 4) {
          assignObjects(new Rectangle(new Point(obstacles[j][0].x, obstacles[j][0].y), new Point(obstacles[j][1].x, obstacles[j][1].y), new Point(obstacles[j][2].x, obstacles[j][2].y), new Point(obstacles[j][3].x, obstacles[j][3].y)), tempCellsArray);
        }
      }
    }
  }
}

function assignObjects(shape, cellLocs) {
  for(let i = 0; i < cellLocs.length; i++) {
    grid[cellLocs[i].firstIndex][cellLocs[i].secondIndex] = shape;
    if(i === cellLocs.length-1) {
      console.log(grid);
    }
  }
}
