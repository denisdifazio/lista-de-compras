import { TestBed, async, inject } from "@angular/core/testing";

import { CompraService } from "./compra.service";
import { ApiService } from "./api.service";

describe("CompraService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [CompraService, ApiService] }));

  it("deve criar service", () => {
    const service: CompraService = TestBed.get(CompraService);
    expect(service).toBeTruthy();
  });
});
