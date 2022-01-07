import { Args, moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { getModuleMetadata, defaultTemplate } from '../../utils/utils';
import { DOCS } from '../../utils/consts';

import { Title } from './title.component';
import { DocModule } from '../doc.module';

export default {
  title: `${DOCS}Title`,
  component: Title,
  decorators: [moduleMetadata(getModuleMetadata(DocModule))],
  argType: {
    name: {
      type: 'text',
    },
    nav: {
      type: 'object',
    },
  },
} as Meta;

const Template: Story<Title> = (args: Args) => ({
  props: args,
  template: defaultTemplate({ name: 'doc-title', args }),
});

export const basic = Template.bind({});
basic.args = {
  name: 'Component Name!!',
  nav: [
    {
      label: 'Nav Item 1',
      link: '#billy',
    },
    {
      label: 'Nav Item 2',
      link: '#jimmy',
    },
    {
      label: 'Nav Item 3',
      link: '#sam',
    },
  ],
  ngContent:
    '<p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>',
};
