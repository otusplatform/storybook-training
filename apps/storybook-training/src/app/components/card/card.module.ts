import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardComponent } from './card.component';
import { TagModule } from '../tag/tag.module';

@NgModule({
  declarations: [CardComponent],
  imports: [BrowserModule, TagModule],
  exports: [CardComponent],
  providers: [],
})
export class CardModule {}
