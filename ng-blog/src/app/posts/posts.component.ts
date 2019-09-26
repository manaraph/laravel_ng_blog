import { Component, OnInit } from '@angular/core';
import { IEvent } from '../_models/post';
import { PostService } from '../_services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IEvent[];

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.posts = this.route.snapshot.data.event;
    this.getPosts();
    console.log(this.posts);

  //   this.posts = [
  //     {
  //       id: 1,
  //       name: 'Angular Connect',
  //       date: '9/26/2036',
  //       time: '10:00 am',
  //       price: 599.99,
  //       imageUrl: '/assets/images/angularconnect-shield.png',
  //       location: '1057 DT London England',
  //     },
  //     {
  //       id: 2,
  //       name: 'ng-nl',
  //       date: '4/15/2037',
  //       time: '9:00 am',
  //       price: 950.00,
  //       imageUrl: '/assets/images/ng-nl.png',
  //       onlineUrl: 'http://ng-nl.org/',
  //     },
  //     {
  //       id: 3,
  //       name: 'ng-conf 2037',
  //       date: '5/4/2037',
  //       time: '9:00 am',
  //       price: 759.00,
  //       imageUrl: '/assets/images/ng-conf.png',
  //       location: 'The Palatial Hotel Salt Lake City USA',
  //     },
  //     {
  //       id: 4,
  //       name: 'UN Angular Summit',
  //       date: '6/10/2037',
  //       time: '8:00 am',
  //       price: 800.00,
  //       imageUrl: '/assets/images/basic-shield.png',
  //       location: 'The UN Angular Center New York USA',
  //     },
  //     {
  //       id: 5,
  //       name: 'ng-vegas',
  //       date: '2/10/2037',
  //       time: '9:00 am',
  //       price: 400.00,
  //       imageUrl: '/assets/images/ng-vegas.png',
  //       location: 'The Excalibur Las Vegas USA',
  //     }
  //   ];
  }

  async getPosts() {
    await this.postService.getPosts().subscribe(posts => this.posts = posts);
    console.log(this.posts);
    return this.posts;
  }
}
