import type { StoryObj, Meta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import MainPage from './MainPage'

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
}

type Story = StoryObj<typeof MainPage>

export const Light: Story = {
  render: () => <MainPage />,
}
export const Dark: Story = {
  render: () => <MainPage />,
  decorators: [ThemeDecorator(Theme.DARK)],
}

export default meta
