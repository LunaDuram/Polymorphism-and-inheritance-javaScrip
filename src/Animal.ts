abstract class Animal{
    public nome: string;
    public lifeTime: number;


    constructor ( nome: string, lifeTime: number){
        this.nome = nome;
        this.lifeTime = lifeTime;
    }
}

export {Animal};