import { draw2d } from "./component2d";

export class draw extends draw2d{
    private distance:number;
    protected startX:number|string;
    protected startY:number|string;
    protected startWidth:number;
    protected progress:number;

    constructor(){
        super('canvas1',1000,200);
        this.startX=<number>10;
        this.startY=<number>100;
        this.distance=0;
        this.startWidth=0;
        this.progress=0;
    }

    update(t:number){
        this.render2d(t*this.distance)
    }

    render2d(l:number){
        if(l>0){
            console.log(l)
            this.cxt.save();
            this.cxt.beginPath();
            this.cxt.fillStyle="red";
            this.cxt.fillRect(<number>this.startX,50,l,100);
            this.cxt.stroke();
            this.cxt.closePath();
            this.progress=l;
        }else{
            // 有重复可封装
            console.log(l)
            this.cxt.save();
            this.cxt.beginPath();
            this.cxt.fillStyle="red";
            // 修补擦除bug
            this.cxt.clearRect(<number>this.startX+2,50,l,100);
            this.cxt.stroke();
            this.cxt.closePath();
            this.progress=l;
        }
    }

    toTarget(x:number):void{
        this.stop();
        this.startX=<number>this.startX+this.progress;
        this.distance=x-this.startX;
        this.start();
    }
     
}