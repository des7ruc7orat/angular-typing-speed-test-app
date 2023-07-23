import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputAndVisualizerComponent } from '../text-input-and-visualizer/text-input-and-visualizer.component';

@Component({
  selector: 'app-renderer',
  standalone: true,
  imports: [CommonModule, TextInputAndVisualizerComponent],
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent {

}
