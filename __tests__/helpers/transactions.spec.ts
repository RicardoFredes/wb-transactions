import { transactionOptions, translateTransactionStatus, parseTransations } from '../../src/helpers/transations'
import transactions from '../mocks/transactions.json'
import parsedTransactions from '../mocks/parsed-transactions.json'

describe('transactions', () => {
  test('transactionOptions', () => {
    expect(transactionOptions).toEqual([
      { label: 'Solicitado', value: 'created' },
      { label: 'Processando', value: 'processing' },
      { label: 'Concluído', value: 'processed' },
    ])
  })
  test('translateTransactionStatus', () => {
    const entries = ['created', 'processing', 'processed']
    const result = ['Solicitado', 'Processando', 'Concluído']
    entries.forEach((value, key) => expect(translateTransactionStatus(value)).toBe(result[key]))
  })
  test('parseTransations', () => {
    expect(parseTransations(transactions)).toEqual(parsedTransactions)
  })
})
