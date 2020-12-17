import { compareSentenceAndValue, normalizeString } from '../../src/helpers/strings'

describe('strings', () => {
  test('normalizeString', () => {
    const entries = [
      { value: 'palavra', result: 'palavra' },
      { value: 'ação, ações', result: 'acao, acoes' },
      { value: 'ABCabc123', result: 'abcabc123' },
      { value: 'Hash-$%2/*', result: 'hash-$%2/*' },
      { value: 'áéíóú', result: 'aeiou' },
      { value: 'ÁÉÍÓÚ', result: 'aeiou' },
    ]
    entries.forEach(({ value, result }) => expect(normalizeString(value)).toBe(result))
  })
  test('compareSentenceAndValue', () => {
    const sentense = 'Aproveite para comprar as ações da empresa X'
    const entries = [
      { value: 'acoes', result: true },
      { value: 'ações', result: true },
      { value: 'aprov', result: true },
      { value: '1234', result: false },
      { value: 'paracomprar', result: false },
    ]
    entries.forEach(({ value, result }) => expect(compareSentenceAndValue(sentense, value)).toBe(result))
  })
})
