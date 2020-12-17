import { sortByDate } from '../../src/helpers/sorts'

describe('sorts', () => {
  describe('sortByDate', () => {
    const entries = [
      { date: '2020-12-01' },
      { date: '2020-12-02' },
      { date: '2020-12-03' },
      { date: '2020-12-06' },
      { date: '2020-12-05' },
      { date: '2020-12-04' },
    ]
    test('desc', () => {
      const result = [
        { date: '2020-12-06' },
        { date: '2020-12-05' },
        { date: '2020-12-04' },
        { date: '2020-12-03' },
        { date: '2020-12-02' },
        { date: '2020-12-01' },
      ]
      expect(sortByDate(entries)).toEqual(result)
    })
    test('asc', () => {
      const result = [
        { date: '2020-12-01' },
        { date: '2020-12-02' },
        { date: '2020-12-03' },
        { date: '2020-12-04' },
        { date: '2020-12-05' },
        { date: '2020-12-06' },
      ]
      expect(sortByDate(entries, false)).toEqual(result)
    })
  })
})
