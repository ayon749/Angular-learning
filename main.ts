class Point {
   
    constructor(private x?:number, private y?:number){
        this.x=x;
        this.y=y;
    }
    draw()
    {
        console.log("X is : "+this.x +" and Y is : "+this.y);

    }

    getDistance(another:Point){
        //..................
    }
}

let point=new Point(1,2);



point.draw();

