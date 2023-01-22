import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading, { Props } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Heading>

export const Template: ComponentStory<typeof Heading> = (args: Props) => (
  <Heading {...args} />
)

Template.args = {
  children: 'Heading',
  lineColor: 'primary',
  color: 'black',
  lineBottom: false,
  lineLeft: false
}
