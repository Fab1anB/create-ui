import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../../create-project/models/project';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  public baseUrl = 'http://localhost:3000/projects/';

  constructor(private http: HttpClient) {}

  public getProjects(categories: string[] = []) {
    return this.http.post<Project[]>(this.baseUrl + 'search', categories);
  }

  public getTrendingSearches() {
    return this.http
      .get<any[]>(this.baseUrl + 'search/trending')
      .pipe(
        map((trends) => trends.map((trend) => trend.project_search_category))
      );
  }
}
