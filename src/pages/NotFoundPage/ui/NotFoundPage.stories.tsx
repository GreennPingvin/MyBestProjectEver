import type { StoryObj, Meta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { NotFoundPage } from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
}

type Story = StoryObj<typeof NotFoundPage>

export const Light: Story = {
  render: () => <NotFoundPage />,
}
export const Dark: Story = {
  render: () => <NotFoundPage />,
  decorators: [ThemeDecorator(Theme.DARK)],
}

export default meta
