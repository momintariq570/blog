import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { Subject, Observable } from 'rxjs';
import { AuthService } from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[];
  currentId: number;

  constructor(private authService: AuthService) {
    this.blogs = [
      {
        id: 1,
        title: 'title 1',
        author: 'author 1',
        summary: 'summary 1',
        body: 'body 1',
        dateCreated: new Date('01/01/2019'),
        dateUpdated: new Date('01/01/2019')
      },
      {
        id: 2,
        title: 'title 2',
        author: 'author 2',
        summary: 'summary 2',
        body: 'body 2',
        dateCreated: new Date('01/01/2019'),
        dateUpdated: new Date('01/01/2019')
      },
      {
        id: 3,
        title: 'title 3',
        author: 'author 3',
        summary: 'summary 3',
        body: 'body 3',
        dateCreated: new Date('01/01/2019'),
        dateUpdated: new Date('01/01/2019')
      },
      {
        id: 4,
        title: 'title 4',
        author: 'author 4',
        summary: 'summary 4',
        body: 'body 4',
        dateCreated: new Date('01/01/2019'),
        dateUpdated: new Date('01/01/2019')
      },
      {
        id: 5,
        title: 'title 5',
        author: 'author 5',
        summary: 'summary 5',
        body: 'body 5',
        dateCreated: new Date('01/01/2019'),
        dateUpdated: new Date('01/01/2019')
      },
      {
        id: 6,
        title: 'title 6',
        author: 'author 6',
        summary: 'summary 6',
        body: 'body 6',
        dateCreated: new Date('01/01/2019'),
        dateUpdated: new Date('01/01/2019')
      },
      {
        id: 7,
        title: 'title 7',
        author: 'author 7',
        summary: 'summary 7',
        body: 'body 7',
        dateCreated: new Date('01/01/2019'),
        dateUpdated: new Date('01/01/2019')
      },
      {
        id: 8,
        title: 'title 8',
        author: 'author 8',
        summary: 'summary 8',
        body: 'body 8',
        dateCreated: new Date('01/01/2019'),
        dateUpdated: new Date('01/01/2019')
      }
    ];

    this.blogs.sort((a, b) => a.id > b.id ? 1 : -1);
    this.currentId = this.blogs[this.blogs.length - 1].id;
  }

  getBlogs(): Observable<Blog[]> {
    let subject = new Subject<Blog[]>();
    setTimeout(() => {
      subject.next(this.blogs);
      subject.complete();
    }, 1000);
    return subject;
  }

  getBlog(id: number): Blog {
    return this.blogs.find(blog => blog.id === id);
  }

  saveBlog(title: string, summary: string, body: string): void {
    const blog: Blog = {
      id: ++this.currentId,
      title,
      author: this.authService.currentUser.userName,
      summary,
      body,
      dateCreated: new Date()
    };
    this.blogs.push(blog);
  }
}
