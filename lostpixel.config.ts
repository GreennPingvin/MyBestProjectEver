import { type CustomProjectConfig } from 'lost-pixel'

// @ts-expect-error
export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: './storybook-static',
  },

  lostPixelProjectId: 'cln227uxka38imk0ex5z2t9gw',
  apiKey: process.env.LOST_PIXEL_API_KEY,
}
