"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.cavalo = void 0;
var Animal_1 = require("./Animal");
var cavalo = /** @class */ (function (_super) {
    __extends(cavalo, _super);
    function cavalo(nome, lifeTime) {
        var _this = _super.call(this, nome, lifeTime) || this;
        _this.lifeTime = lifeTime;
        _this.nome = nome;
        return _this;
    }
    cavalo.prototype.run = function () {
        console.log("".concat(this.nome, " pode correr!"));
    };
    cavalo.prototype.noise = function () {
        console.log("".concat(this.nome, " emite som!"));
    };
    return cavalo;
}(Animal_1.Animal));
exports.cavalo = cavalo;
