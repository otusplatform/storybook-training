import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export type DocNavItem = {
  link: string;
  label: string;
};

@Component({
  selector: 'doc-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Title {
  @Input() name = '';
  @Input() nav: DocNavItem[] = [];
}
