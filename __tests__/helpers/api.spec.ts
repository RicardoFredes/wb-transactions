jest.mock('node-fetch')
jest.mock('../../src/helpers/transations')

import fetch from 'node-fetch'
import { parseTransations } from '../../src/helpers/transations'
import { getTransactions } from '../../src/helpers/api'

const makeFetchResponse = (response: any, ok = true) => {
  // @ts-ignore
  return fetch.mockReturnValue(
    Promise.resolve({
      ok,
      json: async () => response,
    })
  )
}

describe('api', () => {
  describe('getTransactions', () => {
    test('ensure thown if response is NOT success', async () => {
      makeFetchResponse('error', false)
      expect(getTransactions()).rejects.toThrowError('Unexpected error')
    })
    test('ensure thown if response is NOT a array', async () => {
      makeFetchResponse('invalid_format')
      expect(getTransactions()).rejects.toThrowError('Not reconized format')
    })
    test('ensure returns empty array if response is empty array', async () => {
      makeFetchResponse([])
      // @ts-ignore
      parseTransations.mockReturnValue([])
      expect(await getTransactions()).toEqual([])
    })
    test('ensure returns valid parsed data on success', async () => {
      makeFetchResponse([])
      // @ts-ignore
      parseTransations.mockReturnValue('parsed_transactions')
      expect(await getTransactions()).toBe('parsed_transactions')
    })
  })
})
