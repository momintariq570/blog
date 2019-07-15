import { Routes } from '@angular/router';
import { BlogsListComponent } from './blogs/blogs-list/blogs-list.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { HomeComponent } from './home/home.component';
import { WriteBlogComponent } from './blogs/write-blog/write-blog.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blogs', component: BlogsListComponent },
  { path: 'blogs/new', component: WriteBlogComponent},
  { path: 'blogs/:id', component: BlogDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
