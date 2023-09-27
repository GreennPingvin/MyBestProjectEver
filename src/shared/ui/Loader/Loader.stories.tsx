import type { StoryObj, Meta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Loader } from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
}

type Story = StoryObj<typeof Loader>

export const Light: Story = {
  render: () => <Loader />,
}
export const Dark: Story = {
  render: () => <Loader />,
  decorators: [ThemeDecorator(Theme.DARK)],
}

export default meta
