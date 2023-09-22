import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { SaveBookComponent } from './save-book/save-book.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path:'libraryRepository', component:BookListComponent},
  {path:'savebook', component:SaveBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
