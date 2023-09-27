import type { StoryObj, Meta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'

import { AppLink, AppLinkTheme } from './AppLink'

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
}

type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
  args: {
    children: 'Hello',
    to: '/',
    theme: AppLinkTheme.PRIMARY,
  },
}
export const Secondary: Story = {
  args: {
    ...Primary.args,
    theme: AppLinkTheme.SECONDARY,
  },
}
export const Red: Story = {
  args: {
    ...Primary.args,
    theme: AppLinkTheme.RED,
  },
}
export const PrimaryDark: Story = {
  args: {
    ...Primary.args,
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const SecondaryDark: Story = {
  args: {
    ...PrimaryDark.args,
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [...PrimaryDark.decorators],
}
export const RedDark: Story = {
  args: {
    ...PrimaryDark.args,
    theme: AppLinkTheme.RED,
  },
  decorators: [...PrimaryDark.decorators],
}

export default meta
