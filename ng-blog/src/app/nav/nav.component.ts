import { Component, OnInit, HostListener } from '@angular/core';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const page = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const nav = document.getElementById('nav');
    if (page > 50) {
      nav.classList.add('header-scrolled');
    } else {
      nav.classList.remove('header-scrolled');
    }
  }
}
