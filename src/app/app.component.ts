import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/Interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opcionesMenu: Observable<Componente[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.opcionesMenu = this.dataService.getMenuOpts();
  }

}
