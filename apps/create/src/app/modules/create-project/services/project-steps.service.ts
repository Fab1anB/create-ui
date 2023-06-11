import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProjectStep} from "../models/project-step";

@Injectable({
  providedIn: 'root'
})
export class ProjectStepsService {
  public baseUrl = 'http://localhost:3000/projects/';

  constructor(private http: HttpClient) {}

  public getProjectSteps(projectId: string) {
    return this.http.get<ProjectStep []>(`${this.baseUrl}${projectId}/steps`);
  }

  public getProjectStep(id: number) {
    return this.http.get(this.baseUrl + '/projects/' + id);
  }
}
