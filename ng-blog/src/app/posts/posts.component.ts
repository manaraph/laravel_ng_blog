import { Component, OnInit } from '@angular/core';
import { IEvent } from '../_models/post';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IEvent[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => this.posts = posts.data);
  }
}
