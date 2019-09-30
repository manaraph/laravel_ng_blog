import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/_services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    console.log(this.route.params);
    this.route.data.forEach( data => {
      console.log(data);
      // this.post = data.event;
    });
    // this.postService.getPost(1).subscribe(post => this.post = post );
  }

}
