import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Result {
  title: string;
  snippet: string;
  pageid: number;
}

@Component({
  selector: 'WikipediaComponent',
  template: `
    <h1>Consultando a Wiki API</h1>
    <input [(ngModel)]="query" placeholder="Digite sua pesquisa aqui">
    <button (click)="search()">Buscar</button>
    <div *ngFor="let result of results">
      <h2>{{result.title}}</h2>
      <p>{{result.snippet}}</p>
      <a href="{{result.pageid}}">Leia mais...</a>
    </div>
  `,
})
export class WikipediaComponent {
  query = '';
  results: Result[] = [];

  constructor(private http: HttpClient) {}

  search() {
    this.http.get<any>(`https://pt.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${this.query}`)
      .subscribe(data => {
        this.results = data.query.search.map((result: Result) => ({
          title: result.title,
          snippet: result.snippet,
          pageid: `https://pt.wikipedia.org/?curid=${result.pageid}`
        }));
      });
  }
}
