import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'autoria',
})
export class AutoriaPipe implements PipeTransform {
	transform(autores: string[]): string {
		return autores == undefined
			? ''
			: autores
					.reduce((acumulador, atual) => {
						return acumulador + atual + ', ';
					}, '')
					.slice(0, -2);
	}
}
