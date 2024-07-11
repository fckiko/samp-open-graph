import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'samp-open-graph';
// }
export class AppComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags(): void {
    this.titleService.setTitle('My Angular Page');

    this.meta.addTags([
      { property: 'og:title', content: 'My Angular Page' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://dev.bidsnbuys.com' },
      { property: 'og:image', content: 'https://img.jlmconsulting.services/fit-in/256x155/sls_1720675394886Image_1.png' },
      { property: 'og:description', content: 'This is a description of my Angular page.' }
    ]);
  }
}