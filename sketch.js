
var myLine = [];
var x1;
var y1;
var x2;
var y2;

function setup() {
    createCanvas(800, 400);
    background('grey');

    x1 = 800;
    y1 = 0;
    x2 = x1;
    y2 = 400;

    for(var i = 0; i < 800; i++){
        myLine[i] = new Arrow(x1, y1, x2, y2);
    }
}


function draw() {

    for(var i = 0; i < myLine.length; i++) {
        myLine[i].show();
    }

}
