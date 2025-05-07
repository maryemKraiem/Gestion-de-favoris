import { Component } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { FavoritesStore } from '../../stores/favorites.store';

@Component({
  selector: 'app-article-list',
  standalone: false,
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  constructor(
    public articleService: ArticlesService,
    public favoritesStore: FavoritesStore
  ) {}
  
  // Méthode pour ajouter un article aux favoris
  addToFavorites(articleId: number): void {
    this.favoritesStore.addFavorite(articleId);
  }
  
  // Méthode pour retirer un article des favoris
  removeFromFavorites(articleId: number): void {
    this.favoritesStore.removeFavorite(articleId);
  }
}
