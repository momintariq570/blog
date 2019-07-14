import { Routes } from '@angular/router';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { HomeComponent } from './home/home.component';
import { WriteBlogComponent } from './write-blog/write-blog.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blogs', component: BlogsListComponent },
  { path: 'blogs/new', component: WriteBlogComponent},
  { path: 'blogs/:id', component: BlogDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
