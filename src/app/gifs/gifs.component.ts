import { Component, OnInit, OnDestroy } from '@angular/core';
import { GifService } from '../gif.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription: Subscription;

  constructor(private gifService: GifService) { }

  ngOnInit(): void {
    this.gifService.getTrendingGifs();
    this.gifService.getGifs()
      .subscribe((response: any) => {
        this.gifs = response;
      });

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
