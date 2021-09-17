
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  defaultTheme,
  ThemeProvider,
} from '@xstyled/styled-components'

import { BannerWithText } from '.';


// const theme = {
//   ...defaultTheme,
//   // Customize your theme here
// }


export default {
  title: 'Example/BannerWithText',
  component: BannerWithText,
} as ComponentMeta<any>;

const Template: ComponentStory<typeof BannerWithText> = (props) => <ThemeProvider theme={defaultTheme}><BannerWithText {...props}/></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  imgUrl: 'gntmx_poster.png'
};