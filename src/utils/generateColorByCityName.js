export const generateColorByCityName = name => {
  const num = name
    .split('')
    .map(v => v.charCodeAt(0))
    .join('')

  const r = num % 155
  const g = (num * 180) % 155
  const b = (num * 234) % 155

  return `linear-gradient(to right, rgb(${r}, ${g}, ${b}), rgb(${r + 100}, ${
    g + 100
  },${b + 100}))`
}
