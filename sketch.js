/*
 * Cole Deushane
 * 27 November 2019
 * P5JS Bubble Sort Visual
*/

var heights = [];
var x;
var y;
var temp;
var sorted;
var sort_start;

function setup() {

    createCanvas(800, 500);
    x = 0;
    y = 0;
    sorted = false;
    sort_start = false;

    // initializes the heights of the lines
    for(var i = 0; i < width / 8; i++){
        heights[i] = random(height);
    }

    // console.log("Number of Lines: " + heights.length);

    }

function draw() {
    background(51);

    if(sort_start) {
        if(heights[y] < heights[y + 1]) {
            temp = heights[y];
            heights[y] = heights[y + 1];
            heights[y + 1] = temp;
        }

        y++;

        if(y >= heights.length - x - 1) {
            y = 0;
            x++;
        }

        if(x > heights.length){
            //console.log("Sorting Complete.")
            sorted = true;
        }

        for(var i = 0; i < heights.length; i++) {
            strokeWeight(7);
            if(heights[y] == heights[i] && !sorted) {
                stroke('red');
                line(i * 8, heights[i], i * 8, height);
            } else if(sorted) {
                stroke('green');
                line(i * 8, heights[i], i * 8, height);
            } else {
                stroke(255);
                line(i * 8, heights[i], i * 8, height);
            }
        }
    } else {
        for(var i = 0; i < heights.length; i++) {
            strokeWeight(7);
            stroke(255);
            line(i * 8, heights[i], i * 8, height);
        }
    }
}

function keyPressed() {
    if(key == ' ') {
        //console.log("space");
        sort_start = true;
    }
}
