import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/_models/post';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.css']
})
export class PostThumbnailComponent implements OnInit {
  @Input() post: IEvent;

  constructor() { }

  ngOnInit() {
  }

}
