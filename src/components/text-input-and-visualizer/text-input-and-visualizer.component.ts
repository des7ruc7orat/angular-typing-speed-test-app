import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTextService } from 'src/services/get-text.service';
@Component({
  selector: 'app-text-input-and-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-input-and-visualizer.component.html',
  styleUrls: ['./text-input-and-visualizer.component.scss']
})
export class TextInputAndVisualizerComponent implements OnInit {
  public textString!: String;

  constructor(private getTextService: GetTextService){}

  ngOnInit(): void {
      console.log(this.getTextService.getText());
      this.textString = this.getTextService.getText();   
  }
}
