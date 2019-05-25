enum Colors {
  black = '#000000',
  blackAlpha3 = 'rgba(0, 0, 0, 0.3)',
  blackAlpha2 = 'rgba(0, 0, 0, 0.2)',
  accent = '#2a5298',
  accentLight = '#5372ab',
  gray = '#f9f9f9',
  white = '#ffffff'
}

interface Theme {
  colors: { [T in keyof typeof Colors]: typeof Colors[T] }
}

const theme: Theme = {
  colors: Colors,
};

export default theme;