var xPos = 500;
var yPos = 500;

var player = document.getElementById("player");

var id;

function defaultPos() {
  player.style.left = xPos + 'px';
  player.style.top = yPos + 'px';
}

function keyLog(){
  document.addEventListener('keydown', function(event) {
    if(event.keyCode === 87) {
        console.log('Up was pressed');
        yPos-= 10;
        move();
    }
    if(event.keyCode === 83) {
        console.log('Down was pressed');
        yPos+= 10;
        move();
    }
    if(event.keyCode === 65){
        console.log('Left was pressed');
        xPos-= 10;
        move();
    }
    if(event.keyCode === 68){
        console.log('Right was pressed');
        xPos+= 10;
        move();
    }
});
}

function move() {
  player.style.left = xPos + 'px';
  player.style.top = yPos + 'px';
}
