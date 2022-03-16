import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-loader',
  templateUrl: './img-loader.component.html',
  styleUrls: ['./img-loader.component.scss']
})
export class ImgLoaderComponent implements OnInit {

  @Input() src?: string;
  @Input() height: string = '100%';
  @Input() width: string = '100%';
  @Input() round: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
