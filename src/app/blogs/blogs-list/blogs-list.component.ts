import { Component, OnInit } from '@angular/core';
import { Blog } from '../../shared/models/blog';
import { BlogService } from '../../shared/services/blog-service';

@Component({
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {

  blogs: Blog[];

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
    });
  }

}
