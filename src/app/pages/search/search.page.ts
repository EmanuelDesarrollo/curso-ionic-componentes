import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[] = [];
  searchText : string = '';

  constructor(private http: DataService) { }

  ngOnInit() {
    this.http.getAlbums().subscribe(res => this.albums = res);
  }

  onSearchChange(event: any) {
    // this.albums = this.albums.filter(album => album.title.includes(event.detail.value));
    this.searchText = event.detail.value;
  }

}
