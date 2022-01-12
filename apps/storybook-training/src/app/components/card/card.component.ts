import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-training-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() heading = '';
  @Input() image = '';
  @Input() link = '';
  @Input() tag = '';
}
