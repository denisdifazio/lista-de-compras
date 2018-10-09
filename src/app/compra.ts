export class Compra {
  id: string;
  texto: string = "";
  completada: boolean = false;

  constructor(valores: Object = {}) {
    Object.assign(this, valores);
  }
}
