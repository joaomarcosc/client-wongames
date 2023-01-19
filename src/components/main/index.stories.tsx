import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IProps, Main } from '.'

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args: IProps) => (
  <Main {...args} />
)

export const TitleAndDescription = Template.bind({})
TitleAndDescription.args = {
  title: 'Boilerplate',
  description: 'Main component'
}
