import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta, private titleService: Title) { }

  setMetaTags(config: { title: string, description: string, image: string, url: string }): void {
    this.titleService.setTitle(config.title);

    this.meta.addTags([
      { property: 'og:title', content: config.title },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: config.url },
      { property: 'og:image', content: config.image },
      { property: 'og:description', content: config.description }
    ]);
  }
}