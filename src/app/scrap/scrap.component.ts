import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private scrapService: ScrapService, private router: Router) {}

  ngOnInit(): void {
    this.scrapService.getAllScraps().subscribe((res) => {
      this.wasteAvailable = res.wastes.length;
      if (res.wastes.length > 0) {
        this.wastes = res.wastes;
      }
    });
  }

  onProductClicked(id: string) {
    this.router.navigate(['sc/' + id]);
  }
}
