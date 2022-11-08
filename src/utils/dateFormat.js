export const dateFormat = time => {
  const date = new Date(time * 1000)
  return date.toLocaleDateString().split('/').join('-')
}
