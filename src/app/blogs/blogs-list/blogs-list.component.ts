import { Component, OnInit } from '@angular/core';
import { Blog } from '../../shared/blog';
import { BlogService } from '../../shared/blog-service';

@Component({
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {

  blogs: Blog[];

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.getEvents().subscribe(blogs => {
      this.blogs = blogs;
    });
  }

}