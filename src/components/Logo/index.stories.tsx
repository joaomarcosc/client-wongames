import { ComponentStory, ComponentMeta } from '@storybook/react'
import Logo, { Props } from '.'

export default {
  title: 'Logo',
  component: Logo
} as ComponentMeta<typeof Logo>

export const Template: ComponentStory<typeof Logo> = (args: Props) => (
  <Logo {...args} />
)
