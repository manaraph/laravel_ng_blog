import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  event: any;
  isDirty = true;

  constructor(private router: Router, private postService: PostService) {}

  saveEvent(formValues) {
    this.postService.savePost(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['./posts']);
    });
  }

  cancel() {
    this.router.navigate(['./posts']);
  }
}
