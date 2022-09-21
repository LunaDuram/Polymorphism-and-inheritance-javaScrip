import { cavalo } from "./cavalo";
import { IMakeNoise } from "./IMakeNoise";
import { IRun } from "./IRun";

const Cavalo = new cavalo ('Sven',100 );

function takeOff(Animal: IMakeNoise){
    Animal.noise();
}
function run(Animal: IRun){
    Animal.run();
}

takeOff(Cavalo);
run(Cavalo);

