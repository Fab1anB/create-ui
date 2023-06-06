import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../../create-project/models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsApiService {
  public baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getProjects(categories: string[] = []) {
    return this.http.post<Project []>(this.baseUrl + '/projects/search', categories);
  }
}
