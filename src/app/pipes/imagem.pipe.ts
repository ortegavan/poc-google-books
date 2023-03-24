import { Pipe, PipeTransform } from '@angular/core';
import { ImageLinks } from '../model/image-links';

@Pipe({
	name: 'imagem',
})
export class ImagemPipe implements PipeTransform {
	transform(imagem: ImageLinks): string {
		return imagem != undefined
			? imagem.thumbnail
			: 'assets/imagens/capa-indisponivel.png';
	}
}
