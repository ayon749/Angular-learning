export class Point {
   
    constructor(private _x?:number, private _y?:number){
       
    }
    draw()
    {
        console.log("X is : "+this._x +" and Y is : "+this._y);

    }
    

    getDistance(another:Point){
        //..................
    }
}