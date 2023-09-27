import type { StoryObj, Meta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
}

type Story = StoryObj<typeof Sidebar>

export const Light: Story = {
  render: () => <Sidebar />,
}
export const Dark: Story = {
  render: () => <Sidebar />,
  decorators: [ThemeDecorator(Theme.DARK)],
}

export default meta
