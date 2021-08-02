import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookComponent } from './book/book.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    MainComponent,
    NotFoundComponent,
    BookComponent,
    UnderMaintenanceComponent,
    AccessDeniedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

