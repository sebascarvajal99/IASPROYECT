import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SaveBookComponent } from './save-book/save-book.component';
import { FormsModule } from '@angular/forms';
import { BookRepositoryService } from './services/book-repository.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NavbarComponent,
    HomeComponent,
    SaveBookComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
