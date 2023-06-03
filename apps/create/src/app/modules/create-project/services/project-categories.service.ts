import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectCategoriesService {
  public baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  public findFuzzyCategories(input: string) {
    return this.http.post<{title: string}[]>(this.baseUrl + '/categories/find', {
      input,
    });
  }
}
