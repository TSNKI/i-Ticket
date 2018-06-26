import { Component, OnInit } from '@angular/core';
import { ScrollService } from './shared/scroll.service';
import { LocationService } from './shared/location.service';
import { FetchService } from './shared/fetch.service';

@Component({
  selector: 'it-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  currentPath: string;

  constructor(
    private locationService: LocationService,
    private scrollService: ScrollService,
    public fetchService: FetchService,
  ) {
  }

  ngOnInit(): void {
    this.locationService.currentPath.subscribe(path => {
      if (path === this.currentPath) {
        // scroll only if on same page (most likely a change to the hash)
        this.autoScroll();
      } else {
        // don't scroll; leave that to `onDocRendered`
        this.currentPath = path;
      }
    });
  }

  // Scroll to the anchor in the hash fragment or top of doc.
  autoScroll() {
    this.scrollService.scroll();
  }

}
