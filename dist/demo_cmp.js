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
define(["require", "exports", "./component2d"], function (require, exports, component2d_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var draw = /** @class */ (function (_super) {
        __extends(draw, _super);
        function draw() {
            var _this = _super.call(this, 'canvas1', 1000, 200) || this;
            _this.startX = 10;
            _this.startY = 100;
            _this.distance = 0;
            _this.startWidth = 0;
            _this.progress = 0;
            return _this;
        }
        draw.prototype.update = function (t) {
            this.render2d(t * this.distance);
        };
        draw.prototype.render2d = function (l) {
            if (l > 0) {
                console.log(l);
                this.cxt.save();
                this.cxt.beginPath();
                this.cxt.fillStyle = "red";
                this.cxt.fillRect(this.startX, 50, l, 100);
                this.cxt.stroke();
                this.cxt.closePath();
                this.progress = l;
            }
            else {
                // 有重复可封装
                console.log(l);
                this.cxt.save();
                this.cxt.beginPath();
                this.cxt.fillStyle = "red";
                // 修补擦除bug
                this.cxt.clearRect(this.startX + 2, 50, l, 100);
                this.cxt.stroke();
                this.cxt.closePath();
                this.progress = l;
            }
        };
        draw.prototype.toTarget = function (x) {
            this.stop();
            this.startX = this.startX + this.progress;
            this.distance = x - this.startX;
            this.start();
        };
        return draw;
    }(component2d_1.draw2d));
    exports.draw = draw;
});
