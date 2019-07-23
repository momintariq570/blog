import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../shared/blog';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input() blog: Blog;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
