import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuesto.js";

const imp = new Impuesto(8000000, 800000);
const jose = new Cliente("Jose Luis Valcarcel Bravo", imp);

    
    console.log(jose.calcularImp());


