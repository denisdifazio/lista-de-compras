import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Compra } from "./compra";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private handleError(error: HttpErrorResponse) {
    console.error("ApiService::handleError", error);
    return Observable.throw(error);
  }

  public getTodasCompras(): Observable<Compra[]> {
    return this.http
      .get<Compra[]>(API_URL + "/compras")
      .pipe(catchError(this.handleError));
  }

  public createCompra(compra: Compra): Observable<Compra> {
    return this.http
      .post<Compra>(API_URL + "/compras", compra)
      .pipe(catchError(this.handleError));
  }

  public getCompraPorId(compraId: number): Observable<Compra> {
    return this.http
      .get<Compra>(API_URL + "/compras/" + compraId)
      .pipe(catchError(this.handleError));
  }

  public updateCompra(compra: Compra): Observable<Compra> {
    return this.http
      .put<Compra>(API_URL + "/compras/" + compra.id, compra)
      .pipe(catchError(this.handleError));
  }

  public deleteCompraPorId(compraId: number): Observable<{}> {
    return this.http
      .delete(API_URL + "/compras/" + compraId)
      .pipe(catchError(this.handleError));
  }
}
