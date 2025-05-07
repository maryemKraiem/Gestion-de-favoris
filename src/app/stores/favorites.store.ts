import { Injectable, computed, signal } from '@angular/core';
import { Article } from '../models/article';


@Injectable({
  providedIn: 'root'
})
export class FavoritesStore {
  // Utilisation de signal pour stocker les IDs des articles favoris
  private favoriteIds = signal<number[]>([]);
  
  // Computed pour calculer le nombre total de favoris
  public totalFavorites = computed(() => this.favoriteIds().length);
  
  // Liste complète des articles favoris (à utiliser avec un service d'articles)
  public getFavoriteArticles(allArticles: Article[]): Article[] { 
    const ids = this.favoriteIds(); 
    return allArticles.filter(article => ids.includes(article.id)); 
  }
 
  // Méthode pour ajouter un favori
  public addFavorite(articleId: number): void {
    // Vérifie si l'article est déjà dans les favoris
    if (!this.favoriteIds().includes(articleId)) {
      this.favoriteIds.update(ids => [...ids, articleId]);
    }
  }
  
  // Méthode pour retirer un favori
  public removeFavorite(articleId: number): void {
    this.favoriteIds.update(ids => ids.filter(id => id !== articleId));
  }
  
  // Vérifier si un article est en favori
  public isFavorite(articleId: number) {
    return computed(() => this.favoriteIds().includes(articleId));
  }
}