"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cavalo_1 = require("./cavalo");
var Cavalo = new cavalo_1.cavalo('Sven', 100);
function takeOff(Animal) {
    Animal.noise();
}
function run(Animal) {
    Animal.run();
}
takeOff(Cavalo);
run(Cavalo);
