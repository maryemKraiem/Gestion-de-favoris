import { Injectable, signal } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  private articles = signal<Article[]>([
    { id: 1, title: 'Introduction à Angular', description: 'Les bases du framework Angular' },
    { id: 2, title: 'Signals dans Angular', description: 'Nouveau système réactif pour Angular' },
    { id: 3, title: 'Gestion d\'état avec Signals', description: 'Comment gérer l\'état avec les signals' },
    { id: 4, title: 'Services injectables', description: 'Utilisation des services dans Angular' },
    { id: 5, title: 'Computed properties', description: 'Comment utiliser computed avec signals' }
  ]);

  public getArticles() {
    return this.articles;
  }
}
