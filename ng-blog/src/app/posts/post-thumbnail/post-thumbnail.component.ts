import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/_models/post';
import { PostService } from 'src/app/_services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.css']
})
export class PostThumbnailComponent implements OnInit {
  @Input() post: IEvent;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  delete(post) {
    console.log(post);
    
    this.postService.deletePost(post);
    this.router.navigate(['./posts']);
  }

}
