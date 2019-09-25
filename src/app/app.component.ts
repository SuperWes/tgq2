import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  banner: string;
  ngOnInit(): void {
    this.changeBanner();
  }
  title = "The Gamer's Quarter";

  changeBanner() {
    this.banner = this.pickRandomBanner();
  }

  private pickRandomBanner(bannerCount: number = 1017): string {
    // JavaScript to interpolate random images into a page.
    // Number of alternative images
    var xoxo = new Array<string>(bannerCount);  // Array to hold filenames

    for (var i = 0; i < bannerCount; i++) {
      xoxo[(i)] = "assets/banners/tgq" + (i + 1) + ".jpg";
    }

    var choice = this.pickRandom(bannerCount);
    return xoxo[choice];
  }

  private pickRandom(range): number {
    if (Math.random)
      return Math.round(Math.random() * (range - 1));
    else {
      var now = new Date();
      return (now.getTime() / 1000) % range;
    }
  }
}
