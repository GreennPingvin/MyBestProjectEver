import type { StoryObj, Meta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
}

type Story = StoryObj<typeof ThemeSwitcher>

export const Light: Story = {
  render: () => <ThemeSwitcher />,
}
export const Dark: Story = {
  render: () => <ThemeSwitcher />,
  decorators: [ThemeDecorator(Theme.DARK)],
}

export default meta
