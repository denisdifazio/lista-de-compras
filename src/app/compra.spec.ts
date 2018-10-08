import { Compra } from "./compra";

describe("Compra", () => {
  it("deve criar nova instancia", () => {
    expect(new Compra()).toBeTruthy();
  });

  it("deve aceitar estes valores no construtor", () => {
    let compra = new Compra({
      texto: "teste",
      completada: true
    });
    expect(compra.texto).toEqual("teste");
    expect(compra.completada).toEqual(true);
  });
});
