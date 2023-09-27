import type { StoryObj, Meta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
}

type Story = StoryObj<typeof Navbar>

export const Light: Story = {
  render: () => <Navbar />,
}
export const Dark: Story = {
  render: () => <Navbar />,
  decorators: [ThemeDecorator(Theme.DARK)],
}

export default meta
