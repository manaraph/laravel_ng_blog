import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/_models/post';
import { PostService } from 'src/app/_services/post.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.css']
})
export class PostThumbnailComponent implements OnInit {
  @Input() post: IEvent;
  postNavigationSubscription;

  constructor(private postService: PostService, private router: Router) {
    this.postNavigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      // if (e instanceof NavigationEnd) {
        
      // }
    });
  }

  ngOnInit() {
  }

  delete(id) {
    this.postService.deletePost(id).subscribe();
    this.router.navigate(['/posts']);
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.postNavigationSubscription) {
       this.postNavigationSubscription.unsubscribe();
    }
  }

}
