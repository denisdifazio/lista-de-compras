import { TestBed, async, inject } from "@angular/core/testing";

import { CompraService } from "./compra.service";
import { Compra } from "./compra";

describe("CompraService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [CompraService] }));

  it("deve criar service", () => {
    const service: CompraService = TestBed.get(CompraService);
    expect(service).toBeTruthy();
  });

  describe("getTodasCompras()", () => {
    it("deve retornar um array vazio", inject(
      [CompraService],
      (service: CompraService) => {
        expect(service.getTodasCompras()).toEqual([]);
      }
    ));

    it("deve retornar todas as compras", inject(
      [CompraService],
      (service: CompraService) => {
        let compra1 = new Compra({ texto: "teste 1", completada: false });
        let compra2 = new Compra({ texto: "teste 2", completada: true });
        service.addCompra(compra1);
        service.addCompra(compra2);
        expect(service.getTodasCompras()).toEqual([compra1, compra2]);
      }
    ));
  });

  describe("addCompra(compra)", () => {
    it("deve incrementar o valor do id automaticamente", inject(
      [CompraService],
      (service: CompraService) => {
        let compra1 = new Compra({ texto: "teste 1", completada: false });
        let compra2 = new Compra({ texto: "teste 2", completada: true });
        service.addCompra(compra1);
        service.addCompra(compra2);
        expect(service.getCompraPorId(1)).toEqual(compra1);
        expect(service.getCompraPorId(2)).toEqual(compra2);
      }
    ));
  });

  describe("deleteCompraPorId(id)", () => {
    it("deve remover compra pelo id", inject(
      [CompraService],
      (service: CompraService) => {
        let compra1 = new Compra({ texto: "teste 1", completada: false });
        let compra2 = new Compra({ texto: "teste 2", completada: true });
        service.addCompra(compra1);
        service.addCompra(compra2);
        expect(service.getTodasCompras()).toEqual([compra1, compra2]);
        service.deleteCompraPorId(1);
        expect(service.getTodasCompras()).toEqual([compra2]);
        service.deleteCompraPorId(2);
        expect(service.getTodasCompras()).toEqual([]);
      }
    ));

    it("deve remover nada quando nao encontrar o id no array de compras", inject(
      [CompraService],
      (service: CompraService) => {
        let compra1 = new Compra({ texto: "teste 1", completada: false });
        let compra2 = new Compra({ texto: "teste 2", completada: true });
        service.addCompra(compra1);
        service.addCompra(compra2);
        expect(service.getTodasCompras()).toEqual([compra1, compra2]);
        service.deleteCompraPorId(3);
        expect(service.getTodasCompras()).toEqual([compra1, compra2]);
      }
    ));
  });

  describe("updateCompraPorId(id, valores)", () => {
    it("deve atualizar dados da compra com determinado id", inject(
      [CompraService],
      (service: CompraService) => {
        let compra = new Compra({ texto: "teste 1", completada: false });
        service.addCompra(compra);
        let novaCompra = service.updateCompraPorId(1, {
          texto: "teste 2"
        });
        expect(novaCompra.texto).toEqual("teste 2");
      }
    ));

    it("deve retornar null se a compra nao for encontrada", inject(
      [CompraService],
      (service: CompraService) => {
        let compra = new Compra({ texto: "teste 1", completada: false });
        service.addCompra(compra);
        let novaCompra = service.updateCompraPorId(2, {
          texto: "teste 2"
        });
        expect(novaCompra).toEqual(null);
      }
    ));
  });

  describe("toggleCompraCompletada(compra)", () => {
    it("deve retornar o valor atualizado da property 'completada'", inject(
      [CompraService],
      (service: CompraService) => {
        let compra = new Compra({ texto: "teste 1", completada: false });
        service.addCompra(compra);
        let novaCompra = service.toggleCompraCompletada(compra);
        expect(novaCompra.completada).toEqual(true);
        service.toggleCompraCompletada(compra);
        expect(novaCompra.completada).toEqual(false);
      }
    ));
  });
});
