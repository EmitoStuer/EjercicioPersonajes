
export class Personaje{
    protected nombre:string;
    protected nivel:number;
    protected vida:number;

    constructor(nombre:string, nivel:number,vida:number){
        this.nombre=nombre;
        this.nivel=nivel;
        this.vida=vida;
    }

    setNombre(nombre:string) {
        this.nombre = nombre;
    }

    getNombre():string{
        return this.nombre;
    }

    setNivel(nivel:number) {
        this.nivel = nivel;
    }

    getNivel() :number{
        return this.nivel;
    }

    setVida(vida:number) {
        this.vida = vida;
    }

    getVida():number {
        return this.vida;
    }

    atacar(personaje : Personaje) {
        console.log(`${this.nombre} ataca con fuerza.`);
    }

    recibirDaño(puntos:number) {
        this.vida -= puntos;
        console.log(`${this.nombre} ha recibido ${puntos} puntos de daño. Vida restante: ${this.vida}`);
    }
    
}