import { Animal } from "./Animal";
import { IMakeNoise } from "./IMakeNoise";
import { IRun } from "./IRun";

class cachorro extends Animal implements IMakeNoise, IRun{
    
    constructor (nome: string,lifeTime: number){
        super(nome, lifeTime);
        this.lifeTime = lifeTime;
        this.nome = nome;
    }
    public run(): void{
        console.log(`${this.nome} pode correr!`);
    }
    public noise(): void {
        console.log(`${this.nome} emite som!`);
    }
}
export{cachorro};