import type { StoryObj, Meta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { PageError } from './PageError'

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
}

type Story = StoryObj<typeof PageError>

export const Light: Story = {
  render: () => <PageError />,
}
export const Dark: Story = {
  render: () => <PageError />,
  decorators: [ThemeDecorator(Theme.DARK)],
}

export default meta
