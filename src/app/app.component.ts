import { Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'social-media';

  constructor( private generalService: GeneralService ){}

  ngOnInit(){
    this.generalService.initData();
  }
}
