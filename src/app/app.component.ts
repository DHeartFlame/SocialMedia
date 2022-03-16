import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GeneralService } from './services/general.service';
import { SetActiveUser } from './state-management/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'social-media';

  constructor( private generalService: GeneralService, private store: Store ){}

  ngOnInit(){
    this.generalService.initData();
    this.store.dispatch( new SetActiveUser(this.generalService.getUserActive()) );
  }
}
