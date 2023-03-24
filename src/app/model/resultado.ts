import { Livro } from './livro';

export interface Resultado {
	totalItems: number;
	items: Livro[];
}
