import type { StoryObj, Meta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'

import { Button, ThemeButton } from './Button'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: () => <Button>Text</Button>,
}
export const Clear: Story = {
  render: () => <Button theme={ThemeButton.CLEAR}>Text</Button>,
}
export const Outlined: Story = {
  render: () => <Button theme={ThemeButton.OUTLINE}>Text</Button>,
}
export const OutlinedDark: Story = {
  render: () => <Button theme={ThemeButton.OUTLINE}>Text</Button>,
  decorators: [ThemeDecorator(Theme.DARK)],
}

export default meta
