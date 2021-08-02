import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent} from   './book/book.component';
import { AuthorComponent } from './author/author.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', component:MainComponent },
  {path:'books', component:BookComponent },
  {path:'authors',component:AuthorComponent },
  {path: 'not-found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
