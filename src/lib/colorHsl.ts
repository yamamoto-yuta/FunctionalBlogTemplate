const hex2rgb = (hex: string) => {
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    return { r, g, b }
  }
  
  const rgb2hsl = ({ r, g, b }: { r: number; g: number; b: number }) => {
    const RGB_MAX = 255
    const HUE_MAX = 360
    const SATURATION_MAX = 100
    const LIGHTNESS_MAX = 100
  
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h, s, l
  
    // Hue
    const hp = HUE_MAX / 6
    if (max == min) {
      h = 0
    } else if (r == max) {
      h = hp * ((g - b) / (max - min))
    } else if (g == max) {
      h = hp * ((b - r) / (max - min)) + HUE_MAX / 3
    } else {
      h = hp * ((r - g) / (max - min)) + (HUE_MAX * 2) / 3
    }
    if (h < 0) {
      h += HUE_MAX
    }
  
    // Saturation
    const cnt = (max + min) / 2
    if (cnt < RGB_MAX / 2) {
      if (max + min <= 0) {
        s = 0
      } else {
        s = ((max - min) / (max + min)) * SATURATION_MAX
      }
    } else {
      s = ((max - min) / (RGB_MAX * 2 - max - min)) * SATURATION_MAX
    }
  
    // Lightness
    l = ((max + min) / RGB_MAX / 2) * LIGHTNESS_MAX
  
    return { h, s, l }
  }
  
  const hsl2rgb = function ({ h, s, l }: { h: number; s: number; l: number }) {
    const RGB_MAX = 255
    const HUE_MAX = 360
    const SATURATION_MAX = 100
    const LIGHTNESS_MAX = 100
    let r, g, b, max, min
  
    h = h % HUE_MAX
    s = s / SATURATION_MAX
    l = l / LIGHTNESS_MAX
  
    if (l < 0.5) {
      max = l + l * s
      min = l - l * s
    } else {
      max = l + (1 - l) * s
      min = l - (1 - l) * s
    }
  
    const hp = HUE_MAX / 6
    const q = h / hp
    if (q <= 1) {
      r = max
      g = (h / hp) * (max - min) + min
      b = min
    } else if (q <= 2) {
      r = ((hp * 2 - h) / hp) * (max - min) + min
      g = max
      b = min
    } else if (q <= 3) {
      r = min
      g = max
      b = ((h - hp * 2) / hp) * (max - min) + min
    } else if (q <= 4) {
      r = min
      g = ((hp * 4 - h) / hp) * (max - min) + min
      b = max
    } else if (q <= 5) {
      r = ((h - hp * 4) / hp) * (max - min) + min
      g = min
      b = max
    } else {
      r = max
      g = min
      b = ((HUE_MAX - h) / hp) * (max - min) + min
    }
    r = r * RGB_MAX
    g = g * RGB_MAX
    b = b * RGB_MAX
    return { r, g, b }
  }
  
  const rgb2hex = ({ r, g, b }: { r: number; g: number; b: number }) => {
    const rhex = ('00' + Math.round(r).toString(16)).slice(-2)
    const ghex = ('00' + Math.round(g).toString(16)).slice(-2)
    const bhex = ('00' + Math.round(b).toString(16)).slice(-2)
    const hex = ''.concat(rhex, ghex, bhex)
    return hex
  }
  
  export const hex2hsl = (hex: string) => {
    return rgb2hsl(hex2rgb(hex))
  }
  
  export const hsl2hex = ({ h, s, l }: { h: number; s: number; l: number }) => {
    return rgb2hex(hsl2rgb({ h, s, l }))
  }
  
  export const transformHsl = (
    themeHsl: { h: number; s: number; l: number },
    trHsl: { h: number; s: number; l: number },
  ) => {
    const HUE_MAX = 360
    const SATURATION_MAX = 100
    const LIGHTNESS_MAX = 100
    let hsl = { h: 0, s: 0, l: 0 }
    hsl.h = Math.max(Math.min(themeHsl.h + trHsl.h, HUE_MAX), 0)
    hsl.s = Math.max(Math.min(themeHsl.s + trHsl.s, SATURATION_MAX), 0)
    hsl.l = Math.max(Math.min(themeHsl.l + trHsl.l, LIGHTNESS_MAX), 0)
    return hsl
  }
  
  export const setHsl = (
    themeHsl: { h: number; s: number; l: number },
    trHsl: {
      h: number | undefined
      s: number | undefined
      l: number | undefined
    },
  ) => {
    const HUE_MAX = 360
    const SATURATION_MAX = 100
    const LIGHTNESS_MAX = 100
    let hsl = { h: themeHsl.h, s: themeHsl.s, l: themeHsl.l }
    if (trHsl.h != undefined) {
      hsl.h = Math.max(Math.min(trHsl.h, HUE_MAX), 0)
    }
    if (trHsl.s != undefined) {
      hsl.s = Math.max(Math.min(trHsl.s, SATURATION_MAX), 0)
    }
    if (trHsl.l != undefined) {
      hsl.l = Math.max(Math.min(trHsl.l, LIGHTNESS_MAX), 0)
    }
    return hsl
  }
  