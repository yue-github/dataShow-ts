define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bezia = /** @class */ (function () {
        function bezia() {
        }
        // 无变化
        bezia.average = function (t) {
            return t;
        };
        bezia.curve = function (t) {
            return Math.pow(t, 2);
        };
        bezia.s = function (t) {
        };
        return bezia;
    }());
    exports.bezia = bezia;
});
