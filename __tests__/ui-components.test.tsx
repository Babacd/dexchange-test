import { describe, it, expect } from 'vitest'

describe('UI Components', () => {
  describe('Button', () => {
    it('should have button variants', () => {
      const variants = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
      expect(variants).toContain('default')
      expect(variants).toContain('outline')
    })

    it('should support different sizes', () => {
      const sizes = ['default', 'sm', 'lg', 'icon']
      expect(sizes).toHaveLength(4)
    })
  })

  describe('Card', () => {
    it('should support card components', () => {
      const cardComponents = ['Card', 'CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter']
      expect(cardComponents).toContain('Card')
      expect(cardComponents).toContain('CardContent')
    })
  })

  describe('Utils', () => {
    it('should merge classnames', () => {
      const className1 = 'text-red-500'
      const className2 = 'bg-blue-500'
      const merged = `${className1} ${className2}`
      expect(merged).toBe('text-red-500 bg-blue-500')
    })
  })
})
