import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogsListComponent } from './blogs/blogs-list/blogs-list.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WriteBlogComponent } from './blogs/write-blog/write-blog.component';
import { BlogCardComponent } from './blogs/blog-card/blog-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogsListComponent,
    BlogDetailsComponent,
    HomeComponent,
    WriteBlogComponent,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
