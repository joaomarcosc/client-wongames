import { ComponentStory, ComponentMeta } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as ComponentMeta<typeof MediaMatch>

export const Desktop: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch greaterThan="medium">
    <h1>Desktop only</h1>
  </MediaMatch>
)

export const Mobile: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch lessThan="medium">
    <h1>Mobile only</h1>
  </MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
