import {Personaje} from "./Personaje";
//import {GuerreroEvolucionado} from "./GuerreroEvolucionado"
export class Guerrero extends Personaje {
    protected fuerza:number;
    constructor(nombre:string, nivel:number, vida:number, fuerza:number) {
      super(nombre, nivel, vida);
      this.fuerza = fuerza;
    }

    setFuerza(fuerza:number) {
        this.fuerza = fuerza;
      }
    
      getFuerza():number {
        return this.fuerza;
      }
  
    atacar(personaje:Personaje):void {
      console.log(`${this.nombre} ataca con una espada con ${this.fuerza} puntos de fuerza.`);
      personaje.recibirDaño(10);
    }
  }