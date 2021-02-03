import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PredictService {

  _url = 'http://192.168.99.100:8087/api';
  //_url = 'http://localhost:8080/api';

  constructor(private _http: HttpClient) { }

  predict(text_message) {
    return this._http.post<any>(this._url, text_message);
  }
}
