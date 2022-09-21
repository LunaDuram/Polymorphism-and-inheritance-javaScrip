import { Animal } from "./Animal";
import { IMakeNoise } from "./IMakeNoise";
import { IClimbTree } from "./IClimbtree";

class preguica extends Animal implements IMakeNoise, IClimbTree{

    constructor( nome: string, lifeTime: number){
        super(nome, lifeTime);
        this.nome;
        this.lifeTime;
    }

    public climb(): void{
        console.log(`${this.nome} sobe em árvores!`);
    }
    public noise(): void{
        console.log(`${this.nome} emite som!`);
    }
}
export{preguica};
