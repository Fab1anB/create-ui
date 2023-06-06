import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectApiService {
  public baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getProjects() {
    return this.http.get(this.baseUrl + '/projects');
  }

  public getProject(id: number) {
    return this.http.get(this.baseUrl + '/projects/' + id);
  }

  public createProject(project: any) {
    return this.http.post(this.baseUrl + '/projects', project);
  }

  public updateProject(id: number, project: any) {
    return this.http.put(this.baseUrl + '/projects/' + id, project);
  }

  public deleteProject(id: number) {
    return this.http.delete(this.baseUrl + '/projects/' + id);
  }
}
