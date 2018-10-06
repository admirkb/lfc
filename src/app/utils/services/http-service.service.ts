import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Headers, Http, Request, Response } from '@angular/http';

export interface RequestParams {
  [key: string]: string | string[] | number | number[];
}

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }


  get(url: string, params?: RequestParams): Observable<any> {
    return of (this.http.get(url))
  }

}



