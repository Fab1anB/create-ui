import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {ProjectsModule} from "./modules/projects/projects.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ViewProjectsModule} from "./modules/view-projects/view-projects.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    ProjectsModule,
    ViewProjectsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
