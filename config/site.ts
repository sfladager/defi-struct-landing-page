// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  previewImg: string
  localeDefault: string
  links: {
    twitter: string
    github: string
  }
}

export const SITE_CANONICAL = 'https://defi-struct.com'

export const siteConfig: SiteConfig = {
  name: 'DeFi Struct',
  title: 'Simplified DeFi',
  emoji: '⚡',
  description: 'DeFi strategies with clear risk/reward information, offer greater insight, and hold individuals who promote or develop strategies more socially accountable',
  previewImg: `${SITE_CANONICAL}/preview.png`,
  localeDefault: 'en',
  links: {
    twitter: 'https://twitter.com/district_labs',
    github: 'https://github.com/turbo-eth',
  },
}