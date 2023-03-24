import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './views/livros/livros.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'livros',
		pathMatch: 'full',
	},
	{
		path: 'livros',
		component: LivrosComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
