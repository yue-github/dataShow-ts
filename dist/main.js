var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./demo_cmp", "./dist/require.js"], function (require, exports, demo_cmp_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dogRun = /** @class */ (function (_super) {
        __extends(dogRun, _super);
        function dogRun() {
            var _this = _super.call(this) || this;
            var go = new demo_cmp_1.draw();
            _this.getCanvasDom().style.background = '#F0F0F0';
            // this.cxt.drawImage(this.getImageDom(),0,150,50,50)
            _this.getCanvasDom().onmousedown = function (E) {
                go.toTarget(E.x);
            };
            return _this;
        }
        return dogRun;
    }(demo_cmp_1.draw));
    new dogRun();
});
// let canvas1=document.getElementById('canvas1') as HTMLCanvasElement;
// let cxt=canvas1.getContext('2d') as CanvasRenderingContext2D;
// let dogImg=document.getElementById('dog') as HTMLImageElement;
// cxt.save();
// cxt.drawImage(dogImg,10,10,200,200);
