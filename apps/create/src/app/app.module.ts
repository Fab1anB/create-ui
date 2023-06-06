import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {CreateProjectModule} from './modules/create-project/create-project.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ViewProjectsModule} from './modules/view-projects/view-projects.module';
import {NavigationModule} from "./modules/navigation/navigation.module";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    CreateProjectModule,
    ViewProjectsModule,
    BrowserAnimationsModule,
    NavigationModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
