export const normalizeString = (string: string) =>
  string
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

export const compareSentenceAndValue = (sentence: string, value: string) => {
  const s1 = normalizeString(sentence)
  const s2 = normalizeString(value)
  return s1.includes(s2)
}
