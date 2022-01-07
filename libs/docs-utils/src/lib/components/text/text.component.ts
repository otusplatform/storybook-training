import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'doc-text',
  templateUrl: 'text.component.html',
  styleUrls: ['text.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Text {}
