import {Personaje} from "./Personaje";
import {Guerrero} from "./Guerrero";
export class GuerreroEvolucionado extends Guerrero{
  
    private habilidadEspecial : string;

    constructor(nombre:string, nivel:number, vida:number, fuerza:number,habilidadEspecial:string) {
      super(nombre, nivel, vida,fuerza);
      this.habilidadEspecial = habilidadEspecial;
    }

    getHabilidadEspecial():string{
        return this.habilidadEspecial;
    }
  
    usarHabilidadEspecial(personaje:Personaje) {
      console.log(`${this.nombre} usa su habilidad especial: ${this.habilidadEspecial}`);
      personaje.recibirDaño(20);
    }
  }