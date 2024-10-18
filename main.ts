import {Personaje} from "./Personaje";
import {Guerrero} from "./Guerrero";
import {Mago} from "./Mago";
import { MagoEvolucionado } from "./MagoEvolucionado";
import {GuerreroEvolucionado} from "./GuerreroEvolucionado";

let mago1 = new Mago("Morgana", 1, 100, 10);

let guerrero1 = new Guerrero ("Garen", 1, 100, 10);

let mago2 = new Mago("Lux", 1, 100, 10);

let guerrero2 = new Guerrero ("Yasuo", 1, 100, 10);


mago1.lanzarHechizo(guerrero1);

guerrero1.atacar(mago1);

mago2.lanzarHechizo(guerrero1);

guerrero2.atacar(guerrero1);

let mago1Evo:MagoEvolucionado = new MagoEvolucionado(mago1.getNombre(),mago1.getNivel(),mago1.getVida(),mago1.getMana(), "Congelar");
mago1Evo.lanzarHechizoPoderoso(guerrero1);

let guerrero1Evo:GuerreroEvolucionado = new GuerreroEvolucionado(guerrero1.getNombre(), guerrero1.getNivel(),guerrero1.getVida(),guerrero1.getFuerza(),"Ataque Doble");

guerrero1Evo.usarHabilidadEspecial(mago2);