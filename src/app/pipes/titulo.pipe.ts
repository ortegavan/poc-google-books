import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'titulo',
})
export class TituloPipe implements PipeTransform {
	transform(titulo: string): string {
		const size = 36;
		return titulo.length > size ? titulo.slice(0, size) + '...' : titulo;
	}
}
