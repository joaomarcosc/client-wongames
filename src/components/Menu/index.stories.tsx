import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu
} as ComponentMeta<typeof Menu>

export const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} />
)

Template.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
