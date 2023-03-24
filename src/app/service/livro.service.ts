import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado } from '../model/resultado';

@Injectable({
	providedIn: 'root',
})
export class LivroService {
	private readonly url = 'https://www.googleapis.com/books/v1/volumes';
	constructor(private http: HttpClient) {}

	buscar(busca: string): Observable<Resultado> {
		const params = new HttpParams().append('q', busca);
		return this.http.get<Resultado>(this.url, { params });
	}
}
