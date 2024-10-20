import {Personaje} from "./Personaje";
import {MagoEvolucionado} from "./MagoEvolucionado";
export class Mago extends Personaje {
    protected mana:number;
    constructor(nombre:string, nivel:number, vida:number, mana:number) {
      super(nombre, nivel, vida);
      this.mana = mana;
    }

    setMana(mana:number) {
      this.mana = mana;
    }
  
    getMana():number {
      return this.mana;
    }
  
    atacar(personaje:Personaje):void {
      console.log(`${this.nombre} ataca basico ${2} puntos de fuerza.`);
      personaje.recibirDaño(10);
    }

    lanzarHechizo(personaje:Personaje):void{
        this.mana-=1;
      console.log(`${this.nombre} lanza un hechizo, le quedan ${this.mana} puntos de maná.`);
      personaje.recibirDaño(10);
    }
  }