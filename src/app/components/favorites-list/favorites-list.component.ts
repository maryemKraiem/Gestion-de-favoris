import { Component, computed } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { FavoritesStore } from '../../stores/favorites.store';

@Component({
  selector: 'app-favorites-list',
  standalone: false,
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.css'
})
export class FavoritesListComponent {
    constructor(
      public articleService: ArticlesService,
      public favoritesStore: FavoritesStore
    ) {}
    
    favoriteArticles = computed(() => {
      const allArticles = this.articleService.getArticles()();
      return this.favoritesStore.getFavoriteArticles(allArticles);
    });
  
 
    
    // Méthode pour retirer un article des favoris
    removeFromFavorites(articleId: number): void {
      this.favoritesStore.removeFavorite(articleId);
    }
}
