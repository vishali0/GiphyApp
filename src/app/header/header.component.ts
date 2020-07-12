import { Component, OnInit } from '@angular/core';
import { GifService } from '../gif.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private gifService: GifService) { }

  ngOnInit(): void {
  }
  create(searchTerm: string) {
    if (searchTerm !== "") {
      this.gifService.searchGifs(searchTerm);

    }

  }
  alert() {
    alert("Successfully gif created:)");
  }

  delete() {
    alert("latest created gif got deleted:(");
  }

}
