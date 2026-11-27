import { Injectable, Inject, InjectionToken } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";

import { Product } from "./product.model";



export const REST_URL = new InjectionToken("rest_url");



@Injectable({

  providedIn: "root"

})

export class RestDataSource {

    constructor(private http: HttpClient,

        @Inject(REST_URL) private url: string) { }



    getData(): Observable<Product[]> {

      return this.http.get<Product[]>(this.url);

    }

}
