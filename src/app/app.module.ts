import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoriaPipe } from './pipes/autoria.pipe';
import { ImagemPipe } from './pipes/imagem.pipe';
import { LivroComponent } from './views/livro/livro.component';
import { LivrosComponent } from './views/livros/livros.component';
import { TituloPipe } from './pipes/titulo.pipe';

@NgModule({
	declarations: [
		AppComponent,
		AutoriaPipe,
		ImagemPipe,
		LivroComponent,
		LivrosComponent,
  TituloPipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
