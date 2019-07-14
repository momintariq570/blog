import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }
}
