import { util } from "./component";

export abstract class draw2d extends util{
    protected long:number;
    protected startX:number|string;
    protected startY:number|string;
    protected cxt: CanvasRenderingContext2D;
    private canvasDom:HTMLCanvasElement;
    private imgDomDog:HTMLImageElement;

    constructor(canvasId:string,canvasInitWidth:number,canvasInitHeight:number){
        super();
        this.long=10;
        this.startX=0;
        this.startY=0;
        this.canvasDom=document.getElementById(canvasId) as HTMLCanvasElement;
        this.imgDomDog=document.getElementById('dog') as HTMLImageElement;
        this.cxt=this.canvasDom.getContext('2d') as CanvasRenderingContext2D;
        this.canvasDom.width=canvasInitWidth;
        this.canvasDom.height=canvasInitHeight;
        this.render2d(this.long);
        
    }

    public getCanvasDom():HTMLCanvasElement{
        return this.canvasDom;
    }

    public getImageDom():HTMLImageElement{
        return this.imgDomDog;
    }
    
    abstract render2d(n:number):void;
}