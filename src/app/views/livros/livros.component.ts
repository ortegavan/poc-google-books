import { Component } from '@angular/core';
import { debounceTime, filter, switchMap } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-lista-livros',
	templateUrl: './livros.component.html',
	styleUrls: ['./livros.component.css'],
})
export class LivrosComponent {
	busca = new FormControl();

	resultado$ = this.busca.valueChanges.pipe(
		debounceTime(500),
		filter((value) => value.length > 1),
		switchMap((value) => {
			return this.service.buscar(value);
		}),
	);

	constructor(private service: LivroService) {}
}
