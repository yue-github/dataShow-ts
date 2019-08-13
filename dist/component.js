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
define(["require", "exports", "./bezia"], function (require, exports, bezia_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util = /** @class */ (function (_super) {
        __extends(util, _super);
        function util() {
            var _this = _super.call(this) || this;
            _this.t = 0;
            util.second = 0;
            util.beginTime = (new Date()).valueOf();
            util.duraction = 2;
            return _this;
        }
        util.prototype.is_playing = function () {
            return this.timer !== null;
        };
        util.prototype.start = function () {
            var _this = this;
            util.beginTime = (new Date()).valueOf();
            if (this.is_playing()) {
                this.timer = setInterval(function () {
                    _this.t = ((new Date()).valueOf() - util.beginTime) / (util.duraction * 1000);
                    if (_this.t >= 1) {
                        _this.t = _this.t >>> 0;
                        _this.stop();
                    }
                    _this.update(bezia_1.bezia.curve(_this.t));
                }, 1000 / 60);
            }
        };
        util.prototype.stop = function () {
            clearInterval(this.timer);
        };
        util.duraction = 3;
        return util;
    }(bezia_1.bezia));
    exports.util = util;
});
