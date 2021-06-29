
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BannerWithText } from '.';

export default {
  title: 'Example/BannerWithText',
  component: BannerWithText,
} as ComponentMeta<any>;

const Template: ComponentStory<typeof BannerWithText> = (props) => <BannerWithText {...props}/>;

export const Default = Template.bind({});
Default.args = {
  imgUrl: 'gntmx_poster.png'
};