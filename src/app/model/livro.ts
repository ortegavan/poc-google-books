import { Volume } from './volume';

export interface Livro {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: Volume;
}
