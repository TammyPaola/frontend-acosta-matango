import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


//PrimerNg Modules
import {ButtonModule} from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import {SliderModule} from 'primeng/slider';
import {CardModule} from 'primeng/card';

//Componenets
import { AuthorComponent } from './author/author.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookComponent } from './book/book.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import {TabViewModule} from 'primeng/tabview';
import {ToolbarModule} from 'primeng/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';


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
    ButtonModule,
    TabViewModule,
    ToolbarModule,
    InputSwitchModule,
    FormsModule,
    SliderModule,
    CardModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

