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
exports.preguica = void 0;
var Animal_1 = require("./Animal");
var preguica = /** @class */ (function (_super) {
    __extends(preguica, _super);
    function preguica(nome, lifeTime) {
        var _this = _super.call(this, nome, lifeTime) || this;
        _this.nome;
        _this.lifeTime;
        return _this;
    }
    preguica.prototype.climb = function () {
        console.log("".concat(this.nome, " sobe em \u00E1rvores!"));
    };
    preguica.prototype.noise = function () {
        console.log("".concat(this.nome, " emite som!"));
    };
    return preguica;
}(Animal_1.Animal));
exports.preguica = preguica;
