import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MenuComponent} from './components/menu/menu.component';
import {MatListModule} from "@angular/material/list";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [NavigationComponent, MenuComponent],
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatButtonModule, MatListModule, RouterLink],
  exports: [NavigationComponent, MenuComponent],
})
export class NavigationModule {}
