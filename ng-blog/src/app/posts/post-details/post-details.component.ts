import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/_models/post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPost(1).subscribe(post => this.post = post );
  }

}
