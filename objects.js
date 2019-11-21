function Arrow(X1, Y1, X2, Y2) {
        this.x1 = X1;
        this.y1 = Y1;
        this.x2 = X2;
        this.y2 = Y2;
        this.length = Math.sqrt((Math.pow((this.x2 - this.x1), 2)) + (Math.pow((this.y2 - this.y1), 2)));

    this.getLength = function(){
        return this.length;
    }

    this.show = function() {
        fill(255);
        line(this.x1, this.y1, this.x2, this.y2);
        //console.log("line");
    }
}
