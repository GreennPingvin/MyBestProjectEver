import { type Theme } from 'app/providers/ThemeProvider'
import React from 'react'

export const ThemeDecorator = (theme: Theme) => (Story: React.FC) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  )
}
