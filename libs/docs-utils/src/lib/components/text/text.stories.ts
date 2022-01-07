import { Args, moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { defaultTemplate, getModuleMetadata } from '../../utils/utils';
import { DOCS } from '../../utils/consts';

import { Text } from './text.component';
import { DocModule } from '../doc.module';

export default {
  title: `${DOCS}Text`,
  component: Text,
  decorators: [moduleMetadata(getModuleMetadata(DocModule))],
} as Meta;

const Template: Story<Text> = (args: Args) => ({
  props: args,
  template: defaultTemplate({ name: 'doc-text', args }),
});

export const basic = Template.bind({});
basic.args = {
  ngContent: `
    <h2>Test H2 Heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.</p>

    <h2>Test H2 heading</h2>
    <p>Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>

    <h3>Test H3 heading</h3>
    <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
    <ul>
      <li>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor.</li>
      <li>Donec ullamcorper nulla non metus auctor fringilla.</li>
      <li>Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</li>
    </ul>

    <h3>Test H3 heading</h3>
    <p>Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    <p>Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.</p>
    <p>Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

    <h3>Test H3 heading</h3>
    <p>Curabitur blandit tempus porttitor. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
  `,
};
