import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  offers: any[] = [];

  constructor(private route: ActivatedRoute) {
    this.offers = JSON.parse(this.route.snapshot.params.offers);
  }

  ngOnInit() {
  }

}
