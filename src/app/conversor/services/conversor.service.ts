import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { Conversao, ConversaoResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  private readonly BASE_URL = 'https://data.fixer.io/api/latest';
  private readonly ACCESS_KEY = 'b69b9c586513e6c755b523056e6dbfec';

  constructor(private http: HttpClient) {}

  converter(conversao: Conversao): Observable<ConversaoResponse> {
    let params = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;

    return this.http.get<ConversaoResponse>(this.BASE_URL + params);
  }

  cotacaoDe(
    conversaoResponse: ConversaoResponse,
    conversao: Conversao
  ): string {
    if (conversaoResponse === undefined) {
      return '0';
    }

    return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
  }

  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '0';
    }

    return conversaoResponse.date;
  }
}
