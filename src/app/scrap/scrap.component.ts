import { Component, OnInit } from '@angular/core';
import { Waste } from '../waste.model';
import { ScrapService } from './scrap.service';

@Component({
  selector: 'app-scrap',
  templateUrl: './scrap.component.html',
  styleUrls: ['./scrap.component.scss'],
})
export class ScrapComponent implements OnInit {
  wastes: Waste[];
  wasteAvailable: number = 0;
  constructor(private scrapService: ScrapService) {}

  ngOnInit(): void {
    this.scrapService.getAllScraps().subscribe((res) => {
      this.wasteAvailable = res.wastes.length;
      if (res.wastes.length > 0) {
        console.log(res.wastes);
        this.wastes = res.wastes;
      }
    });
  }
}
