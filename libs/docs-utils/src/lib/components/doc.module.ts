import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Text } from './text/text.component';
import { Title } from './title/title.component';
import { Example } from './example/example.component';

@NgModule({
  declarations: [Text, Title, Example],
  imports: [CommonModule],
  exports: [Text, Title, Example],
})
export class DocModule {}
