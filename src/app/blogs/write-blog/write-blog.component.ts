import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/shared/blog';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/shared/blog-service';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent implements OnInit {

  title: string;
  summary: string;
  body: string;
  mouseoverSubmit: boolean;

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit() {
  }

  saveBlog(ngForm: NgForm): void {
    this.title = ngForm.form.value.title;
    this.summary = ngForm.form.value.summary;
    this.body = ngForm.form.value.body;
    this.blogService.saveBlog(this.title, this.summary, this.body);
    this.router.navigate(['/blogs']);
  }

  cancel(): void {
    this.router.navigate(['/blogs']);
  }
}
