import { ImageLinks } from './image-links';

export interface Volume {
	title: string;
	subtitle?: string;
	authors: string[];
	publisher?: string;
	publishedDate: string;
	description?: string;
	pageCount?: number;
	printType: string;
	categories?: string[];
	maturityRating: string;
	allowAnonLogging: boolean;
	contentVersion: string;
	imageLinks?: ImageLinks;
	language: string;
	previewLink: string;
	infoLink: string;
	canonicalVolumeLink: string;
	averageRating?: number;
	ratingsCount?: number;
}
