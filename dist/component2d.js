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
define(["require", "exports", "./component"], function (require, exports, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var draw2d = /** @class */ (function (_super) {
        __extends(draw2d, _super);
        function draw2d(canvasId, canvasInitWidth, canvasInitHeight) {
            var _this = _super.call(this) || this;
            _this.long = 10;
            _this.startX = 0;
            _this.startY = 0;
            _this.canvasDom = document.getElementById(canvasId);
            _this.imgDomDog = document.getElementById('dog');
            _this.cxt = _this.canvasDom.getContext('2d');
            _this.canvasDom.width = canvasInitWidth;
            _this.canvasDom.height = canvasInitHeight;
            _this.render2d(_this.long);
            return _this;
        }
        draw2d.prototype.getCanvasDom = function () {
            return this.canvasDom;
        };
        draw2d.prototype.getImageDom = function () {
            return this.imgDomDog;
        };
        return draw2d;
    }(component_1.util));
    exports.draw2d = draw2d;
});
