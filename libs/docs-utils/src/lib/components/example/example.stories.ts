import { Args, moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { defaultTemplate, getModuleMetadata } from '../../utils/utils';
import { DOCS } from '../../utils/consts';

import { Example } from './example.component';
import { DocModule } from '../doc.module';

export default {
  title: `${DOCS}Example`,
  component: Example,
  decorators: [moduleMetadata(getModuleMetadata(DocModule))],
} as Meta;

const Template: Story<Example> = (args: Args) => ({
  props: args,
  template: defaultTemplate({ name: 'doc-example', args }),
});

export const basic = Template.bind({});
basic.args = {
  title: `Billy's example`,
  caption: `This is a caption explaining that there is something more to this than meets the eye.`,
  ngContent: `<doc-title name="The Name">Adding some content here</doc-title>`,
};
