import 'universal-fetch'
import { parseTransations } from './transations'

const apiUrl = 'https://warren-transactions-api.herokuapp.com/api/transactions'

export const getTransactions = async () =>
  fetch(apiUrl)
    .then(reponse => (reponse.ok ? reponse.json() : new Error('Unexpected error')))
    .then(response => {
      if (!Array.isArray(response)) throw new Error('Not reconized format')
      return parseTransations(response) as []
    })
