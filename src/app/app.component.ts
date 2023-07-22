import { Component, OnInit } from '@angular/core';
import { GetTextService } from 'src/services/get-text.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'speed typing test';

  constructor(private getTextS: GetTextService){}

  ngOnInit() {
   console.log(this.getTextS.getText());
   
  }

}
