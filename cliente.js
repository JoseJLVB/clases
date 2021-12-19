export class Cliente {
    constructor(nombre, impuesto) {
        this.nombre = nombre;
        this.impuesto = impuesto;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre() {
        this.nombre = nuevo_nombre;
    }

    calcularImp() {
    
        const monto_bruto_anual = this.impuesto.getMontoBrutoAnual();
        const deducciones = this.impuesto.getDeducciones();
        return (monto_bruto_anual - deducciones) * 0.21;
    }
}
