import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
// import { MetaService } from './meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'samp-open-graph';
// }
// export class AppComponent implements OnInit {

//   title = 'samp-open-graph';
//   constructor(private metaService: MetaService) { }

//   ngOnInit(): void {
//     this.metaService.setMetaTags({
//       title: 'My Angular Page',
//       description: 'This is a description of my Angular page.',
//       image: 'https://img.jlmconsulting.services/fit-in/256x155/sls_1720675394886Image_1.png',
//       url: 'https://dev.bidsnbuys.com'
//     });
//   }
// }
export class AppComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) { }

  title = 'samp-open-graph';
  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags(): void {
    this.titleService.setTitle('My Angular Page');

    this.meta.addTags([
      { property: 'og:title', content: 'My Angular Page' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.example.com/page.html' },
      { property: 'og:image', content: 'https://www.example.com/image.jpg' },
      { property: 'og:description', content: 'This is a description of my Angular page.' }
    ]);
  }
}