import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signal } from '../domain/signals';

@Injectable({
  providedIn: 'root'
})
export class StockSignalsService {

  constructor(private http: HttpClient) { }

  getSignalSmall() {
    return this.http.get<any>('assets/demo/data/signals.json')
                .toPromise()
                .then(res => res.data as Signal[])
                .then(data => data);
  }
}
