export class Impuesto {
    constructor(monto_bruto_anual, deducciones) {
        this.monto_bruto_anual = monto_bruto_anual;
        this.deducciones = deducciones;
    }

    getMontoBrutoAnual() {
        return this.monto_bruto_anual;
    }

    setMontoBrutoAnual(nuevo_monto_bruto_anual) {
        this.monto_bruto_anual = nuevo_monto_bruto_anual;
    }

    getDeducciones() {
        return this.deducciones;
    }

    setDeducciones(nueva_deducciones) {
        this.deducciones = nueva_deducciones;
    }
}
