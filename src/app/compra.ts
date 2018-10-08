export class Compra {
  id: number;
  texto: string = "";
  completada: boolean = false;

  constructor(valores: Object = {}) {
    Object.assign(this, valores);
  }
}
