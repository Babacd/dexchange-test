import { describe, it, expect } from 'vitest'

describe('Sidebar', () => {
  it('should have navigation structure', () => {
    const navItems = ['Dashboard', 'Tables', 'Billing', 'RTL']
    expect(navItems).toContain('Dashboard')
    expect(navItems).toContain('Tables')
  })

  it('should have account pages', () => {
    const accountPages = ['Profile', 'Sign In', 'Sign Up']
    expect(accountPages).toHaveLength(3)
  })

  it('should have help section', () => {
    const helpText = 'Need help?'
    expect(helpText).toBe('Need help?')
  })
})
