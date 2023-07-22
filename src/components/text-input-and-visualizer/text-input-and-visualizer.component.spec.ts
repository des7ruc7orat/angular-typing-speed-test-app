import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputAndVisualizerComponent } from './text-input-and-visualizer.component';

describe('TextInputAndVisualizerComponent', () => {
  let component: TextInputAndVisualizerComponent;
  let fixture: ComponentFixture<TextInputAndVisualizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextInputAndVisualizerComponent]
    });
    fixture = TestBed.createComponent(TextInputAndVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
