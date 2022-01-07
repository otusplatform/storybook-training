import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'doc-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example {
  @Input() title = 'Example';
  @Input() caption = '';
}
