import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/shared/blog';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent implements OnInit {

  blog: Blog;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }
}
