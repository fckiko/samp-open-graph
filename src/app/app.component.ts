import { Component, OnInit } from '@angular/core';
import { MetaService } from './meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'samp-open-graph';
// }
export class AppComponent implements OnInit {

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'My Angular Page',
      description: 'This is a description of my Angular page.',
      image: 'https://www.example.com/image.jpg',
      url: 'https://www.example.com/page.html'
    });
  }
}