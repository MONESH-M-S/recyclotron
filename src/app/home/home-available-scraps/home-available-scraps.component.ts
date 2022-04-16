import { Component, OnInit } from '@angular/core';
import { Waste } from 'src/app/waste.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-available-scraps',
  templateUrl: './home-available-scraps.component.html',
  styleUrls: ['./home-available-scraps.component.scss'],
})
export class HomeAvailableScrapsComponent implements OnInit {
  availableScraps = [];
  locationScraps = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getAllScraps().subscribe((res) => {
      this.availableScraps = res.wastes;

      var holder = {};
      this.availableScraps.forEach((d) => {
        if (holder.hasOwnProperty(d.scrapId.location)) {
          holder[d.scrapId.location] = holder[d.scrapId.location] + 1;
        } else {
          holder[d.scrapId.location] = 1;
        }
      });

      for (var prop in holder) {
        this.locationScraps.push({ location: prop, count: holder[prop] });
      }
    });
  }
}
