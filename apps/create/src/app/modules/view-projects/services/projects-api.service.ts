import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../../projects/models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsApiService {
  public baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getProjects() {
    return this.http.get<Project []>(this.baseUrl + '/projects');
  }
}
