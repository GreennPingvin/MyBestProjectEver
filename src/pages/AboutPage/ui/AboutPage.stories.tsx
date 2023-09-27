import type { StoryObj, Meta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import AboutPage from './AboutPage'

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
}

type Story = StoryObj<typeof AboutPage>

export const Light: Story = {
  render: () => <AboutPage />,
}
export const Dark: Story = {
  render: () => <AboutPage />,
  decorators: [ThemeDecorator(Theme.DARK)],
}

export default meta
