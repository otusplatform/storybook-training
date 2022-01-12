import { Story, Meta, Args } from '@storybook/angular';

import { TagComponent } from './tag.component';

import { defaultTemplate } from '@otus/docs-utils';

export default {
  title: 'Tag',
  component: TagComponent,
} as Meta<TagComponent>;

const Template: Story<TagComponent> = (args: Args) => ({
  props: args,
  template: defaultTemplate({
    name: 'storybook-training-tag',
    args,
    ngContent: 'A Tag',
  }),
});

export const Basic = Template.bind({});
Basic.args = {};
