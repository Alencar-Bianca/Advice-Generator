import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  URL: string = "https://api.adviceslip.com/advice/";

  getAdvice(id: number): Observable<any> {
    return this.httpClient.get(`${this.URL}${id}`).pipe(res=> res);
  }
}
