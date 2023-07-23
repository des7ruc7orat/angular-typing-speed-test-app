import { Component, OnInit } from '@angular/core';
import { TextInputAndVisualizerComponent } from 'src/components/text-input-and-visualizer/text-input-and-visualizer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'speed typing test';

  constructor(){}

  ngOnInit() {
  }

}
