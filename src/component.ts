import { bezia } from "./bezia";

export abstract class util extends bezia{
    protected timer:any;
    protected static second:number;
    protected static beginTime:number;
    protected static duraction:number=3;
    private t:number;
    
    constructor(){
        super();
        this.t=0;
        util.second=0;
        util.beginTime=(new Date()).valueOf();
        util.duraction=2;
    }

    protected is_playing():boolean{
        return this.timer!==null;
    }

    protected start():void{
        util.beginTime=(new Date()).valueOf();
        if(this.is_playing()){
            this.timer=setInterval(()=>{
                this.t=((new Date()).valueOf()-util.beginTime)/(util.duraction*1000);
                if (this.t>=1){
                    this.t=this.t>>>0;
                    this.stop();
                }
                this.update(bezia.curve(this.t));
            },1000/60);
        }
    }

    protected stop():void{
       clearInterval(this.timer);
    }

    abstract update (l:number):void;
}