import { draw } from "./demo_cmp";
import './dist/require.js'; 

class dogRun extends draw{
    
    constructor(){
        super();
        let go=new draw();
        this.getCanvasDom().style.background='#F0F0F0';
        // this.cxt.drawImage(this.getImageDom(),0,150,50,50)
        this.getCanvasDom().onmousedown=(E)=>{
            go.toTarget(E.x);
        }
    }
}

new dogRun();

// let canvas1=document.getElementById('canvas1') as HTMLCanvasElement;
// let cxt=canvas1.getContext('2d') as CanvasRenderingContext2D;
// let dogImg=document.getElementById('dog') as HTMLImageElement;
// cxt.save();
// cxt.drawImage(dogImg,10,10,200,200);