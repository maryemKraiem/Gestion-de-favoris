import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    FavoritesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
