import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  isFetching = false;
  private isFetchingTimeout: any;

  constructor() {
  }

  setFetching() {
    // Start progress bar if doc not rendered within brief time
    clearTimeout(this.isFetchingTimeout);
    this.isFetchingTimeout = setTimeout(() => this.isFetching = true, 10);
  }

  setFetched() {
    // Stop fetching timeout (which, when render is fast, means progress bar never shown)
    clearTimeout(this.isFetchingTimeout);

    // If progress bar has been shown, keep it for at least 500ms (to avoid flashing).
    setTimeout(() => this.isFetching = false, 500);
  }
}
