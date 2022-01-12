import { moduleMetadata, Story, Meta, Args } from '@storybook/angular';

import { CardComponent } from './card.component';
import { CardModule } from './card.module';

import { defaultTemplate, getModuleMetadata } from '@otus/docs-utils';

const meta = getModuleMetadata(CardModule);

export default {
  title: 'Card',
  component: CardComponent,
  decorators: [moduleMetadata(meta)],
} as Meta<CardComponent>;

const Template: Story<CardComponent> = (args: Args) => ({
  props: args,
  template: defaultTemplate({
    name: 'storybook-training-card',
    args,
    ngContent:
      'A simple description as to why you should read about how wonderful billy is and how important it will be in your life.',
  }),
});

export const Basic = Template.bind({});
Basic.args = {
  heading: 'The Wonderful Billy!',
  tag: 'billy',
  link: '#',
};
