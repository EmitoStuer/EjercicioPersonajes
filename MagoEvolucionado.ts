import {Mago} from "./Mago";
import {Personaje} from "./Personaje";
export class MagoEvolucionado extends Mago {
    private hechizoPoderoso:string;
    constructor(nombre:string, nivel:number, vida:number, mana:number,hechizoPoderoso:string) {
      super(nombre, nivel, vida, mana);
      this.hechizoPoderoso = hechizoPoderoso;
    }

    getHechizoPoderoso():string{
        return this.hechizoPoderoso;
    }
  
    lanzarHechizoPoderoso(personaje:Personaje) {
      console.log(`${this.nombre} lanza el hechizo poderoso: ${this.hechizoPoderoso}`);
        personaje.recibirDaño(20);
    }
  }