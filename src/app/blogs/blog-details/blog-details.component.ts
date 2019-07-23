import { Component, OnInit } from '@angular/core';
import { Blog } from '../../shared/models/blog';
import { BlogService } from '../../shared/services/blog-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blog: Blog;

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.blog = this.blogService.getBlog(+this.activatedRoute.snapshot.params['id']);
  }

}
